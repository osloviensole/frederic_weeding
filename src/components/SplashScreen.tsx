import { useState, useEffect, useRef } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 500);
    };

    const activateSound = async () => {
      try {
        if (video.muted) {
          video.muted = false;
          setIsMuted(false);
          // S'assurer que la vidéo continue à jouer
          if (video.paused) {
            await video.play();
          }
        }
      } catch (error) {
        console.log('Activation du son échouée, tentative après interaction utilisateur');
      }
    };

    const tryPlayWithSound = async () => {
      try {
        video.muted = false;
        setIsMuted(false);
        await video.play();
      } catch (error) {
        // Si l'autoplay avec son est bloqué, démarrer en muet
        console.log('Autoplay avec son bloqué, démarrage en muet');
        video.muted = true;
        setIsMuted(true);
        try {
          await video.play();
        } catch (playError) {
          console.error('Erreur lors de la lecture:', playError);
        }
      }
    };

    const handleCanPlay = async () => {
      await tryPlayWithSound();
    };

    const handleLoadedData = async () => {
      await tryPlayWithSound();
    };

    const handleUserInteraction = async () => {
      await activateSound();
      // Retirer les listeners après la première interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    const handleError = () => {
      console.error('Erreur de chargement de la vidéo');
      // En cas d'erreur, passer directement au contenu après un court délai
      setTimeout(handleVideoEnd, 1000);
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Écouter les interactions utilisateur pour activer le son
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('keydown', handleUserInteraction, { once: true });

    // Essayer de démarrer la vidéo immédiatement
    if (video.readyState >= 2) {
      handleLoadedData();
    } else {
      // Si pas encore prêt, attendre le chargement
      video.load();
    }

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`splash-screen ${isFading ? 'fading' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10000,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.5s ease-out'
      }}
    >
      <video
        ref={videoRef}
        src="/video/netflix.mp4"
        autoPlay
        playsInline
        muted={isMuted}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
    </div>
  );
};

export default SplashScreen;

