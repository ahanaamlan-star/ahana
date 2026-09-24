import React from 'react';

interface OverdoseLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withTagline?: boolean;
  monochrome?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
  onClick?: () => void;
}

export const OverdoseLogo: React.FC<OverdoseLogoProps> = ({
  size = 'md',
  withTagline = true,
  className = '',
  onClick,
}) => {
  const sizeClasses = {
    sm: 'w-[120px]',
    md: 'w-[155px] sm:w-[180px]',
    lg: 'w-[210px] sm:w-[240px]',
    xl: 'w-[270px] sm:w-[330px]',
  };

  const taglineSizeClasses = {
    sm: 'w-[140px]',
    md: 'w-[180px] sm:w-[220px]',
    lg: 'w-[230px] sm:w-[280px]',
    xl: 'w-[300px] sm:w-[360px]',
  };

  return (
    <div
      id="overdose-brand-logo"
      onClick={onClick}
      className={`inline-flex items-center justify-center select-none ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      <img
        src={
          withTagline
            ? "/assets/logo/overdose_logo_tagline.svg"
            : "/assets/logo/overdose_logo.svg"
        }
        alt="OVERDOSE"
        className={`h-auto object-contain transition-all duration-300 ${
          withTagline
            ? taglineSizeClasses[size]
            : sizeClasses[size]
        }`}
      />
    </div>
  );
};

export const OverdoseMonogram: React.FC<{
  size?: number;
  theme?: 'dark' | 'light';
  className?: string;
}> = ({ size = 54, className = '' }) => {
  return (
    <div
      id="overdose-seal-monogram"
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/assets/logo/overdose_monogram.svg"
        alt="OVERDOSE"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export const CuratedExcessStamp: React.FC<{
  size?: number;
  theme?: 'dark' | 'light';
  className?: string;
}> = ({ size = 96, className = '' }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/assets/logo/overdose_monogram.svg"
        alt="OVERDOSE"
        className="w-full h-full object-contain"
      />
    </div>
  );
};
