<div align="left">
  Language:
  <a title="English" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# Image Adaptive WebP 

<a href="https://edgeone.ai/developer/examples/hub-imageadaptivewebP" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Online Example</a>

This example demonstrates how to use Edge Functions to dynamically serve WebP images to browsers that support this format, while falling back to original image formats for browsers that don't support WebP. This approach can significantly reduce image file sizes and improve page load times. If your web application displays a large number of PNG and JPEG format images and you want to automatically optimize images at the edge to reduce bandwidth costs, you can use edge functions to implement a smooth upgrade, automatically converting PNG and JPEG format images to WebP format with zero changes to your business code.

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

- This example only performs the conversion when the Content-Type header of the source file specifies an image MIME type (image/*).
- This example currently does not support converting SVG format images.
- It is recommended to add file extensions such as .png, .jpeg, .jpg to the Edge Function trigger rule configuration to ensure conversion is only performed on appropriate file types.

By implementing adaptive WebP serving, you can significantly reduce the amount of data transferred to clients that support WebP, leading to faster page loads and improved user experience, while still maintaining compatibility with all browsers.