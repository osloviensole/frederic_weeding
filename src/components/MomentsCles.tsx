import { useState, useEffect } from 'react';
import { StoryItem } from '../data/weddingData';

interface MomentsClesProps {
  moments: StoryItem[];
  onVideoClick?: (videoId: string) => void;
}

const MomentsCles = ({ moments, onVideoClick }: MomentsClesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % moments.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [moments.length]);

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
            {moments.map((moment, index) => (
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
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="moment-card-image"
                    loading="lazy"
                  />
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
                  src={moment.image}
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

