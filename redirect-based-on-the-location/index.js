const URLS = {
  JP: 'https://data.playground.edgeone.ai/resource/html/hello-world.ja-jp.html',
  US: 'https://data.playground.edgeone.ai/resource/html/hello-world.en-us.html',
  DEFAULT:
    'https://data.playground.edgeone.ai/resource/html/hello-world.zh-cn.html',
};

function handleRequest(request) {
  const countryCode = request.eo?.geo?.countryCodeAlpha2;

  const url = URLS[countryCode] || URLS.DEFAULT;

  return Response.redirect(url, 302);
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
