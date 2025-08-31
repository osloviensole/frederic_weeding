import React from 'react';
import { motion } from 'framer-motion';
import { Play, Image } from 'lucide-react';
import { Photo } from '../../data/albums';

interface PhotoGridProps {
  photos: Photo[];
  onPhotoClick: (index: number) => void;
}

export function PhotoGrid({ photos, onPhotoClick }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          className="group cursor-pointer aspect-square overflow-hidden rounded-xl relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => onPhotoClick(index)}
        >
          {photo.isVideo ? (
            // Affichage de la vidéo
            <div className="w-full h-full bg-gradient-to-br from-violetLight/20 to-roseViolet/20 flex items-center justify-center">
              <video
                src={photo.src}
                className="w-full h-full object-cover"
                poster={photos[0]?.src} // Utilise la première photo comme poster
                muted
                loop
                onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" fill="currentColor" />
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                <Play className="w-3 h-3" />
                <span>Vidéo</span>
              </div>
            </div>
          ) : (
            // Affichage de la photo
            <>
              <img
                src={photo.src}
                alt={photo.alt || `Photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                <Image className="w-3 h-3" />
                <span>Photo</span>
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
}