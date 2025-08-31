import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon, 
  onClick, 
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violetDeep focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-violetDeep text-white hover:bg-violet-700 shadow-lg hover:shadow-xl',
    secondary: 'glass-effect text-ink border border-white/20 hover:bg-white/20',
    ghost: 'text-violetDeep hover:bg-violetLight/20'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}
    </motion.button>
  );
}