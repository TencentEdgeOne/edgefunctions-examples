# Geolocation-based Blocking

<a href="https://edgeone.ai/products/function" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">Get Started</a>

This example demonstrates how to use Edge Functions to implement country-level access restrictions based on geographical location.

## How it Works

1. Define a list of allowed countries or regions.
2. Create a `handleRequest` function that:
   - Retrieves the client's country code from the request object.
   - Checks if the country code is in the list of allowed countries.
   - If allowed, forwards the request to the origin server.
   - If not allowed, returns a 403 Forbidden response.
3. Add a 'fetch' event listener that calls the `handleRequest` function for each incoming request.

## Use Cases

This technique is particularly useful for:

- Implementing geo-restrictions for content licensing agreements.
- Complying with regional regulations or laws.
- Protecting against fraud or abuse from specific regions.
- Customizing content or services based on geographical location.

## Considerations

- Ensure that the list of allowed countries is up-to-date and accurate.
- Consider providing a user-friendly message for blocked users, explaining the restriction.
- Be aware that some users might use VPNs or proxies to bypass geo-restrictions.
- Regularly review and update your geo-restriction policies to align with business needs and legal requirements.

By implementing geo-based access control at the edge, you can efficiently manage access to your content or services based on geographical location, improving compliance and providing a more tailored user experience.