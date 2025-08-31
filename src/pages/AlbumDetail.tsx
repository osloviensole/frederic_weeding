import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Share2, Calendar, Image } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PhotoGrid } from '../components/albums/PhotoGrid';
import { LightboxViewer } from '../components/albums/LightboxViewer';
import { ALBUMS } from '../data/albums';

export function AlbumDetail() {
  const { albumId } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  
  const album = ALBUMS.find(a => a.id === albumId);

  if (!album) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-ink mb-4">Album non trouvé</h1>
          <Link to="/albums">
            <Button variant="secondary">Retour aux albums</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: album.title,
          text: album.description,
          url: window.location.href
        });
      } catch (err) {
        console.log('Partage annulé');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papiers !');
    }
  };

  return (
    <div className="pt-20">
      <Section background="gradient">
        {/* Back button */}
        <Link to="/albums" className="inline-block mb-8">
          <Button variant="ghost" icon={ArrowLeft}>
            Retour aux albums
          </Button>
        </Link>

        {/* Album header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {album.tags?.map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="font-serif text-5xl font-light text-ink mb-4">
            {album.title}
          </h1>
          
          <div className="flex items-center justify-center text-inkSecondary mb-4 space-x-6">
            <div className="flex items-center">
              <Calendar className="mr-2" size={18} />
              <span>{formatDate(album.date)}</span>
            </div>
            <div className="flex items-center">
              <Image className="mr-2" size={18} />
              <span>{album.photos.length} photos</span>
            </div>
          </div>

          {album.description && (
            <p className="text-lg text-inkSecondary max-w-2xl mx-auto mb-8">
              {album.description}
            </p>
          )}

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" icon={Download}>
              Télécharger tout
            </Button>
            <Button variant="ghost" icon={Share2} onClick={handleShare}>
              Partager
            </Button>
          </div>
        </motion.div>

        {/* Photo grid */}
        <PhotoGrid 
          photos={album.photos} 
          onPhotoClick={setLightboxIndex}
        />

        {/* Lightbox */}
        <LightboxViewer
          photos={album.photos}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex >= 0}
          onClose={() => setLightboxIndex(-1)}
        />
      </Section>
    </div>
  );
}