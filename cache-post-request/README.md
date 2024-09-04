# Caching POST Requests

In this example, an SHA-256 signature is calculated for the request body of a POST request and used as a part of the cache key, and the Cache API is called to cache the response content. If the content is already stored in the cache, the cached content is sent to the client. Otherwise, the Fetch API is called to initiate a subrequest to fetch a remote resource. This example demonstrates how to use an Edge Function to cache POST requests.

## How It Works

1. Intercept incoming POST requests.
2. Calculate an SHA-256 signature for the request body.
3. Use the signature as part of the cache key.
4. Check if a cached response exists for the given key.
5. If cached, return the cached response.
6. If not cached, forward the request to the origin, cache the response, and return it to the client.

## Sample Preview

- The resource is not found in the cache.

![cache-post-request-nocache Preview](../readme-images/cache-post-request-nocache.avif)

- The resource is found in the cache.

![cache-post-request-cache Preview](../readme-images/cache-post-request-cache.avif)

## Use Cases

This technique is particularly useful in the following situations:

- When dealing with POST requests that retrieve data rather than modify it.
- For API endpoints that receive complex query parameters in the request body.
- To reduce load on backend servers for frequently requested data.
- To improve response times for end-users by serving cached data.

## Considerations

- Ensure that the cached data is not sensitive or user-specific.
- Set appropriate cache expiration times based on how frequently the data changes.
- Be cautious when caching POST requests, as they are typically used for data modification.
- Consider implementing cache invalidation mechanisms for when data does change.

By using this method, you can significantly reduce the load on your origin servers and improve response times for your users, especially for complex queries that are computationally expensive but don't change frequently.

For more details and the full implementation, please refer to the [EdgeOne Developer Examples](https://edgeone.ai/developer/examples/caching-post-requests).