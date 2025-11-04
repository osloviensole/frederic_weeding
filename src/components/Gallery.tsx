import { useState, useRef } from 'react';
import Carousel from './Carousel';
import { GalleryItem, VideoItem } from '../data/weddingData';

interface GalleryProps {
  gallery: GalleryItem[];
  videos: VideoItem[];
  onVideoClick: (videoId: string) => void;
  onAddPhoto: (photo: GalleryItem) => void;
  onRemovePhoto: (index: number) => void;
  uploadedPhotosCount: number;
}

const Gallery = ({ gallery, videos, onVideoClick, onAddPhoto, onRemovePhoto, uploadedPhotosCount }: GalleryProps) => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  // Convertir un fichier en data URL
  const fileToDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Gérer l'upload d'une photo
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Vérifier que c'est une image
    if (!file.type.startsWith('image/')) {
      alert('Veuillez sélectionner un fichier image');
      return;
    }

    setUploading(true);
    try {
      const imageUrl = await fileToDataURL(file);
      const title = titleInputRef.current?.value.trim() || file.name.replace(/\.[^/.]+$/, '');
      const description = descriptionInputRef.current?.value.trim() || 'Photo ajoutée';

      const newPhoto: GalleryItem = {
        title,
        description,
        image: imageUrl
      };

      onAddPhoto(newPhoto);
      
      // Réinitialiser le formulaire
      if (fileInputRef.current) fileInputRef.current.value = '';
      if (titleInputRef.current) titleInputRef.current.value = '';
      if (descriptionInputRef.current) descriptionInputRef.current.value = '';
      setShowUploadForm(false);
    } catch (error) {
      console.error('Erreur lors de l\'upload:', error);
      alert('Une erreur est survenue lors de l\'upload de la photo');
    } finally {
      setUploading(false);
    }
  };

  // Calculer l'index de base pour les photos uploadées dans la galerie complète
  const baseGalleryLength = gallery.length - uploadedPhotosCount;

  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className="section-header">
        <h2 id="gallery-title" className="section-title">Galerie</h2>
        <p className="section-description">
          Nos plus beaux souvenirs en images
        </p>
        <button
          onClick={() => setShowUploadForm(!showUploadForm)}
          className="gallery-upload-btn"
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#e50914',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f40612'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e50914'}
        >
          {showUploadForm ? 'Annuler' : '+ Ajouter une photo'}
        </button>
      </div>

      {showUploadForm && (
        <div className="gallery-upload-form" style={{
          margin: '2rem 0',
          padding: '2rem',
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
          border: '1px solid #333'
        }}>
          <h3 style={{ marginBottom: '1.5rem', color: '#fff' }}>Ajouter une photo</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>
                Titre (optionnel)
              </label>
              <input
                ref={titleInputRef}
                type="text"
                placeholder="Ex: Moment magique"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  color: '#fff',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>
                Description (optionnelle)
              </label>
              <input
                ref={descriptionInputRef}
                type="text"
                placeholder="Ex: Un souvenir inoubliable"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  color: '#fff',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>
                Photo
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                disabled={uploading}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  color: '#fff',
                  cursor: uploading ? 'not-allowed' : 'pointer'
                }}
              />
            </div>
            {uploading && (
              <p style={{ color: '#ccc', fontStyle: 'italic' }}>Upload en cours...</p>
            )}
          </div>
        </div>
      )}

      <Carousel
        title="Photos"
        items={gallery.map((item, index) => {
          // Si c'est une photo uploadée (après les photos de base), ajouter un bouton de suppression
          const isUploaded = index >= baseGalleryLength;
          return {
            ...item,
            onRemove: isUploaded ? () => onRemovePhoto(index - baseGalleryLength) : undefined
          };
        })}
        carouselId="gallery"
      />

      <Carousel
        title="Vidéos"
        items={videos}
        carouselId="videos"
        onItemClick={onVideoClick}
      />
    </section>
  );
};

export default Gallery;

