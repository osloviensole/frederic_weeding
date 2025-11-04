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

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [existingPhotos, setExistingPhotos] = useState<GalleryItem[]>([]);
  const [uploadedPhotos, setUploadedPhotos] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Charger toutes les photos depuis le serveur au démarrage
  useEffect(() => {
    const loadPhotos = async () => {
      try {
        // Charger les photos existantes du dossier image
        const existingResponse = await fetch('/api/existing-photos');
        if (existingResponse.ok) {
          const existing = await existingResponse.json();
          setExistingPhotos(existing);
        }

        // Charger les photos uploadées
        const uploadedResponse = await fetch('/api/photos');
        if (uploadedResponse.ok) {
          const uploaded = await uploadedResponse.json();
          setUploadedPhotos(uploaded);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des photos:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPhotos();
  }, []);

  // Fonction pour ajouter une photo à la galerie
  const handleAddPhoto = async (photo: GalleryItem & { filename?: string }) => {
    setUploadedPhotos(prev => [...prev, photo]);
  };

  // Fonction pour supprimer une photo de la galerie
  const handleRemovePhoto = async (index: number) => {
    const photoToRemove = uploadedPhotos[index];
    const filename = (photoToRemove as any).filename || photoToRemove.image.split('/').pop();
    
    try {
      const response = await fetch(`/api/delete-photo/${filename}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setUploadedPhotos(prev => prev.filter((_, i) => i !== index));
      } else {
        console.error('Erreur lors de la suppression de la photo');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  // Combiner toutes les photos : existantes + uploadées
  const allGalleryItems = [...existingPhotos, ...uploadedPhotos];

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
              existingPhotosCount={existingPhotos.length}
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
