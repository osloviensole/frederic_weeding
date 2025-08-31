import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Send, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  attending: 'yes' | 'no' | '';
  guests: number;
  allergies: string;
  message: string;
}

export function RSVPForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    attending: '',
    guests: 1,
    allergies: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    if (!formData.attending) newErrors.attending = 'Veuillez confirmer votre présence';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Save to localStorage (mock backend)
      localStorage.setItem('rsvp-data', JSON.stringify(formData));
      setIsSubmitted(true);
    }
  };

  const handleChange = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <Card className="max-w-md mx-auto">
          <Check className="mx-auto mb-4 text-green-500" size={48} />
          <h2 className="font-serif text-2xl text-ink mb-4">Merci !</h2>
          <p className="text-inkSecondary">
            Votre réponse a été enregistrée. Nous avons hâte de célébrer avec vous !
          </p>
        </Card>
      </motion.div>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <h2 className="font-serif text-3xl text-ink mb-6 text-center">Confirmez votre présence</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-ink mb-2">
              Nom complet *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-violetDeep transition-all ${
                errors.name ? 'border-red-300' : 'border-violetLight/30'
              }`}
              placeholder="Votre nom"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-violetDeep transition-all ${
                errors.email ? 'border-red-300' : 'border-violetLight/30'
              }`}
              placeholder="votre@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-violetLight/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-violetDeep transition-all"
            placeholder="+33 6 12 34 56 78"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-4">
            Présence *
          </label>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: 'yes', label: 'Oui, je serai présent(e)', icon: '✓' },
              { value: 'no', label: 'Non, je ne pourrai pas venir', icon: '✗' }
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleChange('attending', option.value)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  formData.attending === option.value
                    ? 'border-violetDeep bg-violetLight/20 text-violetDeep'
                    : 'border-violetLight/30 bg-white/50 text-ink hover:border-violetLight'
                }`}
              >
                <span className="text-2xl mb-2 block">{option.icon}</span>
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            ))}
          </div>
          {errors.attending && <p className="text-red-500 text-sm mt-1">{errors.attending}</p>}
        </div>

        {formData.attending === 'yes' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-sm font-medium text-ink mb-2">
              Nombre d'invités (vous inclus)
            </label>
            <select
              value={formData.guests}
              onChange={(e) => handleChange('guests', parseInt(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-violetLight/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-violetDeep transition-all"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num} personne{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </motion.div>
        )}

        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            Allergies ou régimes particuliers
          </label>
          <textarea
            value={formData.allergies}
            onChange={(e) => handleChange('allergies', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-violetLight/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-violetDeep transition-all"
            rows={3}
            placeholder="Mentionnez toute allergie ou préférence alimentaire..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            Message pour les mariés
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-violetLight/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-violetDeep transition-all"
            rows={4}
            placeholder="Laissez-nous un petit mot..."
          />
        </div>

        <Button 
          type="submit" 
          size="lg" 
          icon={Send} 
          className="w-full"
        >
          Envoyer ma réponse
        </Button>
      </form>
    </Card>
  );
}