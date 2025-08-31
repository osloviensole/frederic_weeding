import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlbumCard } from './AlbumCard';
import { Badge } from '../ui/Badge';
import { Album, ALBUM_TAGS } from '../../data/albums';

interface AlbumGridProps {
  albums: Album[];
}

export function AlbumGrid({ albums }: AlbumGridProps) {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filteredAlbums = activeFilter === 'Tous' 
    ? albums 
    : albums.filter(album => album.tags?.includes(activeFilter));

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {ALBUM_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === tag
                ? 'bg-violetDeep text-white shadow-lg'
                : 'glass-effect text-ink hover:bg-white/20'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Albums Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {filteredAlbums.map((album, index) => (
          <motion.div
            key={album.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            layout
          >
            <AlbumCard album={album} />
          </motion.div>
        ))}
      </motion.div>

      {filteredAlbums.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-inkSecondary text-lg">Aucun album trouvé pour cette catégorie.</p>
        </motion.div>
      )}
    </div>
  );
}