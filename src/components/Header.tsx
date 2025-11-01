import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Update active link based on scroll position
      const sections = ['home', 'story', 'events', 'gallery', 'rsvp'];
      const scrollPosition = window.scrollY + 100;
      
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

    window.addEventListener('scroll', handleScroll);
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

  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'story', label: 'Notre Histoire' },
    { id: 'events', label: 'Événements' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'rsvp', label: 'RSVP' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} role="banner">
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
          S & A
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
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;

