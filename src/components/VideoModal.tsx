import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  videoId: string | null;
  onClose: () => void;
}

const VideoModal = ({ isOpen, videoId, onClose }: VideoModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoId) return null;

  const videoSource = `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`;

  return (
    <div
      className={`modal ${isOpen ? 'active' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-content">
        <button
          className="modal-close"
          aria-label="Fermer"
          onClick={onClose}
        >
          ×
        </button>
        <h2 id="modal-title" className="visually-hidden">Lecture vidéo</h2>
        <video className="modal-video" controls autoPlay>
          <source src={videoSource} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;

