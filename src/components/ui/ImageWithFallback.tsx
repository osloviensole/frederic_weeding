import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ImageWithFallback({ 
  src, 
  fallback, 
  alt, 
  className = "", 
  style = {} 
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallback);
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
    />
  );
}
