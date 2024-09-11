<div align="left">
  Language:
  <a title="English" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# Request Redirect

<a href="https://edgeone.ai/developer/examples/hub-requestredirct" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Online Example</a>

This example demonstrates how to use an Edge Function to implement request redirection, returning a 302 response to the client. This is a common technique used for URL shortening, maintaining backwards compatibility with old URLs, or temporarily moving content.

<div align="left">
  <a href="https://playground.edgeone.ai/?t=90ccb91e660530d484e1bae2478bc7f7" style="display: inline-block; background-color: #28a745; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">Try in Playground</a>
</div>

## How It Works

1. Define a constant `REDIRECT_URL` with the target URL for redirection.
2. Create a `handleRequest` function that returns a redirect response using `Response.redirect()`.
3. Add an event listener for the 'fetch' event, which calls the `handleRequest` function for each incoming request.

## Sample Preview

![request-redirect Preview](../assets/images/request-redirect.avif)

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