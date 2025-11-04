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
  existingPhotosCount: number;
}

const Gallery = ({ gallery, videos, onVideoClick, onAddPhoto, onRemovePhoto, uploadedPhotosCount, existingPhotosCount }: GalleryProps) => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

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
      const formData = new FormData();
      formData.append('photo', file);
      
      const title = titleInputRef.current?.value.trim();
      const description = descriptionInputRef.current?.value.trim();
      
      if (title) formData.append('title', title);
      if (description) formData.append('description', description);

      const response = await fetch('/api/upload-photo', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'upload');
      }

      const photoData = await response.json();
      onAddPhoto(photoData);
      
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
  // Les photos existantes sont affichées en premier, puis les photos uploadées
  const baseGalleryLength = existingPhotosCount;

  return (
    <section id="gallery" className="gallery-section-modern" aria-labelledby="gallery-title">
      <div className="gallery-container-modern">
        {/* En-tête */}
        <div className="gallery-header-modern">
          <div className="gallery-title-wrapper">
            <h2 id="gallery-title" className="gallery-title-modern">Galerie</h2>
            <p className="gallery-subtitle-modern">
              Nos plus beaux souvenirs en images
            </p>
          </div>
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="gallery-upload-btn-modern"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {showUploadForm ? (
                <path d="M18 6L6 18M6 6l12 12"/>
              ) : (
                <>
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </>
              )}
            </svg>
            <span>{showUploadForm ? 'Annuler' : 'Ajouter une photo'}</span>
          </button>
        </div>

        {/* Formulaire d'upload moderne */}
        {showUploadForm && (
          <div className="gallery-upload-form-modern">
            <div className="upload-form-header">
              <h3>Partager un souvenir</h3>
              <p>Ajoutez une photo pour immortaliser ce moment</p>
            </div>
            <div className="upload-form-content">
              <div className="upload-file-area">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  disabled={uploading}
                  id="gallery-file-input"
                  className="upload-file-input"
                />
                <label htmlFor="gallery-file-input" className="upload-file-label">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <span className="upload-file-text">
                    {uploading ? 'Upload en cours...' : 'Cliquez ou glissez une image ici'}
                  </span>
                </label>
              </div>
              <div className="upload-form-fields">
                <div className="upload-field">
                  <label>Titre (optionnel)</label>
                  <input
                    ref={titleInputRef}
                    type="text"
                    placeholder="Ex: Moment magique"
                    className="upload-input"
                  />
                </div>
                <div className="upload-field">
                  <label>Description (optionnelle)</label>
                  <input
                    ref={descriptionInputRef}
                    type="text"
                    placeholder="Ex: Un souvenir inoubliable"
                    className="upload-input"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grille de photos moderne */}
        <div className="gallery-grid-modern">
          {gallery.map((item, index) => {
            const isUploaded = index >= baseGalleryLength;
            return (
              <div
                key={index}
                className="gallery-item-modern"
                style={{ '--item-index': index } as React.CSSProperties}
              >
                <div className="gallery-item-inner">
                  <div className="gallery-item-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="gallery-item-image"
                      loading="lazy"
                    />
                    <div className="gallery-item-overlay"></div>
                    {isUploaded && (
                      <button
                        className="gallery-item-delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (window.confirm('Êtes-vous sûr de vouloir supprimer cette photo ?')) {
                            onRemovePhoto(index - baseGalleryLength);
                          }
                        }}
                        aria-label="Supprimer la photo"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    )}
                  </div>
                  <div className="gallery-item-content">
                    <h4 className="gallery-item-title">{item.title}</h4>
                    <p className="gallery-item-description">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Vidéos */}
        <div className="gallery-videos-section">
          <h3 className="gallery-videos-title">Vidéos</h3>
          <div className="gallery-videos-grid">
            {videos.map((video, index) => (
              <div
                key={index}
                className="gallery-video-item"
                onClick={() => onVideoClick(video.video)}
                style={{ '--video-index': index } as React.CSSProperties}
              >
                <div className="video-item-image-wrapper">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="video-item-image"
                    loading="lazy"
                  />
                  <div className="video-item-overlay"></div>
                  <div className="video-play-button">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="video-item-content">
                  <h4 className="video-item-title">{video.title}</h4>
                  <p className="video-item-description">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

