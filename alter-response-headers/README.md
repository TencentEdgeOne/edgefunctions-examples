<div align="left">
  Language:
  <a title="English" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# Alter Response Headers

<div style="display: flex; justify-content: space-between; align-items: center;">
  <a href="https://edgeone.ai/developer/examples/hub-modifyingaresponseheader" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Online Example</a>
  <a href="https://playground.edgeone.ai/?t=6926de7fbec4c1b59e717388b0afda39" style="display: inline-block; background-color: #28a745; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">Try in Playground</a>
</div>

This example demonstrates how to use an Edge Function to add, delete, or modify response headers. This technique allows you to customize the HTTP headers sent back to clients, which can be useful for various purposes such as security enhancement, caching control, or adding custom information.

## How It Works

1. Define a constant `RESOURCE_URL` with the target URL for fetching content.
2. Create a `handleRequest` function that:
   - Fetches content from the `RESOURCE_URL`.
   - Deletes the 'Date' header from the response.
   - Sets a new custom header 'x-custom-header'.
   - Appends a value to the 'Server' header.
3. Add an event listener for the 'fetch' event, which calls the `handleRequest` function for each incoming request.

## Sample Preview

![alter-response-headers Preview](../assets/images/alter-response-headers.avif)

## Use Cases

This technique is particularly useful in the following situations:

- Implementing security headers like Content-Security-Policy or Strict-Transport-Security.
- Controlling caching behavior by modifying Cache-Control headers.
- Adding custom headers for debugging or tracking purposes.
- Removing sensitive headers that might expose server information.

## Considerations

- Be cautious when modifying headers, as they can impact client behavior and security.
- Ensure that added or modified headers comply with web standards and best practices.
- Test thoroughly to verify that header modifications don't cause unexpected issues with clients or intermediary systems.
- Consider the performance impact of header modifications, especially for high-traffic applications.

By modifying response headers at the edge, you can enhance security, improve caching strategies, and provide custom information to clients without modifying your origin server's configuration.

