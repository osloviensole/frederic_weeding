const Hero = () => {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div 
        className="hero-background" 
        style={{
          backgroundImage: 'url(/image/fredpri.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: '38% 15%',
          backgroundRepeat: 'no-repeat'
        }}
        aria-hidden="true"
      ></div>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-content">
        <div className="hero-top-info">
          <span className="hero-label">MARIAGE</span>
          <div className="hero-stars">★★★★★</div>
        </div>
        <div className="hero-bottom-content">
          <h1 id="hero-title" className="hero-title">Frédéric & Priscille</h1>
          <p className="hero-subtitle">Célébrons notre amour ensemble</p>
          <div className="hero-date">27 DÉCEMBRE 2025</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

