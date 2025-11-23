import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !backgroundRef.current) return;
      
      const heroRect = heroRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -heroRect.top / heroRect.height));
      
      // Effet parallax : le background se déplace plus lentement
      const parallaxOffset = scrollProgress * 50;
      backgroundRef.current.style.transform = `translateY(${parallaxOffset}px) scale(${1.1 + scrollProgress * 0.05})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Appel initial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} id="home" className="hero" aria-labelledby="hero-title">
      <div 
        ref={backgroundRef}
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

