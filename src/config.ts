// Configuration de l'API d'envoi d'emails
// Utilise les variables d'environnement avec des valeurs par défaut
export const emailApiConfig = {
  url: import.meta.env.VITE_EMAIL_API_URL || 'https://saas.jiwe-holding.online/api/mailer/send-email',
  token: import.meta.env.VITE_EMAIL_API_TOKEN || '0cda37712f67c6a5417578f74b619eddc0fe8906'
};

