import { useState, FormEvent } from 'react';
import Swal from 'sweetalert2';
import { emailApiConfig } from '../config';

const RSVP = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Stocker la référence du formulaire pour éviter les problèmes avec e.currentTarget
    const form = e.currentTarget;
    if (!form) {
      console.error('Formulaire non trouvé');
      return;
    }
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
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
        sender_name: "FRED",
        organisation: "Mariage Frédéric & Priscille",
        sujet: "Confirmation de présence - RSVP Mariage",
        message: messageContent,
        noms: [data.name as string, data.name as string]
      };

      // S'assurer que l'URL a le slash final (requis par l'API)
      const apiUrl = emailApiConfig.url.endsWith('/') 
        ? emailApiConfig.url 
        : emailApiConfig.url + '/';
      
      console.log('Envoi vers:', apiUrl);
      console.log('Méthode: POST');
      console.log('Token:', emailApiConfig.token ? 'Présent' : 'Manquant');
      console.log('Payload:', apiPayload);
      
      // Préparer les headers
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${emailApiConfig.token}`,
        'Accept': 'application/json'
      };
      
      // Envoyer la requête à l'API avec une configuration stricte
      const fetchOptions: RequestInit = {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        headers: headers,
        body: JSON.stringify(apiPayload),
        cache: 'no-store',
        redirect: 'follow' // Suivre les redirections (la méthode POST devrait être préservée)
      };
      
      console.log('Options fetch:', { ...fetchOptions, headers: Object.fromEntries(Object.entries(headers)) });
      
      let response: Response;
      try {
        response = await fetch(apiUrl, fetchOptions);
      } catch (networkError) {
        // Erreur réseau (pas de réponse du serveur)
        console.error('Erreur réseau:', networkError);
        throw new Error('Erreur de connexion. Impossible de joindre le serveur. Veuillez vérifier votre connexion internet et réessayer.');
      }

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          // Si on ne peut pas parser le JSON, utiliser le statut HTTP
          errorData = { message: `Erreur ${response.status}: ${response.statusText}` };
        }
        
        // Messages d'erreur spécifiques selon le code de statut
        let errorMessage = errorData.message || errorData.detail || errorData.error || `Erreur ${response.status}: ${response.statusText}`;
        
        if (response.status === 502) {
          errorMessage = 'Le serveur est temporairement indisponible. Veuillez réessayer dans quelques instants.';
        } else if (response.status === 503) {
          errorMessage = 'Service temporairement indisponible. Veuillez réessayer plus tard.';
        } else if (response.status === 500) {
          errorMessage = 'Erreur interne du serveur. Veuillez réessayer ou contacter le support.';
        }
        
        console.error('Erreur API:', {
          status: response.status,
          statusText: response.statusText,
          url: apiUrl,
          errorData
        });
        throw new Error(errorMessage);
      }

      // Succès
      await response.json().catch(() => ({}));
      
      // Réinitialiser le formulaire seulement si il existe toujours
      if (form && form.reset) {
        form.reset();
      }
      
      await Swal.fire({
        icon: 'success',
        title: 'Merci !',
        text: 'Votre confirmation a été enregistrée avec succès.',
        confirmButtonColor: '#e50914',
        confirmButtonText: 'Parfait',
        timer: 5000,
        timerProgressBar: true
      });
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      
      let errorMessage = 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.';
      let errorTitle = 'Erreur d\'envoi';
      
      if (error instanceof Error) {
        errorMessage = error.message;
        
        // Messages spécifiques selon le type d'erreur
        if (error.message.includes('Failed to fetch') || 
            error.message.includes('NetworkError') || 
            error.message.includes('Erreur de connexion')) {
          errorTitle = 'Erreur de connexion';
          errorMessage = 'Impossible de se connecter au serveur. Vérifiez votre connexion internet et réessayez.';
        } else if (error.message.includes('502') || error.message.includes('indisponible')) {
          errorTitle = 'Serveur indisponible';
        } else if (error.message.includes('500')) {
          errorTitle = 'Erreur serveur';
        }
      }
      
      await Swal.fire({
        icon: 'error',
        title: errorTitle,
        text: errorMessage,
        confirmButtonColor: '#e50914',
        confirmButtonText: 'D\'accord',
        footer: 'Si le problème persiste, contactez-nous directement.'
      });
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

