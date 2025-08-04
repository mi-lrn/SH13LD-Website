import React from 'react';

const generateElements = (count: number, className: string, style: any) => 
  Array.from({ length: count }, (_, i) => (
    <div key={`${className}-${i}`} className={className} style={style(i)} />
  ));

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--cyber-glow)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--cyber-glow)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'float 10s ease-in-out infinite'
          }}
        />
        
        {/* Glow Sections */}
        <div className="absolute inset-0">
          {generateElements(6, 'absolute border border-cyber-glow/40 animate-grid-pulse', (i) => ({
            width: '150px',
            height: '150px',
            left: `${20 + (i * 15)}%`,
            top: `${15 + (i * 12)}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${4 + i}s`
          }))}
        </div>
      </div>
      
      {/* Traveling Lights */}
      <div className="absolute inset-0 opacity-30">
        {generateElements(3, 'absolute h-px bg-gradient-to-r from-transparent via-cyber-glow to-transparent w-32 animate-travel-horizontal', (i) => ({
          top: `${25 + i * 25}%`,
          animationDelay: `${i * 3}s`,
          animationDuration: '8s'
        }))}
        
        {generateElements(3, 'absolute w-px bg-gradient-to-b from-transparent via-cyber-secondary-glow to-transparent h-32 animate-travel-vertical', (i) => ({
          left: `${30 + i * 20}%`,
          animationDelay: `${i * 4}s`,
          animationDuration: '10s'
        }))}
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {generateElements(20, 'absolute w-1 h-1 bg-cyber-glow rounded-full animate-particles opacity-60', (i) => ({
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${20 + Math.random() * 10}s`
        }))}
      </div>
      
      {/* Scan Lines */}
      <div className="absolute inset-0">
        {[
          { delay: '2s', color: 'cyber-glow/60', opacity: 'opacity-40' },
          { delay: '6s', color: 'cyber-secondary-glow/40', opacity: 'opacity-30' },
          { delay: '10s', color: 'cyber-glow/30', opacity: 'opacity-25' }
        ].map((line, i) => (
          <div 
            key={`scan-line-${i}`}
            className={`absolute w-full h-px bg-gradient-to-r from-transparent via-${line.color} to-transparent animate-scan-line ${line.opacity}`}
            style={{ animationDelay: line.delay }}
          />
        ))}
      </div>
      
      {/* Data Streams */}
      <div className="absolute inset-0 opacity-25">
        {generateElements(4, 'absolute animate-data-stream', (i) => ({
          left: `${10 + i * 25}%`,
          width: '2px',
          height: '60px',
          background: `linear-gradient(to bottom, transparent, hsl(var(--cyber-glow)), hsl(var(--cyber-secondary-glow)), transparent)`,
          animationDelay: `${i * 2.5}s`,
          animationDuration: '12s'
        }))}
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-glow/3 via-transparent to-cyber-secondary-glow/3" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyber-glow/2 to-transparent animate-gradient-shift" />
    </div>
  );
}
