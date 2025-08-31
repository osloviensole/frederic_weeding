import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MONOGRAM } from '../../data/site';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/story', label: 'Notre Histoire' },
    { path: '/albums', label: 'Albums' },
    { path: '/party', label: 'Célébration' },
    { path: '/rsvp', label: 'RSVP' },
    { path: '/faq', label: 'FAQ' }
  ];

  // Détermine si on est sur la page d'accueil
  const isHomePage = location.pathname === '/';
  
  // Style de la navbar selon la page et le scroll
  const getNavbarStyle = () => {
    if (isHomePage) {
      // Page d'accueil : transparente au repos, violette au scroll
      return scrolled 
        ? 'bg-violetDeep/95 backdrop-blur-md shadow-lg border-b border-violetLight/30' 
        : 'bg-transparent';
    } else {
      // Autres pages : toujours violette
      return 'bg-violetDeep/95 backdrop-blur-md shadow-lg border-b border-violetLight/30';
    }
  };

  // Style du texte selon la page et le scroll
  const getTextStyle = (isActive: boolean = false) => {
    if (isHomePage && !scrolled) {
      // Page d'accueil au repos : texte blanc
      return isActive ? 'text-violetLight' : 'text-white';
    } else {
      // Autres pages ou page d'accueil scrollée : texte blanc avec accent violet
      return isActive ? 'text-violetLight' : 'text-white';
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarStyle()}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-violetDeep to-roseViolet rounded-full flex items-center justify-center text-white font-serif text-lg font-semibold group-hover:scale-110 transition-transform duration-300">
                {MONOGRAM}
              </div>
              <span className="font-serif text-xl font-light text-white transition-colors duration-300">
                Frédéric & Priscille
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`font-medium transition-colors duration-300 hover:text-violetLight ${getTextStyle(location.pathname === item.path)}`}
                >
                  {item.label}
                </Link>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violetLight rounded-full"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-violetLight/20 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-violetDeep/95 backdrop-blur-md border-t border-violetLight/30"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: navItems.indexOf(item) * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-violetLight bg-violetLight/20'
                          : 'text-white hover:text-violetLight hover:bg-violetLight/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}