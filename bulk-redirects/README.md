<div align="left">
  Language:
  <a title="English" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# Bulk Redirects

<a href="https://edgeone.ai/products/function" style="display: inline-block; background-color: #0366d6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">Get Started</a>

This example demonstrates how to implement bulk redirects using an Edge Function. This technique allows you to efficiently manage a large number of URL redirects, which is useful for website restructuring, domain migrations, or URL structure changes.

## How It Works

1. Define an object or array containing redirect rules.
2. Create a `handleRequest` function that:
   - Parses the incoming request URL.
   - Checks if the URL matches any predefined redirect rules.
   - Returns the appropriate redirect response if a match is found.
   - Passes the request to the original destination if no match is found.
3. Add a 'fetch' event listener that calls the `handleRequest` function for each incoming request.

## Use Cases

This technique is particularly useful in the following situations:

- Maintaining accessibility of old URLs after website restructuring or redesign.
- Preserving SEO value during domain migrations.
- Managing a large number of short URLs or custom URLs.
- Implementing dynamic redirects based on specific conditions.

## Considerations

- Ensure redirect rules are accurate to avoid creating redirect loops.
- Consider using 301 (permanent) or 302 (temporary) redirects depending on your specific needs.
- Regularly review and update redirect rules, removing those that are no longer needed.
- Monitor the performance impact of redirects, especially when handling a large number of rules.

By implementing bulk redirects at the edge, you can efficiently manage changes in URL structure, improve user experience, and maintain search engine optimization effects.