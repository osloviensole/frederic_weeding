const RSVPInvitation = () => {
  const handleRSVPClick = () => {
    const rsvpSection = document.getElementById('rsvp');
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="rsvp-invitation" className="rsvp-invitation-section" aria-labelledby="rsvp-invitation-title">
      <div className="rsvp-invitation-container">
        {/* Encadré doré avec bouton CTA */}
        <div className="rsvp-cta-box" onClick={handleRSVPClick}>
          <div className="rsvp-cta-content">
            <p className="rsvp-cta-text-upper">MERCI DE CONFIRMER</p>
            <p className="rsvp-cta-text-lower">VOTRE PRÉSENCE EN CLIQUANT ICI</p>
          </div>
        </div>

        {/* Section de demande de confirmation */}
        <div className="rsvp-confirmation-request">
          <p className="rsvp-request-text">
            NOUS VOUS SERIONS INFINIMENT RECONNAISSANTS DE
          </p>
          <p className="rsvp-request-text">
            BIEN VOULOIR NOUS CONFIRMER VOTRE PRÉSENCE AVANT
          </p>
        </div>

        {/* Date limite en vert */}
        <div className="rsvp-deadline">
          <p className="rsvp-deadline-text">LE 11 DECEMBRE 2025</p>
        </div>

        {/* Politique concernant les enfants */}
        <div className="rsvp-children-policy">
          <p className="rsvp-policy-text">
            NOUS AIMONS BEAUCOUP LES ENFANTS ET LES VÔTRES EN
          </p>
          <p className="rsvp-policy-text">
            PARTICULIER, MAIS POUR DES RAISONS DE SÉCURITÉ, LES
          </p>
          <p className="rsvp-policy-text">
            ENFANTS NE SONT PAS CONVIÉS.
          </p>
          <p className="rsvp-policy-text">
            MERCI DE VOTRE COMPRÉHENSION.
          </p>
        </div>

        {/* Informations de contact */}
        <div className="rsvp-contact-info">
          <p className="rsvp-contact-item">Michael – +243 827 161 088</p>
          <p className="rsvp-contact-item">Jordan – +243 820 805 239</p>
        </div>
      </div>
    </section>
  );
};

export default RSVPInvitation;


