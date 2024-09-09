<div align="left">
  语言:
  <a title="英文" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# A/B 测试 

<a href="https://edgeone.ai/developer/examples/hub-performingana-btest" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">查看在线示例</a>

本示例演示了如何使用 Edge Function 执行 A/B 测试，通过使用 cookie 存储会话信息并向用户提供不同版本的内容。

## 工作原理

1. 定义 cookie 名称和值的常量，以及 A/B 测试资源的基本路径。
2. 创建一个 `handleRequest` 函数，该函数：
   - 检查请求是否针对 A/B 测试资源。
   - 读取现有的 A/B 测试 cookie（如果存在）。
   - 根据 cookie 值提供适当的版本（A 或 B）。
   - 如果不存在 cookie，则随机将用户分配到 A 组或 B 组，并设置新的 cookie。
3. 为 'fetch' 事件添加一个事件监听器，对每个传入的请求调用 `handleRequest` 函数。

## 示例预览

![ab-testing Preview](../assets/images/ab-testing.png)

## 使用场景

这种技术在以下情况下特别有用：

- 使用部分用户测试新功能或设计。
- 通过比较不同版本的内容来优化用户体验。
- 逐步推出变更以最小化风险。
- 收集用户偏好和行为数据。

## 注意事项

- 确保两个版本（A 和 B）都完全功能正常，不会对用户体验产生负面影响。
- 考虑 A/B 测试的持续时间以及它可能如何影响长期用户。
- 实施适当的分析以衡量每个版本的有效性。
- 注意 A/B 测试设置和结果中可能存在的偏差。

通过在边缘实现 A/B 测试，您可以快速有效地测试不同版本的内容，而无需修改源服务器或使用客户端 JavaScript。