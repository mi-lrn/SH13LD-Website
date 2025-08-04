import { Download } from 'lucide-react';

interface DownloadButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CornerAccent = ({ position }: { position: string }) => (
  <div className={`absolute ${position} w-4 h-4 border-cyber-glow/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
);

const DownloadButton = ({ href, children, className = '' }: DownloadButtonProps) => {
  return (
    <a
      href={href}
      download
      className={`relative flex items-center justify-center w-full h-16 px-10 rounded-2xl bg-gradient-to-br from-cyber-glow/30 via-cyber-secondary-glow/20 to-transparent border border-cyber-glow/60 shadow-2xl hover:scale-105 active:scale-98 transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyber-glow/60 ${className}`}
      style={{ minWidth: 0 }}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyber-glow/20 via-cyber-secondary-glow/10 to-white/5 pointer-events-none" />
      <div className="absolute inset-0 rounded-2xl border border-cyber-glow/40 group-hover:border-cyber-glow/90 transition-all duration-300 pointer-events-none" />
      
      {/* Animated Glint */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full animate-button-glint group-hover:animate-button-glint-intense"
          style={{
            background: 'linear-gradient(110deg, transparent 20%, #00ffbfcc 45%, #fff 50%, #00ffbfcc 55%, transparent 80%)',
            transform: 'translateX(-150%) skewX(-20deg)',
            width: '150%'
          }}
        />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-cyber-glow/10 blur-lg" />
        <div className="absolute -inset-1 rounded-2xl bg-cyber-glow/8 blur-xl" />
        <div className="absolute -inset-2 rounded-2xl bg-cyber-glow/6 blur-2xl" />
      </div>
      
      {/* Content */}
      <span className="flex items-center justify-center mr-2 sm:mr-3 md:mr-4">
        <Download className="text-cyber-glow group-hover:text-white transition-colors duration-300 group-hover:animate-bounce w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </span>
      
      <span className="font-extrabold text-sm sm:text-lg md:text-2xl text-cyber-glow group-hover:text-white transition-colors duration-300 tracking-wide drop-shadow-lg text-center leading-tight">
        {children}
      </span>
      
      {/* Corner Accents */}
      <CornerAccent position="top-2 left-2 border-l-2 border-t-2" />
      <CornerAccent position="top-2 right-2 border-r-2 border-t-2" />
      <CornerAccent position="bottom-2 left-2 border-l-2 border-b-2" />
      <CornerAccent position="bottom-2 right-2 border-r-2 border-b-2" />
    </a>
  );
};


export default DownloadButton; 
