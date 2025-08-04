import { ReactNode } from 'react';

interface CyberButtonProps {
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

interface VariantConfig {
  bg: string;
  bg2: string;
  border: string;
  border2: string;
  border3?: string;
  glow: string;
  glow2: string;
  glow3: string;
  glow4?: string;
  glow5?: string;
  glow6?: string;
  text: string;
  gradient: string;
  cornerColor: string;
}

const CyberButton = ({ 
  onClick, 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: CyberButtonProps) => {
  const sizeClasses = {
    sm: 'px-6 py-3 text-base',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl'
  };

  const variantClasses: Record<string, VariantConfig> = {
    primary: {
      bg: 'from-cyber-glow/20 via-cyber-glow/15 to-transparent',
      bg2: 'from-cyber-glow/20 via-transparent to-white/10',
      border: 'border-cyber-glow/50 group-hover:border-cyber-glow/100',
      border2: 'border-white/10 group-hover:border-white/20',
      glow: 'bg-cyber-glow/8',
      glow2: 'bg-cyber-glow/6',
      glow3: 'bg-cyber-glow/4',
      text: 'text-cyber-glow group-hover:text-white',
      gradient: 'rgb(0, 255, 191)',
      cornerColor: 'border-cyber-glow/50'
    },
    secondary: {
      bg: 'from-white/5 via-cyber-secondary-glow/5 to-transparent',
      bg2: 'from-cyber-secondary-glow/3 via-transparent to-white/3',
      border: 'border-cyber-secondary-glow/30 group-hover:border-cyber-secondary-glow/60',
      border2: 'border-white/8 group-hover:border-white/15',
      glow: 'bg-cyber-secondary-glow/6',
      glow2: 'bg-cyber-secondary-glow/4',
      glow3: 'bg-cyber-secondary-glow/3',
      text: 'text-cyber-secondary-glow group-hover:text-white',
      gradient: 'rgb(12, 139, 97)',
      cornerColor: 'border-cyber-secondary-glow/40'
    },
    cta: {
      bg: 'from-cyber-glow/25 via-cyber-secondary-glow/20 to-transparent',
      bg2: 'from-cyber-secondary-glow/15 via-transparent to-cyber-glow/10',
      border: 'border-cyber-glow/60 group-hover:border-cyber-glow/100',
      border2: 'border-cyber-secondary-glow/40 group-hover:border-cyber-secondary-glow/80',
      border3: 'border-white/15 group-hover:border-white/25',
      glow: 'bg-cyber-glow/12',
      glow2: 'bg-cyber-secondary-glow/8',
      glow3: 'bg-cyber-glow/8',
      glow4: 'bg-cyber-secondary-glow/6',
      glow5: 'bg-cyber-glow/5',
      glow6: 'bg-cyber-secondary-glow/4',
      text: 'text-cyber-glow group-hover:text-white',
      gradient: 'rgb(0, 255, 191)',
      cornerColor: 'border-cyber-glow/60'
    }
  };

  const config = variantClasses[variant];

  return (
    <div className={`relative group cursor-pointer ${className}`}>
      <button 
        onClick={onClick}
        className={`relative overflow-hidden bg-transparent border-0 rounded-xl font-bold text-white transition-all duration-500 group-hover:scale-105 ${sizeClasses[size]}`}
      >
        {/* Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${config.bg} backdrop-blur-xl rounded-xl`} />
        <div className={`absolute inset-0 bg-gradient-to-tl ${config.bg2} rounded-xl`} />
        
        {/* Border */}
        <div className={`absolute inset-0 rounded-xl border ${config.border} transition-all duration-500`} />
        <div className={`absolute inset-0 rounded-xl border ${config.border2} transition-all duration-500`} />
        {config.border3 && (
          <div className={`absolute inset-0 rounded-xl border ${config.border3} transition-all duration-500`} />
        )}
        
        {/* Glow Effects */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className={`absolute inset-0 rounded-xl ${config.glow} blur-lg`} />
          <div className={`absolute -inset-1 rounded-xl ${config.glow2} blur-xl`} />
          <div className={`absolute -inset-2 rounded-xl ${config.glow3} blur-2xl`} />
          {config.glow4 && config.glow5 && config.glow6 && (
            <>
              <div className={`absolute inset-0 rounded-xl ${config.glow4} blur-lg`} />
              <div className={`absolute -inset-1 rounded-xl ${config.glow5} blur-xl`} />
              <div className={`absolute -inset-2 rounded-xl ${config.glow6} blur-2xl`} />
            </>
          )}
        </div>
        
        {/* Content */}
        <div className={`relative z-10 flex items-center gap-3 ${config.text} transition-colors duration-300`}>
          {children}
        </div>
        
        {/* Corner Accents */}
        <div className={`absolute top-2 left-2 w-3 h-3 border-l border-t ${config.cornerColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className={`absolute top-2 right-2 w-3 h-3 border-r border-t ${config.cornerColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className={`absolute bottom-2 left-2 w-3 h-3 border-l border-b ${config.cornerColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className={`absolute bottom-2 right-2 w-3 h-3 border-r border-b ${config.cornerColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </button>
    </div>
  );
};

export default CyberButton; 