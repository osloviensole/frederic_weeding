import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import { Photo } from '../../data/albums';

interface LightboxViewerProps {
  photos: Photo[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function LightboxViewer({ photos, currentIndex, isOpen, onClose }: LightboxViewerProps) {
  const slides = photos.map(photo => {
    if (photo.isVideo) {
      return {
        type: 'video' as const,
        sources: [
          {
            src: photo.src,
            type: 'video/mp4'
          }
        ],
        width: photo.width,
        height: photo.height,
        alt: photo.alt
      };
    }
    
    return {
      src: photo.src,
      width: photo.width,
      height: photo.height,
      alt: photo.alt
    };
  });

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      index={currentIndex}
      slides={slides}
      plugins={[Zoom, Counter]}
      zoom={{
        maxZoomPixelRatio: 3,
        zoomInMultiplier: 2,
        doubleTapDelay: 300,
        doubleClickDelay: 300,
        doubleClickMaxStops: 2,
        keyboardMoveDistance: 50,
        wheelZoomDistanceFactor: 100,
        pinchZoomDistanceFactor: 100,
        scrollToZoom: true
      }}
      counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      styles={{
        container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        button: { 
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)"
        }
      }}
    />
  );
}