// cookie name
const COOKIE_NAME = 'ABTest';

// cookie value
const VALUE_A = 'index-a.html';
const VALUE_B = 'index-b.html';

// Root path, the origin must exist this path, and under this path, there are files index-a.html and index-b.html.
const BASE_PATH = '/abtest';

async function handleRequest(request) {
  const urlInfo = new URL(request.url);

  // Judge the URL path, if accessing non-abtest resources, directly responded.
  if (!urlInfo.pathname.startsWith(BASE_PATH)) {
    return fetch(request);
  }

  // Collected the current request's Cookie.
  const cookies = new Cookies(request.headers.get('cookie'));
  const abTestCookie = cookies.get(COOKIE_NAME);
  const cookieValue = abTestCookie?.value;

  // If the Cookie value is A test, Return index-a.html.
  if (cookieValue === VALUE_A) {
    urlInfo.pathname = `/${BASE_PATH}/${cookieValue}`;
    return fetch(new URL(urlInfo.toString()).href);
  }

  // If the Cookie value is B test, Return index-b.html.
  if (cookieValue === VALUE_B) {
    urlInfo.pathname = `/${BASE_PATH}/${cookieValue}`;
    return fetch(new URL(urlInfo.toString()).href);
  }

  // If the Cookie information does not exist, randomly grant the current request to A or B test.
  const testValue = Math.random() < 0.5 ? VALUE_A : VALUE_B;

  urlInfo.pathname = `/${BASE_PATH}/${testValue}`;

  const response = await fetch(new URL(urlInfo.toString()).href);

  cookies.set(COOKIE_NAME, testValue, { path: '/', max_age: 60 });
  response.headers.set('Set-Cookie', getSetCookie(cookies.get(COOKIE_NAME)));
  return response;
}

// Concatenate Set-Cookie.
function getSetCookie(cookie) {
  const cookieArr = [
    `${encodeURIComponent(cookie.name)}=${encodeURIComponent(cookie.value)}`,
  ];

  const key2name = {
    expires: 'Expires',
    max_age: 'Max-Age',
    domain: 'Domain',
    path: 'Path',
    secure: 'Secure',
    httponly: 'HttpOnly',
    samesite: 'SameSite',
  };

  Object.keys(key2name).forEach((key) => {
    if (cookie[key]) {
      cookieArr.push(`${key2name[key]}=${cookie[key]}`);
    }
  });

  return cookieArr.join('; ');
}

addEventListener('fetch', (event) => {
  event.passThroughOnException();
  event.respondWith(handleRequest(event.request));
});
