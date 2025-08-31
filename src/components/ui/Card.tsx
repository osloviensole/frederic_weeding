import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = false, onClick }: CardProps) {
  const Component = onClick ? motion.button : motion.div;
  
  return (
    <Component
      className={`glass-effect rounded-2xl p-6 shadow-lg ${hover ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </Component>
  );
}