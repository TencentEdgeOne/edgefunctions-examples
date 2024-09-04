# 流式模式下合并数据 | [EdgeOne 流式数据合并示例](https://edgeone.ai/developer/examples/hub-mergingresourcesandrespondinginstreamingmode)

在本示例中,Edge Function 获取并合并多个资源,然后以流式方式将合并后的数据提供给客户端。这演示了如何使用 Edge Functions 从多个源聚合数据,并以流式方式高效地传递数据。

## 工作原理

1. 定义一个包含要获取的资源 URL 的数组。
2. 使用 `fetch` 函数并行请求所有资源。
3. 创建一个 `TransformStream` 来处理数据流。
4. 使用自定义的 `combine` 函数将所有资源的响应体按顺序写入 `TransformStream` 的可写端。
5. 返回一个包含 `TransformStream` 可读端的新 `Response` 对象。

## 示例预览

![combine-data-in-streaming-mode Preview](../readme-images/combine-data-in-streaming-mode.avif)

## 使用场景

这种技术在以下情况下特别有用:

- 需要从多个 API 端点获取数据并组合成单个响应。
- 处理大型数据集,希望尽快开始向客户端发送数据。
- 实现实时数据聚合和流式处理。

## 注意事项

- 确保所有资源 URL 都是可访问的,否则可能导致请求失败。
- 考虑添加错误处理机制,以应对单个资源请求失败的情况。
- 根据实际需求调整 `RESOURCE_URLS` 数组中的 URL。
- 在合并多个资源时,注意总响应大小和处理时间。

通过使用这种方法,您可以有效地合并多个数据源,并以流式方式向客户端提供数据,从而提高应用程序的性能和响应速度。

有关更多详细信息和完整实现,请参阅 [EdgeOne 开发者示例](https://edgeone.ai/developer/examples/hub-mergingresourcesandrespondinginstreamingmode)。