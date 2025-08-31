import React from 'react';
import { Section } from '../components/ui/Section';
import { RSVPForm } from '../components/forms/RSVPForm';

export function RSVP() {
  return (
    <div className="pt-20">
      <Section background="gradient">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-light text-ink mb-4">
            RSVP
          </h1>
          <p className="text-xl text-inkSecondary max-w-2xl mx-auto">
            Votre présence est le plus beau des cadeaux. Merci de confirmer avant le 1er juin 2026.
          </p>
        </div>
        
        <RSVPForm />
      </Section>
    </div>
  );
}