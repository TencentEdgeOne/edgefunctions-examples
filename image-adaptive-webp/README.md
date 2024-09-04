# Image Adaptive WebP 

<a href="https://edgeone.ai/developer/examples/hub-imageadaptivewebP" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Online Example</a>

This example demonstrates how to use Edge Functions to dynamically serve WebP images to browsers that support this format, while falling back to original image formats for browsers that don't support WebP. This approach can significantly reduce image file sizes and improve page load times.

## How It Works

1. Intercept incoming image requests.
2. Check the `Accept` header of the request to determine if the client supports WebP.
3. If WebP is supported, fetch the WebP version of the image (if available).
4. If WebP is not supported or the WebP version doesn't exist, fetch the original image.
5. Modify the response headers to reflect the correct content type.
6. Return the appropriate image to the client.

## Use Cases

This technique is particularly useful in the following situations:

- Websites with a large number of images that want to reduce bandwidth usage.
- E-commerce platforms looking to improve page load times for product images.
- Content-heavy sites aiming to enhance user experience through faster image loading.
- Mobile-first applications where reducing data transfer is crucial.

## Considerations

- Ensure that WebP versions of your images are available on your origin server.
- Consider implementing a fallback mechanism for browsers that don't support WebP.
- Be mindful of the additional storage required for maintaining both WebP and original versions of images.
- Monitor the impact on your origin server's performance when generating WebP images on-the-fly.

By implementing adaptive WebP serving, you can significantly reduce the amount of data transferred to clients that support WebP, leading to faster page loads and improved user experience, while still maintaining compatibility with all browsers.