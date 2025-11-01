import { useState } from 'react';
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
import { siteData } from './data/weddingData';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);

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
            <Hero onVideoClick={handleVideoClick} />
            <Story storyData={siteData.story} onVideoClick={handleVideoClick} />
            <CeremonyLocations />
            <WeddingProgram onVideoClick={handleVideoClick} />
            <WeddingProgramDetails />
            <Events events={siteData.events} />
            <Gallery
              gallery={siteData.gallery}
              videos={siteData.videos}
              onVideoClick={handleVideoClick}
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
