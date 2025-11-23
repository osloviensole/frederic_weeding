import { useState, useEffect } from 'react';
import { StoryItem } from '../data/weddingData';

interface MomentsClesProps {
  moments: StoryItem[];
  onVideoClick?: (videoId: string) => void;
}

const MomentsCles = ({ moments, onVideoClick }: MomentsClesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % moments.length);
    }, 20000); // 10 secondes pour changer de moment
    return () => clearInterval(interval);
  }, [moments.length]);

  // Auto-rotation du carrousel d'images pour chaque moment
  useEffect(() => {
    const moment = moments[activeIndex];
    const images = moment.images || (moment.image ? [moment.image] : []);
    
    if (images.length > 1) {
      const imageInterval = setInterval(() => {
        setActiveImageIndex((prev) => ({
          ...prev,
          [activeIndex]: ((prev[activeIndex] || 0) + 1) % images.length
        }));
      }, 2000); // 2 secondes pour le carrousel d'images
      return () => clearInterval(imageInterval);
    }
  }, [activeIndex, moments]);

  const getCurrentImages = (moment: typeof moments[0]) => {
    if (moment.images && moment.images.length > 0) {
      return moment.images;
    }
    if (moment.image) {
      return [moment.image];
    }
    return [];
  };

  const getCurrentImage = (moment: typeof moments[0], momentIndex: number) => {
    const images = getCurrentImages(moment);
    if (images.length === 0) return '';
    const currentImageIndex = activeImageIndex[momentIndex] || 0;
    return images[currentImageIndex];
  };

  return (
    <section className="moments-cles-section">
      <div className="moments-cles-container">
        <div className="moments-cles-header">
          <h2 className="moments-cles-title">Moments Clés</h2>
          <p className="moments-cles-subtitle">Notre parcours ensemble</p>
        </div>

        <div className="moments-cles-content">
          {/* Timeline verticale */}
          <div className="moments-timeline">
            {moments.map((_, index) => (
              <div
                key={index}
                className={`moment-timeline-item ${index === activeIndex ? 'active' : ''} ${index < activeIndex ? 'passed' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="timeline-dot"></div>
                {index < moments.length - 1 && <div className="timeline-line"></div>}
              </div>
            ))}
          </div>

          {/* Carte principale du moment actif */}
          <div className="moments-main-card-wrapper">
            {moments.map((moment, index) => (
              <div
                key={index}
                className={`moment-main-card ${index === activeIndex ? 'active' : ''}`}
                onClick={() => moment.video && onVideoClick?.(moment.video)}
                style={moment.video ? { cursor: 'pointer' } : {}}
              >
                <div className="moment-card-image-wrapper">
                  <div className="moment-card-carousel">
                    {getCurrentImages(moment).map((img, imgIndex) => {
                      const currentImageIndex = activeImageIndex[index] || 0;
                      const isActive = imgIndex === currentImageIndex;
                      return (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${moment.title} - ${imgIndex + 1}`}
                          className={`moment-card-image ${isActive ? 'active' : ''}`}
                          loading="lazy"
                        />
                      );
                    })}
                    {getCurrentImages(moment).length > 1 && (
                      <>
                        <div className="moment-carousel-indicators">
                          {getCurrentImages(moment).map((_, imgIndex) => {
                            const currentImageIndex = activeImageIndex[index] || 0;
                            return (
                              <button
                                key={imgIndex}
                                className={`moment-carousel-dot ${imgIndex === currentImageIndex ? 'active' : ''}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveImageIndex((prev) => ({
                                    ...prev,
                                    [index]: imgIndex
                                  }));
                                }}
                                aria-label={`Image ${imgIndex + 1}`}
                              />
                            );
                          })}
                        </div>
                        <button
                          className="moment-carousel-prev"
                          onClick={(e) => {
                            e.stopPropagation();
                            const images = getCurrentImages(moment);
                            const current = activeImageIndex[index] || 0;
                            setActiveImageIndex((prev) => ({
                              ...prev,
                              [index]: (current - 1 + images.length) % images.length
                            }));
                          }}
                          aria-label="Image précédente"
                        >
                          ‹
                        </button>
                        <button
                          className="moment-carousel-next"
                          onClick={(e) => {
                            e.stopPropagation();
                            const images = getCurrentImages(moment);
                            const current = activeImageIndex[index] || 0;
                            setActiveImageIndex((prev) => ({
                              ...prev,
                              [index]: (current + 1) % images.length
                            }));
                          }}
                          aria-label="Image suivante"
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>
                  <div className="moment-card-overlay"></div>
                  {moment.video && (
                    <div className="moment-play-button">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="moment-card-content">
                  <div className="moment-card-number">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="moment-card-title">{moment.title}</h3>
                  <p className="moment-card-description">{moment.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Miniatures des autres moments */}
          <div className="moments-thumbnails">
            {moments.map((moment, index) => (
              <div
                key={index}
                className={`moment-thumbnail ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={getCurrentImage(moment, index)}
                  alt={moment.title}
                  className="thumbnail-image"
                  loading="lazy"
                />
                <div className="thumbnail-overlay"></div>
                <div className="thumbnail-number">{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsCles;

