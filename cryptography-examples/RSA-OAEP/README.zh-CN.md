<div align="left">
  语言:
  <a title="英文" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# RSA-OAEP 加密示例

本示例演示了如何使用 RSA-OAEP 加密算法对数据进行加密和解密。RSA（Rivest–Shamir–Adleman）是一种非对称加密算法，广泛用于安全数据传输。

## 什么是 RSA-OAEP？

RSA-OAEP（最优非对称加密填充）是 RSA 加密的一种填充方案。它通过在加密过程中添加随机元素来增强 RSA 的安全性，使其能够抵抗各种攻击。

### RSA-OAEP 工作原理

1. **密钥生成**：生成一对公钥和私钥。
2. **加密过程**：
   - 对明文应用 OAEP 填充。
   - 使用接收者的公钥加密填充后的消息。
3. **解密过程**：
   - 使用接收者的私钥解密密文。
   - 移除 OAEP 填充以恢复原始消息。

## 工作原理

1. 生成 RSA 密钥对（公钥和私钥）。
2. 使用公钥加密数据。
3. 使用私钥解密加密后的数据。
4. 验证加密和解密的正确性。

## 示例预览

![RSA-OAEP 示例预览](../../assets/images/rsa-oaep-preview.avif)

## 使用场景

这种技术在以下情况下特别有用：

- 安全交换对称加密密钥。
- 保护敏感数据传输，如密码或财务信息。
- 在客户端-服务器应用程序中实现安全通信通道。
- 数字签名和基于证书的身份验证系统。

## 注意事项

- 确保私钥的安全性，切勿共享。
- 使用适当的密钥长度（如 2048 位或更长）以确保足够的安全性。
- RSA-OAEP 计算密集，通常用于小量数据或密钥交换。
- 对于大型数据集，考虑使用混合加密（RSA 用于密钥交换，对称加密用于数据）。

通过在边缘实现 RSA-OAEP 加密，您可以有效地保护敏感数据，确保安全的密钥交换，并提高应用程序的整体安全性。