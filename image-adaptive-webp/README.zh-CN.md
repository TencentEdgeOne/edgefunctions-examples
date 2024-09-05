# 自适应 WebP 图像

<a href="https://edgeone.ai/developer/examples/hub-imageadaptivewebP" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">查看在线示例</a>

本示例演示了如何使用 Edge Functions 动态地向支持 WebP 格式的浏览器提供 WebP 图像,同时为不支持 WebP 的浏览器提供原始图像格式。这种方法可以显著减少图像文件大小并提高页面加载速度。若您的 Web 应用展示了大量的 PNG，JPEG 格式图片，期望在边缘自动优化图片，减少流量带宽成本，可使用边缘函数实现平滑升级， 把 PNG，JPEG 格式图片自动转换为 WebP 格式，并且业务代码 0 改动。

## 工作原理

1. 拦截传入的图像请求。
2. 检查请求的 `Accept` 头,以确定客户端是否支持 WebP。
3. 如果支持 WebP,获取图像的 WebP 版本(如果可用)。
4. 如果不支持 WebP 或 WebP 版本不存在,获取原始图像。
5. 修改响应头以反映正确的内容类型。
6. 向客户端返回适当的图像。

## 使用场景

这种技术在以下情况下特别有用:

- 拥有大量图像的网站,希望减少带宽使用。
- 电子商务平台,希望提高产品图片的页面加载速度。
- 内容密集型网站,旨在通过更快的图像加载来提升用户体验。
- 移动优先的应用程序,减少数据传输至关重要。

## 注意事项

- 该示例仅在源文件的响应头 Content-Type 指定的 MIME 类型为图像（image/*）时,才能正常执行转换功能。
- 该示例暂不支持转换 SVG 格式图片。
- 建议在边缘函数触发规则配置中添加文件后缀 .png、.jpeg、.jpg 等图片后缀,以确保只对适当的文件类型执行转换。

通过实施自适应 WebP 服务,您可以显著减少传输到支持 WebP 的客户端的数据量,从而实现更快的页面加载和改善用户体验,同时仍然保持与所有浏览器的兼容性。