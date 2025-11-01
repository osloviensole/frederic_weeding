interface WeddingProgramProps {
  onVideoClick?: (videoId: string) => void;
}

const WeddingProgram = ({ onVideoClick }: WeddingProgramProps) => {
  const handleLectureClick = () => {
    if (onVideoClick) {
      onVideoClick('intro');
    }
  };

  return (
    <section id="wedding-program" className="wedding-program-section">
      <div className="wedding-program-container">
        <div className="polaroid-photos-wrapper">
          <div className="polaroid-photo polaroid-photo-1">
            <img src="/image/fredpri.jpg" alt="Frédéric & Priscille" />
          </div>
          <div className="polaroid-photo polaroid-photo-2">
            <img src="/image/pi_2.jpg" alt="Frédéric & Priscille" />
          </div>
          <div className="polaroid-photo polaroid-photo-3">
            <img src="/image/pi_3.jpg" alt="Frédéric & Priscille" />
          </div>
        </div>

        <div className="wedding-program-content">
          <div className="program-label">TOP 10 EN FRANCE</div>
          <div className="program-title-wrapper">
            <h2 className="program-title-main">Programme</h2>
            <h3 className="program-title-subtitle">DE MARIAGE</h3>
          </div>
          <div className="program-buttons">
            <button className="program-btn program-btn-primary" onClick={handleLectureClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>Lecture</span>
            </button>
            <button className="program-btn program-btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
              <span>Plus d'infos</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingProgram;

