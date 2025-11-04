import { useState, useEffect } from 'react';
import MomentsCles from './MomentsCles';
import { StoryItem } from '../data/weddingData';

interface StoryProps {
  storyData: StoryItem[];
  onVideoClick?: (videoId: string) => void;
}

const Story = ({ storyData, onVideoClick }: StoryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('');
  
  const invitationImages = [
    '/image/pi_2.jpg',
    '/image/pi_3.jpg',
    '/image/pi_4.jpg',
    '/image/pi_5.JPEG'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % invitationImages.length);
        setFadeClass('fade-in');
        setTimeout(() => setFadeClass(''), 800);
      }, 400);
    }, 4000); // Change d'image toutes les 4 secondes

    return () => clearInterval(interval);
  }, [invitationImages.length]);

  const handleRSVPClick = () => {
    const element = document.getElementById('rsvp');
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="story" className="section invitation-section" aria-labelledby="story-title">
      <div className="invitation-container">
        <div className="invitation-image-wrapper">
          <img
            key={currentImageIndex}
            src={invitationImages[currentImageIndex]}
            alt="Frédéric et Priscille"
            className={`invitation-image ${fadeClass}`}
          />
          <div className="invitation-vignette"></div>
          <div className="invitation-carousel-indicators">
            {invitationImages.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="invitation-content">
          <h2 className="invitation-title">Oui pour la vie!</h2>
          <div className="invitation-message">
            <p>VOUS ÊTES CONVIÉ À NOTRE MARIAGE DANS</p>
            <p>LA MAGIE D'UNE FIN D'ANNÉE,</p>
            <p>
              NOUS UNIRONS NOS VIES LE <span className="highlight-date">27 DÉCEMBRE 2025</span>,
            </p>
            <p>ENTOURÉS DE CEUX QUI NOUS SONT CHERS,</p>
            <p>DANS UNE CÉLÉBRATION D'AMOUR, DE</p>
            <p>CULTURE ET DE LUMIÈRE..</p>
          </div>
          <div className="invitation-details">
            <div className="invitation-detail-item">
              <span>100% Party Vibes</span>
              <span className="sparkle-icon">✨</span>
            </div>
            <div className="invitation-detail-item">
              <span>27 décembre 2025</span>
            </div>
          </div>
          <button className="invitation-rsvp-btn" onClick={handleRSVPClick}>
            <span className="play-icon">▶</span>
            <span>RSVP dès maintenant</span>
          </button>
        </div>
      </div>

      <div className="story-text-section">
        <div className="section-header">
          <h2 className="section-title text-center">Notre Histoire</h2>
        </div>

        <div className="story-content-wrapper">
          <div className="story-content">
            <h3 className="story-subtitle">Une Rencontre Magique</h3>
            <div className="story-text">
              <p>
                Pendant que le monde entier était à l'arrêt, une rencontre inattendue se préparait… C'était en plein confinement, durant la période du Covid-19. Un simple groupe WhatsApp créé pour partager des pensées bibliques est devenu le début d'une belle histoire.
              </p>
              <p>
                C'est là que Frédéric a remarqué Priscille. Elle, de son côté, se souvient d'un audio qu'elle avait envoyé dans le groupe pour préparer une Tour de Garde en ligne… et de ce moment où lui, intrigué, a osé lui écrire en privé. La réponse fut brève : « SALUT, C'EST QUI SVP ? »
              </p>
              <p>
                Après plusieurs semaines de discussions et d'échanges sincères, le 20 août 2020, ils se sont enfin rencontrés pour la première fois. Depuis ce jour, leur histoire s'est écrite à deux, partageant visites touristiques, moments d'étude, défis, fous rires… et même quelques disputes !
              </p>
              <p className="story-conclusion">
                Le 27 décembre 2025, nous unirons nos vies dans la joie et la célébration, entourés de notre famille et de nos amis les plus proches.
              </p>
            </div>
          </div>
        </div>
      </div>

      <MomentsCles moments={storyData} onVideoClick={onVideoClick} />
    </section>
  );
};

export default Story;

