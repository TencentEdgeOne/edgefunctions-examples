<div align="left">
  Language:
  <a title="English" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# Post JSON

<a href="https://edgeone.ai/developer/examples/hub-returningjson" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Online Example</a>

This example demonstrates how to use an Edge Function to generate and return a JSON object. This technique is commonly used for creating lightweight APIs or returning structured data to clients.

<div align="left">
  <a href="https://playground.edgeone.ai/?t=e6767a021b50f1a54bf2858acb16eb07" style="display: inline-block; background-color: #28a745; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">Try in Playground</a>
</div>

## How It Works

1. Define a constant `JSON_DATA` containing the JSON object to be returned.
2. Create a `handleRequest` function that:
   - Converts the `JSON_DATA` to a string using `JSON.stringify()`.
   - Returns a new `Response` object with the JSON string and appropriate headers.
3. Add an event listener for the 'fetch' event, which calls the `handleRequest` function for each incoming request.

## Sample Preview

![post-json Preview](../assets/images/post-json.avif)

## Use Cases

This technique is particularly useful in the following situations:

- Creating lightweight APIs at the edge.
- Returning configuration data to client applications.
- Implementing feature flags or A/B testing data.
- Providing dynamic content in a structured format.

## Considerations

- Ensure the JSON data is properly formatted to avoid parsing errors on the client side.
- Consider the size of the JSON object, as very large objects may impact performance.
- Use appropriate caching strategies for static JSON data to improve response times.
- Implement error handling for cases where JSON generation might fail.

By returning JSON directly from an Edge Function, you can create fast, responsive APIs without the need for a traditional backend server.