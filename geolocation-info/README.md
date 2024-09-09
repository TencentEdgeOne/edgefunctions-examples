<div align="left">
  Language:
  <a title="English" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# Geolocation Info

<a href="https://edgeone.ai/developer/examples/hub-obtainingclientipaddress" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Online Example</a>

This example demonstrates how to use an Edge Function to obtain and return client geo-location data. This information can be valuable for various purposes such as content localization, analytics, or security measures.

## Available Geolocation Properties (GeoProperties)

The Edge Function can access the following properties describing the client request's location information:

| Property Name | Type | Description | Example Value |
|---------------|------|-------------|---------------|
| asn | number | Autonomous System Number (ASN) | 132203 |
| countryName | string | Country name | Singapore |
| countryCodeAlpha2 | string | ISO-3611 alpha2 country code | SG |
| countryCodeAlpha3 | string | ISO-3611 alpha3 country code | SGP |
| countryCodeNumeric | string | ISO-3611 numeric country code | 702 |
| regionName | string | Region name | - |
| regionCode | string | Region code | AA-AA |
| cityName | string | City name | singapore |
| latitude | number | Latitude | 1.29027 |
| longitude | number | Longitude | 103.851959 |

## How It Works

1. Create a `handleRequest` function that:
   - Accesses the client information through `request.eo`.
   - Returns this information as a JSON response.
2. Add an event listener for the 'fetch' event, which calls the `handleRequest` function for each incoming request.

## Sample Preview

![geolocation-info Preview](../assets/images/geolocation-info.avif)

## Use Cases

This technique is particularly useful in the following situations:

- Implementing geo-based content delivery or restrictions.
- Customizing user experience based on location.
- Analyzing user demographics and traffic patterns.
- Enhancing security measures by identifying suspicious access patterns.

## Considerations

- Ensure compliance with data protection regulations when collecting and processing geo-location data.
- Be aware that the accuracy of geo-location data can vary.
- Consider providing options for users to opt-out of geo-location based features.
- Use this information responsibly and transparently.

By leveraging client geo-location data at the edge, you can create more personalized and efficient web applications without the need for additional client-side scripts or server-side processing.