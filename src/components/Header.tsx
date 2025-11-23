import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOnHero, setIsOnHero] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroElement = document.getElementById('home');
      const heroHeight = heroElement ? heroElement.offsetHeight : 0;
      
      setScrolled(scrollY > 50);
      setIsOnHero(scrollY < heroHeight * 0.8);
      
      // Update active link based on scroll position
      const sections = ['home', 'story', 'events', 'gallery', 'rsvp'];
      const scrollPosition = scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (section: string) => {
    setActiveLink(section);
    setMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Fermer le menu en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuOpen && !target.closest('.nav') && !target.closest('.menu-toggle')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Empêcher le scroll du body quand le menu est ouvert
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'story', label: 'Notre Histoire' },
    { id: 'events', label: 'Événements' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'rsvp', label: 'RSVP' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isOnHero ? 'on-hero' : ''}`} role="banner">
      <div className="header-content">
        <a 
          href="#home" 
          className="logo" 
          aria-label="Accueil"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
        >
          F & P
        </a>
        <nav className={`nav ${menuOpen ? 'active' : ''}`} role="navigation" aria-label="Navigation principale">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        {menuOpen && (
          <div 
            className="nav-overlay"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;

