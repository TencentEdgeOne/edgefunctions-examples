const REDIRECT_URL = 'https://edgeone.ai';

async function handelRequest() {
  return Response.redirect(REDIRECT_URL);
}

addEventListener('fetch', (event) => {
  event.respondWith(handelRequest(event.request));
});
