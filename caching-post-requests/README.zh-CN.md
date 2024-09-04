# 缓存 POST 请求

在本示例中,我们为 POST 请求的请求体计算 SHA-256 签名,并将其用作缓存键的一部分,然后调用 Cache API 来缓存响应内容。如果内容已经存储在缓存中,则将缓存的内容发送给客户端。否则,调用 Fetch API 发起子请求以获取远程资源。本示例演示了如何使用 Edge Function 来缓存 POST 请求。

## 工作原理

1. 拦截传入的 POST 请求。
2. 为请求体计算 SHA-256 签名。
3. 使用签名作为缓存键的一部分。
4. 检查是否存在给定键的缓存响应。
5. 如果已缓存,则返回缓存的响应。
6. 如果未缓存,则将请求转发到源站,缓存响应,并将其返回给客户端。

## 示例预览

- 缓存中未找到该资源。

![caching-post-requests-nocache Preview](../readme-images/caching-post-requests-nocache.avif)

- 在缓存中找到资源。

![caching-post-requests-cache Preview](../readme-images/caching-post-requests-cache.avif)

## 使用场景

这种技术在以下情况下特别有用:

- 处理用于检索数据而非修改数据的 POST 请求。
- 针对在请求体中接收复杂查询参数的 API 端点。
- 减少频繁请求数据对后端服务器的负载。
- 通过提供缓存数据来改善最终用户的响应时间。

## 注意事项

- 确保缓存的数据不是敏感的或用户特定的。
- 根据数据变化的频率设置适当的缓存过期时间。
- 谨慎缓存 POST 请求,因为它们通常用于数据修改。
- 考虑实现缓存失效机制,以应对数据变化的情况。

通过使用这种方法,您可以显著减少源站服务器的负载,并改善用户的响应时间,特别是对于计算成本高昂但不经常变化的复杂查询。

有关更多详细信息和完整实现,请参阅 [EdgeOne 开发者示例](https://edgeone.ai/developer/examples/caching-post-requests)。