# 地理信息

<div align="left">
  <a title="English" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

<a href="https://edgeone.ai/developer/examples/hub-obtainingclientipaddress" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">查看在线示例</a>

本示例演示了如何使用 Edge Function 获取并返回客户端的地理位置数据。这些信息对于内容本地化、分析或安全措施等多种用途都非常有价值。

## 可获取的地理位置属性 (GeoProperties)

Edge Function 可以获取以下描述客户请求位置信息的属性：

| 属性名 | 类型 | 说明 | 示例值 |
|--------|------|------|--------|
| asn | number | ASN（自治系统编号） | 132203 |
| countryName | string | 国家名 | Singapore |
| countryCodeAlpha2 | string | 国家的 ISO-3611 alpha2 代码 | SG |
| countryCodeAlpha3 | string | 国家的 ISO-3611 alpha3 代码 | SGP |
| countryCodeNumeric | string | 国家的 ISO-3611 numeric 代码 | 702 |
| regionName | string | 区域名 | - |
| regionCode | string | 区域代码 | AA-AA |
| cityName | string | 城市名 | singapore |
| latitude | number | 纬度 | 1.29027 |
| longitude | number | 经度 | 103.851959 |

## 工作原理

1. 创建一个 `handleRequest` 函数，该函数：
   - 通过 `request.eo` 访问客户端信息。
   - 将这些信息作为 JSON 响应返回。
2. 为 'fetch' 事件添加一个事件监听器，对每个传入的请求调用 `handleRequest` 函数。

## 示例预览

![geolocation-info Preview](../assets/images/geolocation-info.avif)

## 使用场景

这种技术在以下情况下特别有用：

- 实现基于地理位置的内容交付或限制。
- 根据位置自定义用户体验。
- 分析用户人口统计和流量模式。
- 通过识别可疑的访问模式来增强安全措施。

## 注意事项

- 在收集和处理地理位置数据时，确保遵守数据保护法规。
- 注意地理位置数据的准确性可能会有所不同。
- 考虑为用户提供选择退出基于地理位置功能的选项。
- 负责任和透明地使用这些信息。

通过在边缘利用客户端地理位置数据，您可以创建更加个性化和高效的 Web 应用程序，而无需额外的客户端脚本或服务器端处理。
