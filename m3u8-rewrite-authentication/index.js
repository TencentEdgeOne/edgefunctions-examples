// The private key for TypeA authentication. Specify the key as needed and make sure that the key remains confidential to prevent leakage.
const PK = '0123456789';
// The validity period of the key for encryption and verification, in seconds.
const TTL = 60;
const KEY_NAME = 'key';
const UID = 0;
const SUFFIX_LIST = ['.m3u8', '.ts'];

addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    const { request } = event;
    const urlInfo = new URL(request.url);
    const suffix = getSuffix(urlInfo.pathname);

    // Check whether the file extension is .m3u8 or .ts.
    if (!SUFFIX_LIST.includes(suffix)) {
      return fetch(request);
    }

    // TypeA authentication.
    const checkResult = await checkTypeA(urlInfo);
    if (!checkResult.flag) {
      return new Response(checkResult.message, {
        status: 403,
        headers: {
          'X-Auth-Err': checkResult.message,
        },
      });
    }

    // Rewrite the .m3u8 file and respond.
    if (suffix === '.m3u8') {
      return fetchM3u8({
        request,
        querySign: {
          basePath: urlInfo.pathname.substring(
            0,
            urlInfo.pathname.lastIndexOf('/')
          ),
          ...checkResult.querySign,
        },
      });
    }

    // Respond with .ts resources.
    if (suffix === '.ts') {
      return fetchTs(request);
    }
  } catch (error) {
    return new Response(error.stack, { status: 544 });
  }

  return fetch(request);
}

async function checkTypeA(urlInfo) {
  const sign = urlInfo.searchParams.get(KEY_NAME) || '';
  const elements = sign.split('-');

  if (elements.length !== 4) {
    return {
      flag: false,
      message: 'Invalid Sign Format',
    };
  }

  const [ts, rand, uid, md5hash] = elements;
  if (
    ts === undefined ||
    rand === undefined ||
    uid === undefined ||
    md5hash === undefined
  ) {
    return {
      flag: false,
      message: 'Invalid Sign Format',
    };
  }

  if (!isNumber(ts)) {
    return {
      flag: false,
      message: 'Sign Expired',
    };
  }

  if (Date.now() > (Number(ts) + TTL) * 1000) {
    return {
      flag: false,
      message: 'Sign Expired',
    };
  }

  const hash = await md5([urlInfo.pathname, ts, rand, uid, PK].join('-'));
  if (hash !== md5hash) {
    return {
      flag: false,
      message: 'Verify Sign Failed',
    };
  }
  return {
    flag: true,
    message: 'success',
    querySign: {
      rand,
      uid,
      md5hash,
      ts,
    },
  };
}

async function fetchM3u8({ request, querySign }) {
  request.headers.delete('Accept-Encoding');
  let response = null;
  try {
    response = await fetch(request);
    if (response.status !== 200) {
      return response;
    }
  } catch (error) {
    return new Response('', {
      status: 504,
      headers: { 'X-Fetch-Err': 'Invalid Origin' },
    });
  }

  const content = await response.text();
  const lines = content.split('\n');

  const contentArr = await Promise.all(
    lines.map((line) => rewriteLine({ line, querySign }))
  );

  return new Response(contentArr.join('\n'), response);
}

async function fetchTs(request) {
  let response = null;
  try {
    response = await fetch(request);
    if (response.status !== 200) {
      return response;
    }
  } catch (error) {
    return new Response('', {
      status: 504,
      headers: { 'X-Fetch-Err': 'Invalid Origin' },
    });
  }
  return response;
}

async function rewriteLine({ line, querySign }) {
  // Skip empty lines.
  if (/^\s*$/.test(line)) {
    return line;
  }

  if (line.charAt(0) === '#') {
    // Process #EXT-X-MAP.
    if (line.startsWith('#EXT-X-MAP')) {
      const key = await createSign(querySign, line);
      line = line.replace(/URI="([^"]+)"/, (matched, p1) => {
        return p1 ? matched.replace(p1, `${p1}?key=${key}`) : matched;
      });
    }
    return line;
  }

  const key = await createSign(querySign, line);

  return `${line}?${KEY_NAME}=${key}`;
}

async function createSign(querySign, line) {
  const { ts, rand, uid = 0 } = querySign;
  const pathname = `${querySign.basePath}/${line}`;

  const md5hash = await md5([pathname, ts, rand, uid, PK].join('-'));
  const key = [ts, rand, uid, md5hash].join('-');

  return key;
}

function getSuffix(pathname) {
  const suffix = pathname.match(/\.m3u8|\.ts$/);
  return suffix ? suffix[0] : null;
}

function isNumber(num) {
  return Number.isInteger(Number(num));
}

function bufferToHex(arr) {
  return Array.prototype.map
    .call(arr, (x) => (x >= 16 ? x.toString(16) : '0' + x.toString(16)))
    .join('');
}

async function md5(text) {
  const buffer = await crypto.subtle.digest('MD5', TextEncoder().encode(text));
  return bufferToHex(new Uint8Array(buffer));
}
