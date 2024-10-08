<div align="left">
  语言:
  <a title="英文" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# 修改响应头

<a href="https://edgeone.ai/developer/examples/hub-modifyingaresponseheader" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">查看在线示例</a>

本示例演示了如何使用 Edge Function 来添加、删除或修改响应头。这种技术允许您自定义发送回客户端的 HTTP 头，这对于各种目的（如增强安全性、控制缓存或添加自定义信息）非常有用。

<div align="left">
  <a href="https://playground.edgeone.ai/?t=6926de7fbec4c1b59e717388b0afda39" style="display: inline-block; background-color: #28a745; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">在 Playground 中尝试</a>
</div>

## 工作原理

1. 定义一个常量 `RESOURCE_URL`，包含用于获取内容的目标 URL。
2. 创建一个 `handleRequest` 函数，该函数：
   - 从 `RESOURCE_URL` 获取内容。
   - 从响应中删除 'Date' 头。
   - 设置一个新的自定义头 'x-custom-header'。
   - 向 'Server' 头追加一个值。
3. 为 'fetch' 事件添加一个事件监听器，对每个传入的请求调用 `handleRequest` 函数。

## 示例预览

![alter-response-headers Preview](../assets/images/alter-response-headers.avif)

## 使用场景

这种技术在以下情况下特别有用：

- 实现安全头，如 Content-Security-Policy 或 Strict-Transport-Security。
- 通过修改 Cache-Control 头来控制缓存行为。
- 添加用于调试或跟踪目的的自定义头。
- 删除可能暴露服务器信息的敏感头。

## 注意事项

- 修改头时要谨慎，因为它们可能影响客户端行为和安全性。
- 确保添加或修改的头符合 Web 标准和最佳实践。
- 进行彻底的测试，以验证头部修改不会对客户端或中间系统造成意外问题。
- 考虑头部修改对高流量应用的性能影响。

通过在边缘修改响应头，您可以增强安全性、改进缓存策略，并向客户端提供自定义信息，而无需修改源服务器的配置。