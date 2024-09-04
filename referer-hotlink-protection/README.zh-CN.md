# 基于 Referer 的防盗链保护

本示例演示了如何使用 Edge Function 实现基于 Referer 的防盗链保护。这种技术有助于保护您网站的资源不被其他网站未经授权使用。

## 工作原理

1. 创建一个 `handleRequest` 函数，该函数：
   - 从传入请求中获取 'Referer' 头。
   - 检查 referer 是否存在并匹配允许的模式。
   - 根据 referer 检查结果返回适当的响应。
2. 为 'fetch' 事件添加一个事件监听器，对每个传入的请求调用 `handleRequest` 函数。

## 示例预览

如果引用不正确，访问将被拒绝。

![referer-hotlink-protection-denied Preview](../readme-images/referer-hotlink-protection-denied.avif)

如果引用正确，则授予访问权限。

![referer-hotlink-protection-granted Preview](../readme-images/referer-hotlink-protection-granted.avif)

## 使用场景

这种技术在以下情况下特别有用：

- 防止图像、视频或其他媒体被未经授权的网站嵌入。
- 控制对可下载文件的访问。
- 通过确保资源只提供给合法用户来防止带宽盗用。
- 实施基本的内容保护策略。

## 注意事项

- 请注意，'Referer' 头可以被伪造，因此这种方法并非万无一失。
- 考虑为敏感内容实施额外的安全措施。
- 确保不会无意中阻止合法的使用场景（例如社交媒体分享）。
- 定期审查和更新您允许的 referer 模式，以适应您网站结构的变化。

通过在边缘实现基于 Referer 的防盗链保护，您可以有效地控制对资源的访问，而无需修改源服务器或使用服务器端脚本。

有关更多详细信息和完整实现，请参阅 [EdgeOne 开发者示例](https://edgeone.ai/developer/examples/hub-customrefererantileeching)。