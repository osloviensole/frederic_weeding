import React from 'react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Clock, MapPin, Camera, Music, Utensils, Heart } from 'lucide-react';
import { SITE } from '../data/site';

export function Day() {
  const schedule = [
    { time: '14:00', event: 'Accueil des invités', icon: Camera },
    { time: '14:30', event: 'Cérémonie civile', icon: Heart },
    { time: '15:30', event: 'Vin d\'honneur & photos', icon: Camera },
    { time: '18:00', event: 'Cocktail dînatoire', icon: Utensils },
    { time: '21:00', event: 'Ouverture du bal', icon: Music },
    { time: '02:00', event: 'Fin de soirée', icon: Clock }
  ];

  return (
    <div className="pt-20">
      <Section background="gradient">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-light text-ink mb-4">
            Le Jour J
          </h1>
          <p className="text-xl text-inkSecondary max-w-2xl mx-auto">
            Découvrez le programme de notre journée de mariage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Programme */}
          <div>
            <h2 className="font-serif text-3xl text-ink mb-8 text-center">Programme</h2>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <Card key={index} className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-violetLight/30 flex items-center justify-center mr-4">
                    <item.icon className="text-violetDeep" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-violetDeep">{item.time}</div>
                    <div className="text-ink">{item.event}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Lieu */}
          <div>
            <h2 className="font-serif text-3xl text-ink mb-8 text-center">Lieu</h2>
            <Card>
              <div className="flex items-start mb-4">
                <MapPin className="text-violetDeep mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-ink text-lg">{SITE.venue}</h3>
                  <p className="text-inkSecondary">{SITE.address}</p>
                  <p className="text-inkSecondary">{SITE.city}</p>
                </div>
              </div>
              
              <div className="aspect-video rounded-xl overflow-hidden mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.820!2d5.3699!3d43.2965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE3JzQ3LjQiTiA1wrAyMicxMS42IkU!5e0!3m2!1sen!2sfr!4v1620000000000!5m2!1sen!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}