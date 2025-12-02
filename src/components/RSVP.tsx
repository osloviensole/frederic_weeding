import { useState, FormEvent } from 'react';
import { emailApiConfig } from '../config';

const RSVP = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Réinitialiser les messages d'erreur
    setShowError(false);
    setErrorMessage('');
    setIsSubmitting(true);
    
    try {
      // Construire le message avec toutes les informations du formulaire
      const messageContent = `
Nom: ${data.name}
Email: ${data.email}
Présence: ${data.attendance === 'yes' ? 'Oui, avec plaisir !' : 'Non, malheureusement'}
Nombre de personnes: ${data.guests || 'Non spécifié'}
${data.message ? `Message: ${data.message}` : ''}
      `.trim();

      // Préparer les données pour l'API
      const apiPayload = {
        sender_email: data.email as string,
        sender_name: data.name as string,
        organisation: "Mariage Frédéric & Priscille",
        sujet: "Confirmation de présence - RSVP Mariage",
        message: messageContent,
        noms: [data.name as string, data.name as string]
      };

      // Envoyer la requête à l'API
      const response = await fetch(emailApiConfig.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${emailApiConfig.token}`
        },
        body: JSON.stringify(apiPayload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Erreur ${response.status}: ${response.statusText}`);
      }

      // Succès
      setShowSuccess(true);
      e.currentTarget.reset();
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
      e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
      setShowError(true);
      
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
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
          {showError && (
            <div className="form-error" role="alert" style={{ 
              padding: '12px 16px', 
              backgroundColor: '#ff4444', 
              color: 'white', 
              borderRadius: '4px', 
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              ✗ {errorMessage || 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.'}
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

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', justifyContent: 'center' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma confirmation'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;

