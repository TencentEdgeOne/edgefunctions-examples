const RESOURCE_URL = 'https://data.playground.edgeone.ai/api/user/list';

async function handleRequest() {
  const response = await fetch(RESOURCE_URL);

  response.headers.delete('Date');

  response.headers.set('x-custom-header', 'test');

  response.headers.append('Server', 'edgeone');

  return response;
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest());
});
