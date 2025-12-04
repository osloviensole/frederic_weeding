const WeddingProgram = () => {

  return (
    <section id="wedding-program" className="wedding-program-section-modern">
      <div className="wedding-program-container-modern">
        {/* Section photos avec effet parallax */}
        {/* <div className="program-photos-section">
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
        </div> */}

        {/* Section contenu */}
        <div className="wedding-program-content-modern">
          <div className="program-title-container-modern">
            <h2 className="program-title-main-modern">Programme</h2>
            <h3 className="program-title-subtitle-modern">DE MARIAGE</h3>
            <div className="program-title-decoration"></div>
          </div>

          <p className="program-description-modern">
            Découvrez le déroulé de notre journée spéciale, 
            un programme riche en émotions et en moments inoubliables.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeddingProgram;

