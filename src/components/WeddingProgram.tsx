import { useState, useEffect } from 'react';

interface WeddingProgramProps {
  onVideoClick?: (videoId: string) => void;
}

const WeddingProgram = ({ onVideoClick }: WeddingProgramProps) => {
  const [activePhoto, setActivePhoto] = useState(1);

  const handleLectureClick = () => {
    if (onVideoClick) {
      onVideoClick('intro');
    }
  };

  const handleMoreInfoClick = () => {
    const element = document.getElementById('wedding-program-details');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhoto((prev) => (prev % 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="wedding-program" className="wedding-program-section-modern">
      <div className="wedding-program-container-modern">
        {/* Section photos avec effet parallax */}
        <div className="program-photos-section">
          <div className="program-photos-grid">
            <div 
              className={`program-photo-card ${activePhoto === 1 ? 'active' : ''}`}
              style={{ '--photo-index': 0 } as React.CSSProperties}
              onMouseEnter={() => setActivePhoto(1)}
            >
              <div className="photo-card-inner">
                <img src="/image/fredpri.jpg" alt="Frédéric & Priscille" className="photo-card-image" />
                <div className="photo-card-overlay"></div>
                <div className="photo-card-shadow"></div>
              </div>
            </div>
            <div 
              className={`program-photo-card ${activePhoto === 2 ? 'active' : ''}`}
              style={{ '--photo-index': 1 } as React.CSSProperties}
              onMouseEnter={() => setActivePhoto(2)}
            >
              <div className="photo-card-inner">
                <img src="/image/pi_2.jpg" alt="Frédéric & Priscille" className="photo-card-image" />
                <div className="photo-card-overlay"></div>
                <div className="photo-card-shadow"></div>
              </div>
            </div>
            <div 
              className={`program-photo-card ${activePhoto === 3 ? 'active' : ''}`}
              style={{ '--photo-index': 2 } as React.CSSProperties}
              onMouseEnter={() => setActivePhoto(3)}
            >
              <div className="photo-card-inner">
                <img src="/image/pi_3.jpg" alt="Frédéric & Priscille" className="photo-card-image" />
                <div className="photo-card-overlay"></div>
                <div className="photo-card-shadow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Section contenu */}
        <div className="wedding-program-content-modern">
          <div className="program-badge-modern">
            <span className="badge-icon">✨</span>
            <span className="badge-text">Programme Exclusif</span>
          </div>

          <div className="program-title-container-modern">
            <h2 className="program-title-main-modern">Programme</h2>
            <h3 className="program-title-subtitle-modern">DE MARIAGE</h3>
            <div className="program-title-decoration"></div>
          </div>

          <p className="program-description-modern">
            Découvrez le déroulé de notre journée spéciale, 
            un programme riche en émotions et en moments inoubliables.
          </p>

          <div className="program-buttons-modern">
            <button 
              className="program-btn-modern program-btn-primary-modern" 
              onClick={handleLectureClick}
            >
              <div className="btn-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span>Lecture</span>
              <div className="btn-ripple"></div>
            </button>
            <button 
              className="program-btn-modern program-btn-secondary-modern"
              onClick={handleMoreInfoClick}
            >
              <div className="btn-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
              </div>
              <span>Plus d'infos</span>
              <div className="btn-ripple"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingProgram;

