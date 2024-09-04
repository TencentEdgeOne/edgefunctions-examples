async function handleRequest(request) {
  const referer = request.headers.get('Referer');

  if (!referer) {
    return new Response('Invalid referer', {
      status: 403,
    });
  }

  const refererRegExp = new RegExp(`^https:\/\/playground\.edgeone\.ai\/?.*`);

  if (!refererRegExp.test(referer)) {
    return new Response('Invalid referer', {
      status: 403,
    });
  }

  return new Response('Valid referer', {
    status: 403,
  });
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
