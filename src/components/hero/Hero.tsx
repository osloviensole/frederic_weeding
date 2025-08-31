import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Heart, Sparkles, Play, Image, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { SITE } from '../../data/site';
import { IMAGES } from '../../data/images';

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Tous les médias du dossier public
  const allMedia = [
    { src: '/images/p&f.jpg', type: 'image', alt: 'Priscille et Frédéric' },
    { src: '/images/bill&bill.jpg', type: 'image', alt: 'Photo de couple' },
    { src: '/images/regard.jpg', type: 'image', alt: 'Regard amoureux' },
    { src: '/images/love.jpg', type: 'image', alt: 'Expression d\'amour' },
    { src: '/images/drow&drop.jpg', type: 'image', alt: 'Moment spécial' },
    { src: '/images/priscille.jpg', type: 'image', alt: 'Portrait de Priscille' },
    { src: '/images/fred.jpg', type: 'image', alt: 'Portrait de Frédéric' },
    { src: '/images/hero.png', type: 'image', alt: 'Photo principale' },
    { src: '/video/video.mp4', type: 'video', alt: 'Vidéo de nos moments' }
  ];

  useEffect(() => {
    const weddingDate = new Date(SITE.dateISO);
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Carrousel automatique des médias
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % allMedia.length);
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, [allMedia.length]);

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % allMedia.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  };

  const currentMedia = allMedia[currentMediaIndex];

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Media Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMediaIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            {currentMedia.type === 'video' ? (
              <video
                src={currentMedia.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={currentMedia.src}
                alt={currentMedia.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = IMAGES.hero.fallback;
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Overlay pour assurer la lisibilité */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        
        {/* Navigation du carrousel */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
          <button
            onClick={prevMedia}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
          <button
            onClick={nextMedia}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Indicateurs du carrousel */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {allMedia.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMediaIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentMediaIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
        
        {/* Badge du type de média */}
        <div className="absolute top-8 right-8 z-20">
          <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2">
            {currentMedia.type === 'video' ? (
              <>
                <Play className="w-4 h-4" />
                <span>Vidéo</span>
              </>
            ) : (
              <>
                <Image className="w-4 h-4" />
                <span>Photo</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Floating hearts */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 text-violetLight/40"
          animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Heart size={64} fill="currentColor" />
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-20 w-12 h-12 text-roseViolet/40"
          animate={{ y: [0, -15, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        >
          <Heart size={48} fill="currentColor" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-20 w-14 h-14 text-violetLight/30"
          animate={{ y: [0, 25, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <Heart size={56} fill="currentColor" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-32 w-10 h-10 text-roseViolet/30"
          animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 3 }}
        >
          <Heart size={40} fill="currentColor" />
        </motion.div>

        {/* Sparkles */}
        <motion.div
          className="absolute top-40 left-1/4 text-violetLight/50"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles size={24} />
        </motion.div>
        
        <motion.div
          className="absolute top-60 right-1/3 text-roseViolet/50"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        >
          <Sparkles size={20} />
        </motion.div>

        {/* Soft circles */}
        <motion.div
          className="absolute top-20 left-1/3 w-32 h-32 bg-gradient-to-br from-violetLight/20 to-roseViolet/20 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-roseViolet/20 to-violetLight/20 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="text-center z-20 px-4 max-w-6xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-serif text-6xl md:text-8xl font-light text-white mb-4 text-shadow">
            {SITE.couple.groom}
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-violetLight to-transparent w-24 md:w-32"></div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="mx-6 text-violetLight" size={28} fill="currentColor" />
            </motion.div>
            <div className="h-px bg-gradient-to-r from-transparent via-violetLight to-transparent w-24 md:w-32"></div>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-white mb-8 text-shadow">
            {SITE.couple.bride}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-4 text-white/90">
            <Calendar className="mr-2" size={20} />
            <span className="text-lg">{new Date(SITE.dateISO).toLocaleDateString('fr-FR', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center justify-center text-white/90">
            <MapPin className="mr-2" size={20} />
            <span className="text-lg">{SITE.venue}, {SITE.city}</span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="glass-effect rounded-3xl p-8 md:p-12 mb-12 inline-block max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-8">Nous nous marions dans</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {[
              { label: 'Jours', value: timeLeft.days },
              { label: 'Heures', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Secondes', value: timeLeft.seconds }
            ].map((item) => (
              <motion.div
                key={item.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl md:text-4xl font-bold text-violetLight mb-2">{item.value}</div>
                <div className="text-xs md:text-sm text-white/80 uppercase tracking-wide">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="space-x-4"
        >
          <Button size="lg" className="bg-violetDeep hover:bg-violetDeep/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Confirmer ma présence
          </Button>
          <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-violetDeep transition-all duration-300">
            Voir les albums
          </Button>
        </motion.div>
      </div>
    </div>
  );
}