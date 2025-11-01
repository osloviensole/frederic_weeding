const Footer = () => {
  const handleLinkClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Frédéric & Priscille</h3>
          <p style={{ color: 'var(--color-text-muted)', marginTop: 'calc(var(--spacing-unit) * 2)' }}>
            Nous sommes impatients de célébrer ce jour spécial avec vous.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Navigation</h3>
          <ul className="footer-links">
            <li>
              <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>Accueil</a>
            </li>
            <li>
              <a href="#story" onClick={(e) => { e.preventDefault(); handleLinkClick('story'); }}>Notre Histoire</a>
            </li>
            <li>
              <a href="#events" onClick={(e) => { e.preventDefault(); handleLinkClick('events'); }}>Événements</a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); handleLinkClick('gallery'); }}>Galerie</a>
            </li>
            <li>
              <a href="#rsvp" onClick={(e) => { e.preventDefault(); handleLinkClick('rsvp'); }}>RSVP</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="footer-links">
            <li>
              <a href="mailto:contact@fredericpriscille.com">
                contact@fredericpriscille.com
              </a>
            </li>
            <li style={{ color: 'var(--color-text-muted)', marginTop: 'calc(var(--spacing-unit) * 2)' }}>
              Salle des fêtes Roméo, Kinshasa<br />
              République Démocratique du Congo
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Frédéric & Priscille. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

