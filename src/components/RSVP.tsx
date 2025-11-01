import { useState, FormEvent } from 'react';

const RSVP = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    console.log('RSVP Data:', data);
    
    setShowSuccess(true);
    e.currentTarget.reset();
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
    
    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="rsvp" className="section" aria-labelledby="rsvp-title">
      <div className="section-header" style={{ textAlign: 'center', maxWidth: 'none' }}>
        <h2 id="rsvp-title" className="section-title">Confirmez votre présence</h2>
        <p className="section-description" style={{ margin: '0 auto' }}>
          Nous serions ravis de vous compter parmi nous
        </p>
      </div>

      <div className="rsvp-container">
        <form id="rsvp-form" aria-label="Formulaire de confirmation" onSubmit={handleSubmit}>
          {showSuccess && (
            <div className="form-success" role="alert">
              ✓ Merci ! Votre confirmation a été enregistrée avec succès.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name" className="form-label">Nom complet *</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Serez-vous présent(e) ? *</label>
            <div className="form-radio-group" role="radiogroup" aria-required="true">
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  className="form-radio"
                  required
                />
                <span>Oui, avec plaisir !</span>
              </label>
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  className="form-radio"
                  required
                />
                <span>Non, malheureusement</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="guests" className="form-label">Nombre de personnes</label>
            <select id="guests" name="guests" className="form-select">
              <option value="1">1 personne</option>
              <option value="2">2 personnes</option>
              <option value="3">3 personnes</option>
              <option value="4">4 personnes</option>
              <option value="5">5+ personnes</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message (optionnel)</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Partagez vos souhaits ou préférences alimentaires..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Envoyer ma confirmation
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;

