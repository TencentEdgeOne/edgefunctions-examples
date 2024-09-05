# M3U8 Rewrite Authentication

<a href="https://edgeone.ai/developer/examples/hub-rewritingam3u8fileandconfiguringauthentication" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Online Example</a>

This example demonstrates how to use an Edge Function to rewrite M3U8 files and configure authentication. This technique can protect streaming content from unauthorized access while ensuring secure content delivery.

## How It Works

1. Define constants and helper functions, including private key, TTL, and signature generation functions.
2. Implement the `checkTypeA` function for TypeA authentication.
3. Create the `fetchM3u8` function to fetch and rewrite M3U8 file content.
4. Implement the `rewriteLine` function to process each line of the M3U8 file.
5. In the main handler function:
   - Check if the file extension is .m3u8 or .ts.
   - Perform TypeA authentication on the request.
   - If it's an .m3u8 file, rewrite the content and return.
   - If it's a .ts file, return the content directly.

## Sample Preview

![m3u8-rewrite-auth Preview](../assets/images/m3u8-rewrite-auth.avif)

## Use Cases

This technique is particularly useful in the following situations:

- Protecting streaming content, such as video-on-demand (VOD) or live streams.
- Implementing time-based access control.
- Preventing unauthorized content distribution.
- Providing secure access mechanisms for paid content.

## Considerations

- Ensure the security of the private key (PK) and prevent leakage.
- Adjust the TTL value as needed to balance security and user experience.
- Regularly update signature algorithms and keys to prevent potential security vulnerabilities.

By implementing M3U8 file rewriting and authentication at the edge, you can effectively protect streaming content while maintaining good user experience and content delivery performance.