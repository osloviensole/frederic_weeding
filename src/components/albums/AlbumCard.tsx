import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Image } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Album } from '../../data/albums';

interface AlbumCardProps {
  album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <Link to={`/albums/${album.id}`}>
      <motion.div
        className="group"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Card hover className="overflow-hidden p-0 h-full">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={album.coverUrl}
              alt={album.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {album.tags?.map((tag) => (
                <Badge key={tag} variant="primary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h3 className="font-serif text-xl font-semibold text-ink mb-2 group-hover:text-violetDeep transition-colors">
              {album.title}
            </h3>
            
            <div className="flex items-center text-inkSecondary text-sm mb-3">
              <Calendar className="mr-2" size={16} />
              <span>{formatDate(album.date)}</span>
            </div>
            
            <div className="flex items-center text-inkSecondary text-sm mb-3">
              <Image className="mr-2" size={16} />
              <span>{album.photos.length} photos</span>
            </div>
            
            {album.description && (
              <p className="text-inkSecondary text-sm line-clamp-2">
                {album.description}
              </p>
            )}
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}