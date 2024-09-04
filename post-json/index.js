const JSON_DATA = {
  content: 'Hello World',
};

async function handleRequest() {
  return new Response(JSON.stringify(JSON_DATA), {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest());
});
