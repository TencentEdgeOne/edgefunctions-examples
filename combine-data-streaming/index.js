const RESOURCE_URLS = [
    'https://data.playground.edgeone.ai/api/user/1',
    'https://data.playground.edgeone.ai/api/user/2',
  ];
  
  async function combine(resources, writable) {
    for (const resource of resources) {
      await resource.pipeTo(writable, {
        preventClose: true
      });
    }
  
    const writer = writable.getWriter();
    writer.close();
    writer.releaseLock();
  }
  
  async function handleRequest() {
    const requests = RESOURCE_URLS.map(url => fetch(url));
  
    const responses = await Promise.all(requests);
    const videos = responses.map(res => res.body);
  
    const { readable, writable } = new TransformStream();
    combine(videos, writable);
  
    return new Response(readable);
  }
  
  addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  