<div align="left">
  语言:
  <a title="英文" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# 请求重定向

<a href="https://edgeone.ai/developer/examples/hub-requestredirct" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">查看在线示例</a>

本示例演示了如何使用 Edge Function 实现请求重定向,向客户端返回 302 响应。这是一种常用的技术,用于 URL 缩短、维护旧 URL 的向后兼容性,或临时移动内容。

<div align="left">
  <a href="https://playground.edgeone.ai/?t=90ccb91e660530d484e1bae2478bc7f7" style="display: inline-block; background-color: #28a745; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">在 Playground 中尝试</a>
</div>

## 工作原理

1. 定义一个常量 `REDIRECT_URL`,包含重定向的目标 URL。
2. 创建一个 `handleRequest` 函数,使用 `Response.redirect()` 返回重定向响应。
3. 为 'fetch' 事件添加一个事件监听器,对每个传入的请求调用 `handleRequest` 函数。

## 示例预览

![request-redirect Preview](../assets/images/request-redirect.avif)

## 使用场景

这种技术在以下情况下特别有用:

- 实现 URL 缩短服务。
- 在更改 URL 结构时维护向后兼容性。
- 在网站维护或更新期间临时重定向用户。
- 通过将部分流量重定向到页面的不同版本来进行 A/B 测试。

## 注意事项

- 确保 `REDIRECT_URL` 设置正确并指向有效的目标。
- 考虑为更复杂的重定向规则实现条件逻辑。
- 在实现永久(301)和临时(302)重定向时,要注意对 SEO 的影响。
- 监控重定向链,避免过多的重定向影响用户体验。

通过在边缘实现请求重定向,您可以高效地管理流量并通过快速将用户引导到正确的资源来改善用户体验。