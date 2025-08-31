import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'gradient' | 'white';
}

export function Section({ children, className = '', background = 'default' }: SectionProps) {
  const backgrounds = {
    default: '',
    gradient: 'bg-gradient-soft',
    white: 'bg-white'
  };

  return (
    <motion.section
      className={`py-16 px-4 ${backgrounds[background]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}