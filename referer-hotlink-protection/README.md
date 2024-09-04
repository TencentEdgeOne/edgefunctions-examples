# Referer Hotlink Protection

This example demonstrates how to use an Edge Function to implement referer-based hotlink protection. This technique helps protect your website's resources from unauthorized use by other websites.

## How It Works

1. Create a `handleRequest` function that:
   - Retrieves the 'Referer' header from the incoming request.
   - Checks if the referer is present and matches an allowed pattern.
   - Returns an appropriate response based on the referer check.
2. Add an event listener for the 'fetch' event, which calls the `handleRequest` function for each incoming request.

## Sample Preview

If the referer is incorrect, access is denied.

![referer-hotlink-protection-denied Preview](../readme-images/referer-hotlink-protection-denied.avif)

If the referer is correct, access is granted.

![referer-hotlink-protection-granted Preview](../readme-images/referer-hotlink-protection-granted.avif)

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

For more details and the full implementation, please refer to the [EdgeOne Developer Examples](https://edgeone.ai/developer/examples/hub-customrefererantileeching).