import { ReactNode } from 'react';

interface GlowIconProps {
  icon: ReactNode;
  size?: number;
  className?: string;
  glowColor?: string;
}

const GlowIcon = ({ icon, size = 48, className = '', glowColor = 'cyber-glow' }: GlowIconProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className={`relative z-10 text-${glowColor}`}>
        {icon}
      </div>
      <div className={`absolute inset-0 text-${glowColor} opacity-50 blur-lg`}>
        {icon}
      </div>
      <div className={`absolute inset-0 text-${glowColor} opacity-30 blur-xl`}>
        {icon}
      </div>
    </div>
  );
};

export default GlowIcon; 