# Expo Image 404 Error Handling

This repository demonstrates a bug in Expo's `Image` component where it doesn't gracefully handle 404 errors from remote image URLs. The issue is that the component may crash or display nothing when the image is not found, and typical error handling mechanisms might not detect the problem.

## Bug Description
The `Image` component, when provided with a URL that returns a 404, sometimes fails silently, resulting in a blank space or an app crash.  This behavior is inconsistent and makes robust error handling difficult.

## Solution
The provided solution introduces a custom error handling mechanism that checks the image's status code.  If a 404 error occurs, a placeholder image is displayed, providing a better user experience.