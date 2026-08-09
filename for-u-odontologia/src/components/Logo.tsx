import React from 'react';
import { clinicConfig } from '../config/clinic';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md'
}) => {
  // Height mappings for image strictly using object-contain to preserve proportions
  const sizeClasses = {
    sm: 'h-10 md:h-12',
    md: 'h-14 md:h-18',
    lg: 'h-24 md:h-32',
    xl: 'h-40 sm:h-52 md:h-64 lg:h-72',
  };

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src="/images/logo-foru.png"
        alt={clinicConfig.name}
        className={`w-auto object-contain transition-transform duration-300 ${sizeClasses[size]}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

