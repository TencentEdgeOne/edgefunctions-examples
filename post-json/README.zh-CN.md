<div align="left">
  语言:
  <a title="英文" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# 返回 JSON

<a href="https://edgeone.ai/developer/examples/hub-returningjson" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">查看在线示例</a>

本示例演示了如何使用 Edge Function 生成并返回 JSON 对象。这种技术通常用于创建轻量级 API 或向客户端返回结构化数据。

<div align="left">
  <a href="https://playground.edgeone.ai/?t=e6767a021b50f1a54bf2858acb16eb07" style="display: inline-block; background-color: #28a745; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">在 Playground 中尝试</a>
</div>

## 工作原理

1. 定义一个常量 `JSON_DATA`，包含要返回的 JSON 对象。
2. 创建一个 `handleRequest` 函数，该函数：
   - 使用 `JSON.stringify()` 将 `JSON_DATA` 转换为字符串。
   - 返回一个新的 `Response` 对象，包含 JSON 字符串和适当的头部。
3. 为 'fetch' 事件添加一个事件监听器，对每个传入的请求调用 `handleRequest` 函数。

## 示例预览

![post-json Preview](../assets/images/post-json.avif)

## 使用场景

这种技术在以下情况下特别有用：

- 在边缘创建轻量级 API。
- 向客户端应用程序返回配置数据。
- 实现功能标志或 A/B 测试数据。
- 以结构化格式提供动态内容。

## 注意事项

- 确保 JSON 数据格式正确，以避免客户端解析错误。
- 考虑 JSON 对象的大小，因为非常大的对象可能会影响性能。
- 对静态 JSON 数据使用适当的缓存策略，以提高响应时间。
- 实现错误处理，以应对 JSON 生成可能失败的情况。

通过直接从 Edge Function 返回 JSON，您可以创建快速、响应迅速的 API，而无需传统的后端服务器。