<div align="left">
  Language:
  <a title="English" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# URL Authentication

<a href="https://edgeone.ai/products/function" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">Get Started</a>

This example demonstrates how to implement URL authentication using Edge Functions. It uses a timestamp and MD5 hash to create and verify secure URLs, protecting resources from unauthorized access and preventing URL manipulation.

## How It Works

1. Define constants for the password, expiration time, and resource path.
2. Create a `handleRequest` function that:
   - Extracts `wsSecret` and `wsTime` from the URL query parameters.
   - Checks if the URL has expired based on the current time and expiration period.
   - Generates an expected `wsSecret` using MD5 hash of the pathname, password, and timestamp.
   - Compares the provided `wsSecret` with the expected one.
   - Returns a 403 response if authentication fails, otherwise allows the request to proceed.
3. Add a 'fetch' event listener that calls the `handleRequest` function for each incoming request.

## Usage Scenarios

This technique is particularly useful in the following situations:

- Protecting access to sensitive or premium content.
- Implementing time-limited access to resources.
- Preventing hotlinking of resources.
- Securing API endpoints that don't require full OAuth authentication.

## Considerations

- Choose an appropriate expiration time to balance security and user experience.
- Ensure that your server and clients have synchronized clocks for accurate timestamp verification.
- Regularly update your secret key (PASSWORD) to maintain security.
- Consider using HTTPS to protect the signed URLs during transmission.

By implementing URL authentication at the edge, you can efficiently protect your resources from unauthorized access and manipulation, providing an additional layer of security for your application.