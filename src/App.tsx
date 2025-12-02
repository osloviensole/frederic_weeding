import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import CeremonyLocations from './components/CeremonyLocations';
import WeddingProgram from './components/WeddingProgram';
import RSVPInvitation from './components/RSVPInvitation';
import Events from './components/Events';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import { siteData, GalleryItem } from './data/weddingData';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [existingPhotos, setExistingPhotos] = useState<GalleryItem[]>([]);
  const [uploadedPhotos, setUploadedPhotos] = useState<GalleryItem[]>([]);

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

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}
      {!showSplash && (
        <>
          <Header />
          <main>
            <Hero />
            <Story storyData={siteData.story} />
            <CeremonyLocations />
            <WeddingProgram />
            <RSVPInvitation />
            <Events events={siteData.events} />
            <Gallery
              gallery={allGalleryItems}
              onAddPhoto={handleAddPhoto}
              onRemovePhoto={handleRemovePhoto}
              uploadedPhotosCount={uploadedPhotos.length}
              existingPhotosCount={existingPhotos.length}
            />
            <RSVP />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
