const RSVPInvitation = () => {
  return (
    <section id="rsvp-invitation" className="rsvp-invitation-section" aria-labelledby="rsvp-invitation-title">
      <div className="rsvp-invitation-container">
        {/* Section de demande de confirmation */}
        <div className="rsvp-confirmation-request">
          <p className="rsvp-request-text">
            Nous vous serions infiniment reconnaissants de
          </p>
          <p className="rsvp-request-text">
            bien vouloir nous confirmer votre présence avant
          </p>
        </div>

        {/* Date limite en vert */}
        <div className="rsvp-deadline">
          <p className="rsvp-deadline-text">LE 11 DECEMBRE 2025</p>
        </div>
      </div>
    </section>
  );
};

export default RSVPInvitation;


