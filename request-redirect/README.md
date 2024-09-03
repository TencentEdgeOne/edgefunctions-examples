# Request Redirect

This example demonstrates how to use an Edge Function to implement request redirection, returning a 302 response to the client. This is a common technique used for URL shortening, maintaining backwards compatibility with old URLs, or temporarily moving content.

## How It Works

1. Define a constant `REDIRECT_URL` with the target URL for redirection.
2. Create a `handleRequest` function that returns a redirect response using `Response.redirect()`.
3. Add an event listener for the 'fetch' event, which calls the `handleRequest` function for each incoming request.

## Sample Preview

![Request-Redirect Preview](../image/Request-Redirect.avif)

## Use Cases

This technique is particularly useful in the following situations:

- Implementing URL shortening services.
- Maintaining backwards compatibility when changing URL structures.
- Temporarily redirecting users during site maintenance or updates.
- A/B testing by redirecting a portion of traffic to different versions of a page.

## Considerations

- Ensure the `REDIRECT_URL` is correctly set and points to a valid destination.
- Consider implementing conditional logic for more complex redirection rules.
- Be mindful of the impact on SEO when implementing permanent (301) vs temporary (302) redirects.
- Monitor redirect chains to avoid excessive redirects that could impact user experience.

By implementing request redirection at the edge, you can efficiently manage traffic flow and improve user experience by quickly directing users to the correct resources.

For more details and the full implementation, please refer to the [EdgeOne Developer Examples](https://edgeone.ai/developer/examples/hub-requestredirct).