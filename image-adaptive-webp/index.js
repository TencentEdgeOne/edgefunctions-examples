async function handleEvent(event) {
    const { request } = event;
    
    // Get the image type supported by the client
    const accept = request.headers.get('Accept');
    const option = { eo: { image: {} } };
    
    // Check whether the client supports WebP format images, if not, respond with the original image
    if (accept && accept.includes('image/webp')) {
      option.eo.image.format = 'webp';
    }
    
    const response = await fetch(request, option);
    return response;
  }
  
  addEventListener('fetch', event => {
    event.passThroughOnException();
    event.respondWith(handleEvent(event));
  });