import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { SITE, MONOGRAM } from '../../data/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-ink via-ink/95 to-ink/90 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-violetLight/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-roseViolet/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Couple Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-violetLight to-roseViolet rounded-full flex items-center justify-center text-ink font-serif text-lg font-semibold mr-3">
                {MONOGRAM}
              </div>
              <h3 className="font-serif text-2xl font-light">Frédéric & Priscille</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Nous sommes ravis de partager ce moment spécial avec vous. 
              Votre présence rendra notre journée encore plus mémorable.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-violetLight/20 rounded-full flex items-center justify-center"
              >
                <Heart className="w-5 h-5 text-violetLight" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="font-serif text-xl font-semibold mb-6">Détails de l'Événement</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Calendar className="w-5 h-5 text-violetLight" />
                <span className="text-white/80">
                  {new Date(SITE.dateISO).toLocaleDateString('fr-FR', { 
                    weekday: 'long',
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-violetLight" />
                <span className="text-white/80">{SITE.venue}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-violetLight" />
                <span className="text-white/80">{SITE.city}</span>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="font-serif text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 text-violetLight" />
                <a 
                  href={`mailto:${SITE.contact.email}`}
                  className="text-white/80 hover:text-violetLight transition-colors duration-300"
                >
                  {SITE.contact.email}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-violetLight" />
                <a 
                  href={`tel:${SITE.contact.phone}`}
                  className="text-white/80 hover:text-violetLight transition-colors duration-300"
                >
                  {SITE.contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-violetLight/30 to-transparent mb-8"
        />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/60 text-sm">
            © {currentYear} Frédéric & Priscille. Tous droits réservés.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Fait avec ❤️ pour célébrer notre amour
          </p>
        </motion.div>
      </div>
    </footer>
  );
}