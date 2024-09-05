// The supported text file formats.
const textFileTypes = [
  'application/javascript',
  'text/html; charset=utf-8',
  'text/css; charset=utf-8',
  'text/xml; charset=utf-8',
];

// The supported image file format.
const imageFileTypes = ['image/jpeg'];

function uint8ArrayToHex(arr) {
  return Array.prototype.map
    .call(arr, (x) => ('0' + x.toString(16)).slice(-2))
    .join('');
}

/**
 * The following algorithms are supported: MD5, SHA-1, SHA-256, SHA-384, and SHA-512. The algorithm name is not case-sensitive.
 * Note: When you calculate a signature on the origin server, do not directly sign the data in the source file. Instead, apply code obfuscation during signature calculation to prevent the signature from being cracked by attackers.
 * Use the same method in the sample code to calculate the signature for comparison. This way, you can prevent the signature from being tampered with.
 **/
async function checkAndResponse(response, hash, algorithm) {
  const headers = response.headers;

  let checkHash = 'sorry! not match';
  let data = null;
  const contentType = headers.get('Content-Type');
  if (
    textFileTypes.includes(contentType) ||
    imageFileTypes.includes(contentType)
  ) {
    data = await response.arrayBuffer();
  }
  let ret = await crypto.subtle.digest({ name: algorithm }, data);
  checkHash = uint8ArrayToHex(new Uint8Array(ret));

  headers.append(`X-Content-${algorithm}-Check`, checkHash);
  // Compare the signature that is calculated in real time with the signature that is provided by the origin server. If the signatures are different, a 416 status code is returned, indicating that the request cannot be met.
  if (checkHash !== hash) {
    return new Response(null, {
      headers,
      status: 416,
    });
  }

  return new Response(data, {
    headers,
    status: 200,
  });
}

async function handleEvent(event) {
  // Obtain the content that is returned by the origin server. If the content is cached on the EdgeOne edge node, do not fetch the content from the origin server.
  const response = await fetch(event.request);
  if (response.status === 200) {
    const headers = response.headers;
    // The signature header of the content that is returned by the origin server.
    const hash = headers.get('X-Content-Sha256');
    if (hash) {
      // Check whether the calculated signature is the same as the signature that is provided by the origin server. The following algorithms are supported: MD5, SHA-1, SHA-256, SHA-384, and SHA-512. The algorithm name is not case-sensitive.
      return checkAndResponse(response, hash, 'Sha-256');
    }
  }

  return response;
}

addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event));
});
