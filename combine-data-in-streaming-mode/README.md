<div align="left">
  Language:
  <a title="English" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# Combine Data in Streaming Mode

<a href="https://edgeone.ai/developer/examples/hub-mergingresourcesandrespondinginstreamingmode" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Online Example</a>

In this example, an Edge Function fetches and merges multiple resources, then serves the combined stream to a client. This demonstrates how to use Edge Functions to aggregate data from multiple sources and deliver it efficiently in a streaming fashion.

## How It Works

1. Define an array of resource URLs to be fetched.
2. Use the `fetch` function to request all resources in parallel.
3. Create a `TransformStream` to handle the data stream.
4. Use a custom `combine` function to sequentially write all resource response bodies to the writable end of the `TransformStream`.
5. Return a new `Response` object containing the readable end of the `TransformStream`.

## Sample Preview

![combine-data-in-streaming-mode Preview](../assets/images/combine-data-in-streaming-mode.avif)

## Use Cases

This technique is particularly useful in the following situations:

- When data needs to be fetched from multiple API endpoints and combined into a single response.
- When dealing with large datasets and you want to start sending data to the client as soon as possible.
- For implementing real-time data aggregation and stream processing.

## Considerations

- Ensure all resource URLs are accessible, otherwise requests may fail.
- Consider adding error handling mechanisms to deal with situations where individual resource requests fail.
- Adjust the `RESOURCE_URLS` array according to your actual requirements.
- Be mindful of the total response size and processing time when combining multiple resources.

By using this method, you can effectively combine multiple data sources and provide data to the client in a streaming manner, thereby improving the performance and responsiveness of your application.