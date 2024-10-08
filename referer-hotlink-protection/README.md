<div align="left">
  Language:
  <a title="English" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# Referer Hotlink Protection

<a href="https://edgeone.ai/developer/examples/hub-customrefererantileeching" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Online Example</a>

This example demonstrates how to use an Edge Function to implement referer-based hotlink protection. This technique helps protect your website's resources from unauthorized use by other websites.

<div align="left">
  <a href="https://playground.edgeone.ai/?t=cf0b43b26b77e4475b46bb462617e510" style="display: inline-block; background-color: #28a745; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">Try in Playground</a>
</div>

## How It Works

1. Create a `handleRequest` function that:
   - Retrieves the 'Referer' header from the incoming request.
   - Checks if the referer is present and matches an allowed pattern.
   - Returns an appropriate response based on the referer check.
2. Add an event listener for the 'fetch' event, which calls the `handleRequest` function for each incoming request.

## Sample Preview

If the referer is incorrect, access is denied.

![referer-hotlink-protection-denied Preview](../assets/images/referer-hotlink-protection-denied.avif)

If the referer is correct, access is granted.

![referer-hotlink-protection-granted Preview](../assets/images/referer-hotlink-protection-granted.avif)

## Use Cases

This technique is particularly useful in the following situations:

- Protecting images, videos, or other media from being embedded on unauthorized websites.
- Controlling access to downloadable files.
- Preventing bandwidth theft by ensuring resources are only served to legitimate users.
- Implementing basic content protection strategies.

## Considerations

- Be aware that the 'Referer' header can be spoofed, so this method is not foolproof.
- Consider implementing additional security measures for sensitive content.
- Ensure that legitimate use cases (e.g., social media sharing) are not inadvertently blocked.
- Regularly review and update your allowed referer patterns to accommodate changes in your website structure.

By implementing referer-based hotlink protection at the edge, you can efficiently control access to your resources without modifying your origin server or using server-side scripts.