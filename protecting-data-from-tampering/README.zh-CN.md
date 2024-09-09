<div align="left">
  语言:
  <a title="英文" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# 防止数据篡改

<a href="https://edgeone.ai/developer/examples/protecting-data-from-tampering" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">查看在线示例</a>

本示例演示了如何使用 Edge Function 来验证响应内容的完整性,防止数据在传输过程中被篡改。在这个示例中,我们为请求体计算 SHA-256 签名,并将其与源服务器生成的签名进行比较。如果签名相同,则表示响应内容未被篡改;否则,返回 416 状态码,表示响应内容已被篡改。这种技术通过比较实时计算的签名与源服务器提供的签名来确保数据的安全性。

## 工作原理

1. 定义支持的文件类型(文本和图像)。
2. 创建一个函数来将 Uint8Array 转换为十六进制字符串。
3. 实现 `checkAndResponse` 函数,该函数:
   - 获取响应内容。
   - 使用指定的算法(如 SHA-256)计算内容的哈希值。
   - 将计算得到的哈希值与源服务器提供的哈希值进行比较。
   - 如果哈希值匹配,返回原始响应;否则返回 416 状态码。
4. 在主处理函数中调用 `checkAndResponse` 来验证每个响应。

## Sample Preview

当数据未被篡改时:

![protecting-data-from-tampering Preview](../assets/images/protecting-data-from-tampering-same.avif)

当检测到数据被篡改时:

![protecting-data-from-tampering-diff Preview](../assets/images/protecting-data-from-tampering-diff.avif)

## 使用场景

这种技术在以下情况下特别有用:

- 保护敏感文档或数据的完整性。
- 确保下载的软件或更新包未被篡改。
- 验证 API 响应的真实性。
- 在内容分发网络(CDN)中确保缓存内容的完整性。

## 注意事项

- 确保源服务器使用安全的方法生成和存储哈希值。
- 选择适当的哈希算法(如 SHA-256)以提供足够的安全性。
- 考虑哈希验证对性能的影响,特别是对大文件。
- 确保源服务器使用与本示例相同的签名算法和防篡改规则。
- 在生产环境中使用本示例中描述的防篡改规则时,对计算得到的签名进行排序,以防止签名被攻击者破解。

通过在边缘实现数据完整性检查,您可以增加一层额外的安全保护,防止数据在传输过程中被恶意篡改,从而提高应用程序的整体安全性。