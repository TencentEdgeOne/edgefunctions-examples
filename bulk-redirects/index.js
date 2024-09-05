// Add a fetch event listener, which is triggered when a request comes in, using the handleRequest function to process the request and return a response
async function handleRequest(request) {
    // Define the target external hostname
    const yourExternalHostname = "www.example.com";
    // Create a mapping of paths to redirect URLs
    const redirectMap = new Map([
        ["/foo", "https://" + yourExternalHostname + "/redirect1"],
        ["/bar", "https://" + yourExternalHostname + "/redirect2"],
        ["/baz", "https://" + yourExternalHostname + "/redirect3"],
    ]);
    // Parse the URL of the request
    const url = new URL(request.url);
    // Get the path portion of the URL
    const path = url.pathname;
    // Check if the path is in the redirect mapping, if so, perform the redirect
    if (redirectMap.has(path)) {
        return Response.redirect(redirectMap.get(path), 301);
    } else {
        // If the path is not in the mapping, return a 404 status
        return new Response('Not Found', { status: 404 });
    }
}

// When a request event occurs, use the handleRequest function to process it
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});