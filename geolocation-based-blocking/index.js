// List of countries to block: Iran, Cuba, North Korea, Syria
const CLOSURE_COUNTRY_CODE_LIST = ['IR', 'CU', 'KP', 'SY'];
// List of regions to block: Crimea region UA-43, Donbas region (Donetsk UA-14, Luhansk UA-09)
const CLOSURE_REGION_CODE_LIST = ['UA-14', 'UA-09', 'UA-43'];

function checkClosureGeo(request) {
  const { countryCodeAlpha2, regionCode } = request?.eo?.geo || {};

  // Check countryCode first
  if (countryCodeAlpha2 && CLOSURE_COUNTRY_CODE_LIST.includes(countryCodeAlpha2)) {
    return true;
  }

  // Then check regionCode
  if (regionCode && CLOSURE_REGION_CODE_LIST.includes(regionCode)) {
    return true;
  }

  return false;
}

function handleEvent(event) {
  if (checkClosureGeo(event.request)) {
    event.respondWith(new Response('Forbidden', { status: 403 }));
  }
  return;
}

addEventListener('fetch', (event) => {
  event.passThroughOnException();
  handleEvent(event);
});