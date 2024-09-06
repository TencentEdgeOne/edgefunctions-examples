addEventListener('fetch', (event) => {
  handleRequest(event);
});

const PASSWORD = 'xxxxxxxxxxxxxxxxxxx';
const EXPIRE_TIME = 14400; // 30 minutes in seconds
const RESOURCE_PATH = '/web/resource/course';

async function handleRequest(event) {
  const { request } = event;
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname.startsWith(RESOURCE_PATH)) {
    const wsSecret = url.searchParams.get('wsSecret');
    const wsTime = url.searchParams.get('wsTime');

    if (!wsSecret || !wsTime) {
      return event.respondWith(
        new Response('Missing wsSecret or wsTime', { status: 403 })
      );
    }

    const expire = parseInt(wsTime) + EXPIRE_TIME;
    const currentTime = Math.floor(Date.now() / 1000);

    if (currentTime > expire) {
      return event.respondWith(new Response('URL expired', { status: 403 }));
    }

    const expectedWsSecret = await md5(`${pathname}${PASSWORD}${wsTime}`);

    if (wsSecret.toLowerCase() !== expectedWsSecret) {
      return event.respondWith(
        new Response('Invalid wsSecret', { status: 403 })
      );
    }
  }

  // 使用 passthrough 执行CDN回源流程
  return;
}

function bufferToHex(arr) {
  return Array.prototype.map
    .call(arr, (x) => (x >= 16 ? x.toString(16) : '0' + x.toString(16)))
    .join('');
}

async function md5(message) {
  const buffer = await crypto.subtle.digest(
    'MD5',
    TextEncoder().encode(message)
  );
  return bufferToHex(new Uint8Array(buffer));
}
