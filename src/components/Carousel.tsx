import { useRef, useEffect, useState } from 'react';

interface CarouselItem {
  title: string;
  description: string;
  image: string;
  video?: string;
  onRemove?: () => void;
}

interface CarouselProps {
  title: string;
  items: CarouselItem[];
  carouselId: string;
  onItemClick?: (videoId: string) => void;
}

const Carousel = ({ title, items, carouselId, onItemClick }: CarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateButtons = () => {
    if (!trackRef.current || !wrapperRef.current) return;
    
    const cardWidth = trackRef.current.firstElementChild?.getBoundingClientRect().width || 250;
    const gap = 16;
    const visibleCards = Math.floor(wrapperRef.current.offsetWidth / (cardWidth + gap));
    const maxIndex = Math.max(0, items.length - visibleCards);
    
    setCanScrollPrev(currentIndex > 0);
    setCanScrollNext(currentIndex < maxIndex);
  };

  useEffect(() => {
    updateButtons();
    window.addEventListener('resize', updateButtons);
    return () => window.removeEventListener('resize', updateButtons);
  }, [currentIndex, items.length]);

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (!trackRef.current || !wrapperRef.current) return;
    const cardWidth = trackRef.current.firstElementChild?.getBoundingClientRect().width || 250;
    const gap = 16;
    const visibleCards = Math.floor(wrapperRef.current.offsetWidth / (cardWidth + gap));
    const maxIndex = Math.max(0, items.length - visibleCards);
    
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.firstElementChild?.getBoundingClientRect().width || 250;
    const gap = 16;
    const offset = -(currentIndex * (cardWidth + gap));
    trackRef.current.style.transform = `translateX(${offset}px)`;
    updateButtons();
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h3 className="carousel-title">{title}</h3>
        <div className="carousel-controls">
          <button
            className="carousel-btn"
            onClick={prev}
            disabled={!canScrollPrev}
            aria-label="Précédent"
          >
            ←
          </button>
          <button
            className="carousel-btn"
            onClick={next}
            disabled={!canScrollNext}
            aria-label="Suivant"
          >
            →
          </button>
        </div>
      </div>
      <div className="carousel-wrapper" ref={wrapperRef}>
        <div className="carousel-track" ref={trackRef} role="list">
          {items.map((item, index) => (
            <div
              key={index}
              className="carousel-card"
              role="listitem"
              onClick={() => item.video && onItemClick?.(item.video)}
              style={{
                ...(item.video ? { cursor: 'pointer' } : {}),
                position: 'relative'
              }}
            >
              {item.onRemove && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette photo ?')) {
                      item.onRemove?.();
                    }
                  }}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    zIndex: 10,
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(229, 9, 20, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                  }}
                  aria-label="Supprimer la photo"
                  title="Supprimer la photo"
                >
                  ×
                </button>
              )}
              <div className="carousel-card-image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="carousel-card-image lazy-load loaded"
                  loading="lazy"
                />
              </div>
              <div className="carousel-card-content">
                <h4 className="carousel-card-title">{item.title}</h4>
                <p className="carousel-card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

