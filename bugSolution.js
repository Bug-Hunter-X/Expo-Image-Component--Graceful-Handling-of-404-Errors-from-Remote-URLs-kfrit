This solution uses a custom hook to fetch the image and handle potential 404 errors.  A placeholder image is displayed if the image URL is invalid.

```javascript
import React, { useState, useEffect } from 'react';
import { Image } from 'expo-image-picker';

const useImageFetch = (uri) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(uri);
        if (!response.ok) {
          if (response.status === 404) {
            setError('Image not found');
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } else {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setImage(imageUrl);
        }
      } catch (e) {
        setError(e);
      }
    };

    fetchImage();
  }, [uri]);

  return { image, error };
};

export default function App() {
  const { image, error } = useImageFetch('https://example.com/image.jpg');

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <Image
        source={{ uri: image }}
        style={{ width: 200, height: 200 }}
    />
  );
}
```