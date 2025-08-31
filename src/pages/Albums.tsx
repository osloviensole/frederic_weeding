import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Camera, Video, Image } from 'lucide-react';
import { AlbumGrid } from '../components/albums/AlbumGrid';
import { ALBUMS } from '../data/albums';

export function Albums() {
  const totalPhotos = ALBUMS.reduce((total, album) => total + album.photos.length, 0);
  const totalVideos = ALBUMS.reduce((total, album) => 
    total + album.photos.filter(photo => photo.isVideo).length, 0
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-violetPale via-white to-rosePale overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-violetLight/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-roseViolet/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-light text-ink mb-6">
              Nos Albums Photos
            </h1>
            <div className="w-24 h-px bg-violetLight mx-auto mb-8"></div>
            <p className="text-xl text-inkSecondary max-w-3xl mx-auto leading-relaxed mb-8">
              Découvrez notre collection de moments précieux, de portraits touchants 
              et de souvenirs inoubliables qui racontent notre histoire d'amour
            </p>
            
            {/* Statistiques */}
            <div className="flex flex-wrap justify-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violetLight/30 to-roseViolet/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Image className="w-8 h-8 text-violetDeep" />
                </div>
                <div className="text-2xl font-bold text-ink">{totalPhotos}</div>
                <div className="text-inkSecondary">Photos</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violetLight/30 to-roseViolet/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Video className="w-8 h-8 text-violetDeep" />
                </div>
                <div className="text-2xl font-bold text-ink">{totalVideos}</div>
                <div className="text-inkSecondary">Vidéos</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violetLight/30 to-roseViolet/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-8 h-8 text-violetDeep" />
                </div>
                <div className="text-2xl font-bold text-ink">{ALBUMS.length}</div>
                <div className="text-inkSecondary">Albums</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">Explorez Nos Souvenirs</h2>
            <div className="w-24 h-px bg-violetLight mx-auto mb-8"></div>
            <p className="text-lg text-inkSecondary max-w-2xl mx-auto">
              Chaque album raconte une partie de notre histoire, de nos débuts à aujourd'hui
            </p>
          </motion.div>
          
          <AlbumGrid albums={ALBUMS} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violetDeep to-violetLight">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Partagez Nos Moments Précieux
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Ces photos et vidéos représentent notre amour et notre bonheur. 
              Nous sommes ravis de les partager avec vous, nos proches.
            </p>
            <div className="flex items-center justify-center space-x-4 text-white/80 mb-6">
              <span className="text-2xl">💕</span>
              <span className="text-2xl">📸</span>
              <span className="text-2xl">🎥</span>
              <span className="text-2xl">✨</span>
            </div>
            <p className="text-white/80 text-sm">
              Cliquez sur une photo ou une vidéo pour l'agrandir et la regarder en plein écran
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}