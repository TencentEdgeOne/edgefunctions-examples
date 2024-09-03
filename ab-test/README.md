# A/B Test

This example demonstrates how to use an Edge Function to perform A/B testing by using cookies to store session information and serve different versions of content to users.

## How It Works

1. Define constants for cookie names and values, as well as the base path for A/B test resources.
2. Create a `handleRequest` function that:
   - Checks if the request is for A/B test resources.
   - Reads the existing A/B test cookie, if present.
   - Serves the appropriate version (A or B) based on the cookie value.
   - If no cookie exists, randomly assigns the user to group A or B and sets a new cookie.
3. Add an event listener for the 'fetch' event, which calls the `handleRequest` function for each incoming request.

## Sample Preview

![A/B Test Preview](../image/ab-test.png)

## Use Cases

This technique is particularly useful in the following situations:

- Testing new features or designs with a subset of users.
- Optimizing user experience by comparing different versions of content.
- Gradually rolling out changes to minimize risk.
- Gathering data on user preferences and behavior.

## Considerations

- Ensure that both versions (A and B) are fully functional and don't negatively impact user experience.
- Consider the duration of the A/B test and how it might affect long-term users.
- Implement proper analytics to measure the effectiveness of each version.
- Be mindful of potential biases in your A/B test setup and results.

By implementing A/B testing at the edge, you can quickly and efficiently test different versions of your content without modifying your origin server or using client-side JavaScript.

For more details and the full implementation, please refer to the [EdgeOne Developer Examples](https://edgeone.ai/developer/examples/hub-performingana-btest).
