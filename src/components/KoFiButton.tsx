import React from 'react';

const CornerAccent = ({ position }: { position: string }) => (
  <div className={`absolute ${position} w-3 h-3 border-[#29abe0]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
);

export default function KoFiButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="https://ko-fi.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group cursor-pointer inline-block select-none ${className}`}
      style={{ minWidth: 0 }}
    >
      <button
        className="relative overflow-hidden bg-transparent border-0 rounded-xl px-8 py-4 text-lg font-bold text-white transition-all duration-500 group-hover:scale-105"
        style={{ minWidth: 0 }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#29abe0]/30 via-[#29abe0]/20 to-transparent backdrop-blur-xl rounded-xl" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#29abe0]/20 via-transparent to-white/10 rounded-xl" />
        
        {/* Border */}
        <div className="absolute inset-0 rounded-xl border border-[#29abe0]/60 group-hover:border-[#29abe0] transition-all duration-500" />
        <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-500" />
        
        {/* Traveling Line Animation */}
        <div className="absolute inset-0 rounded-xl opacity-10 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60">
            <rect
              x="1"
              y="1"
              width="198"
              height="58"
              rx="11"
              ry="11"
              fill="none"
              stroke="url(#kofiButtonGlow)"
              strokeWidth="2"
              strokeDasharray="20 140"
              className="animate-button-dash"
              filter="url(#buttonGlowFilterKofi)"
            />
            <defs>
              <linearGradient id="kofiButtonGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="30%" stopColor="#29abe0" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#29abe0" stopOpacity="1" />
                <stop offset="70%" stopColor="#29abe0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <filter id="buttonGlowFilterKofi" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
        
        {/* Glint Effect */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full h-full animate-button-glint group-hover:animate-button-glint-intense"
            style={{
              background: 'linear-gradient(110deg, transparent 20%, #29abe0cc 45%, #fff 50%, #29abe0cc 55%, transparent 80%)',
              transform: 'translateX(-150%) skewX(-20deg)',
              width: '150%'
            }}
          />
        </div>
        
        {/* Glow Effects */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-xl" style={{ background: '#29abe0', opacity: 0.08, filter: 'blur(8px)' }} />
          <div className="absolute -inset-1 rounded-xl" style={{ background: '#29abe0', opacity: 0.06, filter: 'blur(16px)' }} />
          <div className="absolute -inset-2 rounded-xl" style={{ background: '#29abe0', opacity: 0.04, filter: 'blur(32px)' }} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center gap-3">
          <img 
            src={import.meta.env.BASE_URL + 'kofi_logo.png'}
            width="24" 
            height="24"
            className="flex-shrink-0"
          />
          <span 
            className="text-[#29abe0] group-hover:text-white transition-colors duration-300 font-bold"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 8px #29abe055'
            }}
          >
            Coming Soon
          </span>
        </div>
        {/* Corner Accents */}
        <CornerAccent position="top-2 left-2 border-l border-t" />
        <CornerAccent position="top-2 right-2 border-r border-t" />
        <CornerAccent position="bottom-2 left-2 border-l border-b" />
        <CornerAccent position="bottom-2 right-2 border-r border-b" />
      </button>
    </a>
  );
}
