function handleRequest(request) {
  const clientInfo = request.eo;

  return new Response(JSON.stringify(clientInfo), {
    headers: { 'content-type': 'application/json; charset=UTF-8' },
  });
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
