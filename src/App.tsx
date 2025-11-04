import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Hero from './components/Hero';
import Story from './components/Story';
import CeremonyLocations from './components/CeremonyLocations';
import WeddingProgram from './components/WeddingProgram';
import WeddingProgramDetails from './components/WeddingProgramDetails';
import Events from './components/Events';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import { siteData, GalleryItem } from './data/weddingData';

const STORAGE_KEY = 'wedding_gallery_uploaded';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [uploadedPhotos, setUploadedPhotos] = useState<GalleryItem[]>([]);

  // Charger les photos uploadées depuis localStorage au démarrage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setUploadedPhotos(JSON.parse(stored));
      } catch (e) {
        console.error('Erreur lors du chargement des photos:', e);
      }
    }
  }, []);

  // Fonction pour ajouter une photo à la galerie
  const handleAddPhoto = (photo: GalleryItem) => {
    const newPhotos = [...uploadedPhotos, photo];
    setUploadedPhotos(newPhotos);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPhotos));
  };

  // Fonction pour supprimer une photo de la galerie
  const handleRemovePhoto = (index: number) => {
    const newPhotos = uploadedPhotos.filter((_, i) => i !== index);
    setUploadedPhotos(newPhotos);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPhotos));
  };

  // Combiner les photos de base avec les photos uploadées
  const allGalleryItems = [...siteData.gallery, ...uploadedPhotos];

  const handleVideoClick = (videoId: string) => {
    setCurrentVideoId(videoId);
    setVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setVideoModalOpen(false);
    setCurrentVideoId(null);
  };

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}
      {!showSplash && (
        <>
          <main>
            <Hero />
            <Story storyData={siteData.story} onVideoClick={handleVideoClick} />
            <CeremonyLocations />
            <WeddingProgram onVideoClick={handleVideoClick} />
            <WeddingProgramDetails />
            <Events events={siteData.events} />
            <Gallery
              gallery={allGalleryItems}
              videos={siteData.videos}
              onVideoClick={handleVideoClick}
              onAddPhoto={handleAddPhoto}
              onRemovePhoto={handleRemovePhoto}
              uploadedPhotosCount={uploadedPhotos.length}
            />
            <RSVP />
          </main>
          <Footer />
          <VideoModal
            isOpen={videoModalOpen}
            videoId={currentVideoId}
            onClose={handleCloseModal}
          />
        </>
      )}
    </>
  );
}

export default App;
