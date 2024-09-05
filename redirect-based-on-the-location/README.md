# Redirect based on the Location

<a href="https://edgeone.ai/developer/examples/redirect-based-on-the-location" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Online Example</a>

In this example, an Edge Function is used to automatically redirect the client to the target URL corresponding to their region by identifying the client's region.

## How It Works

1. Define an object `URLS` containing URLs for different regions.
2. Create a `handleRequest` function that:
   - Retrieves the client's country code from the request object.
   - Selects the appropriate URL based on the country code, using a default URL if no match is found.
   - Returns a 302 redirect response to the selected URL.
3. Add a 'fetch' event listener that calls the `handleRequest` function for each incoming request.

## Sample Preview

![redirect-based-on-location Preview](../assets/images/redirect-based-on-the-location.avif)

## Use Cases

This technique is particularly useful in the following situations:

- Providing localized content for users in different regions.
- Optimizing server selection based on user geography.
- Implementing location-based access control or content distribution.
- Offering automatic language selection for international websites.

## Considerations

- Ensure appropriate redirect URLs are provided for all possible regions.
- Consider adding a default URL to handle unknown or unsupported regions.
- Be aware of the potential impact of redirects on search engine optimization (SEO).
- Consider offering users the option to manually select their region or language.

By implementing location-based redirects at the edge, you can provide a more personalized and localized experience for your users while improving overall site performance and relevance.