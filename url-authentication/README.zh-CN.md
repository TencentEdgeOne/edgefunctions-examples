# URL 认证

<div align="left">
  <a title="English" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

<a href="https://edgeone.ai/products/function" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">开始使用</a>

本示例演示了如何使用 Edge Function 实现 URL 认证。它使用时间戳和 MD5 哈希来创建和验证安全的 URL,保护资源免受未经授权的访问,并防止 URL 被篡改。

## 工作原理

1. 定义密码、过期时间和资源路径的常量。
2. 创建一个 `handleRequest` 函数,该函数:
   - 从 URL 查询参数中提取 `wsSecret` 和 `wsTime`。
   - 根据当前时间和过期期限检查 URL 是否已过期。
   - 使用路径名、密码和时间戳的 MD5 哈希生成预期的 `wsSecret`。
   - 比较提供的 `wsSecret` 与预期的 `wsSecret`。
   - 如果认证失败则返回 403 响应,否则允许请求继续。
3. 添加一个 'fetch' 事件监听器,对每个传入的请求调用 `handleRequest` 函数。

## 使用场景

这种技术在以下情况下特别有用:

- 保护敏感或高级内容的访问。
- 实现对资源的时限访问。
- 防止资源被盗链。
- 保护不需要完整 OAuth 认证的 API 端点。

## 注意事项

- 选择适当的过期时间以平衡安全性和用户体验。
- 确保您的服务器和客户端时钟同步,以便准确验证时间戳。
- 定期更新您的密钥(PASSWORD)以维持安全性。
- 考虑使用 HTTPS 来保护传输过程中的签名 URL。

通过在边缘实现 URL 认证,您可以有效地保护您的资源免受未经授权的访问和篡改,为您的应用程序提供额外的安全层。