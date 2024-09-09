<div align="left">
  语言:
  <a title="英文" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# 基于位置的重定向

<a href="https://edgeone.ai/developer/examples/redirect-based-on-the-location" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">查看在线示例</a>

在此示例中,Edge Function 用于通过识别客户端的区域自动将客户端重定向到与其区域相对应的目标 URL。

## 工作原理

1. 定义一个包含不同区域对应 URL 的对象 `URLS`。
2. 创建一个 `handleRequest` 函数,该函数:
   - 从请求对象中获取客户端的国家代码。
   - 根据国家代码选择相应的 URL,如果没有匹配项则使用默认 URL。
   - 返回一个 302 重定向响应到选定的 URL。
3. 添加一个 'fetch' 事件监听器,对每个传入的请求调用 `handleRequest` 函数。

## 示例预览

![redirect-based-on-location Preview](../assets/images/redirect-based-on-the-location.avif)

## 使用场景

这种技术在以下情况下特别有用:

- 为不同地区的用户提供本地化内容。
- 根据用户地理位置优化服务器选择。
- 实现基于位置的访问控制或内容分发。
- 为国际网站提供自动语言选择。

## 注意事项

- 确保为所有可能的地区提供适当的重定向 URL。
- 考虑添加一个默认 URL 以处理未知或不支持的地区。
- 注意重定向可能对搜索引擎优化(SEO)产生影响。
- 考虑为用户提供手动选择区域或语言的选项。

通过在边缘实现基于位置的重定向,您可以为用户提供更加个性化和本地化的体验,同时提高网站的整体性能和相关性。