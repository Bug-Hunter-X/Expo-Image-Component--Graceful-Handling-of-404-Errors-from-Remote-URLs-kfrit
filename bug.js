This bug occurs when using the Expo `Image` component with a remote image URL that returns a 404 error.  The component doesn't handle this gracefully, sometimes crashing the app or leaving a blank space where the image should be.  This is particularly problematic because standard error handling mechanisms for HTTP requests don't always seem to trigger in this context.

```javascript
<Image
  source={{ uri: 'https://example.com/image.jpg' }} //This URL might return 404
  style={{ width: 200, height: 200 }}
/>
```