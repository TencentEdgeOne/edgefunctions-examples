# Combine Data in Streaming Mode

## Feature Description

This example demonstrates how to use an Edge Function to fetch and merge multiple resources, then serve the combined data to the client in streaming mode.

## How It Works

1. Define an array containing multiple resource URLs.
2. Use the `fetch` function to request all resources in parallel.
3. Create a `TransformStream` to handle the data stream.
4. Use a custom `combine` function to sequentially write all resource response bodies to the writable end of the `TransformStream`.
5. Return a new `Response` object containing the readable end of the `TransformStream`.

## Use Cases

This technique is particularly useful in the following situations:

- When data needs to be fetched from multiple API endpoints and combined into a single response.
- When dealing with large datasets and you want to start sending data to the client as soon as possible.
- For implementing real-time data aggregation and stream processing.

## Considerations

- Ensure all resource URLs are accessible, otherwise requests may fail.
- Consider adding error handling mechanisms to deal with situations where individual resource requests fail.
- Adjust the URLs in the `RESOURCE_URLS` array according to your actual requirements.

By using this method, you can effectively combine multiple data sources and provide data to the client in a streaming manner, thereby improving the performance and responsiveness of your application.