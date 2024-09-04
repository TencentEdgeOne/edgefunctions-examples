# Geolocation Info

<a href="https://edgeone.ai/developer/examples/hub-obtainingclientipaddress" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Online Example</a>

This example demonstrates how to use an Edge Function to obtain and return client geo-location data. This information can be valuable for various purposes such as content localization, analytics, or security measures.

## How It Works

1. Create a `handleRequest` function that:
   - Accesses the client information through `request.eo`.
   - Returns this information as a JSON response.
2. Add an event listener for the 'fetch' event, which calls the `handleRequest` function for each incoming request.

## Sample Preview

![geolocation-info Preview](../readme-images/geolocation-info.avif)

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