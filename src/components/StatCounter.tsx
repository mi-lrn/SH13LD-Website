import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ReactNode } from 'react'

interface StatCounterProps {
  value: string
  label: string
  delay?: number
  icon?: ReactNode
}

const CornerAccent = ({ position }: { position: string }) => (
  <div className={`absolute ${position} w-4 h-4 border-cyber-glow/40 opacity-0 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-cyber-glow/30 transition-all duration-500`} />
);

const Sparkle = ({ position, color, delay, duration }: { 
  position: string; 
  color: string; 
  delay: number; 
  duration: number;
}) => (
  <motion.div 
    className={`absolute ${position} w-1 h-1 ${color} rounded-full`}
    animate={{
      scale: [0, 1.5, 0],
      opacity: [0, 1, 0]
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay
    }}
  />
);

export default function StatCounter({ value, label, delay = 0, icon }: StatCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState('0')
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ''))
      if (numericValue) {
        let current = 0
        const increment = numericValue / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= numericValue) {
            setDisplayValue(value)
            clearInterval(timer)
          } else {
            setDisplayValue(Math.floor(current).toString() + value.replace(/\d/g, '').slice(-1))
          }
        }, 30)
        return () => clearInterval(timer)
      } else {
        setDisplayValue(value)
      }
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7, rotateX: 20 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
      whileHover={{ 
        scale: 1.15, 
        rotateX: -3, 
        rotateY: 5,
        z: 10,
        transition: { 
          duration: 0.7, 
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0 
        }
      }}
      transition={{ 
        duration: 0.7, 
        delay, 
        default: { 
          duration: 0.7, 
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0
        }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
      style={{ 
        width: 280,
        height: 320,
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Main Card Container */}
      <div className="relative w-full h-full backdrop-blur-xl border border-transparent rounded-2xl px-8 py-10 flex flex-col items-center justify-center overflow-hidden transition-all duration-500">
        
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-black/[0.03] to-transparent backdrop-blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-tl from-cyber-glow/[0.01] via-transparent to-cyber-secondary-glow/[0.01]" />
        
        {/* Border Effect */}
        <div className="absolute inset-0 rounded-2xl border border-white/[0.08] group-hover:border-white/[0.25] transition-all duration-500" />
        <div className="absolute inset-0 rounded-2xl border border-cyber-glow/[0.15] group-hover:border-cyber-glow/[0.6] transition-all duration-500" />
        
        {/* Inner Shadow */}
        <div className="absolute inset-[1px] rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_1px_rgba(0,0,0,0.1)] group-hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.2)] transition-all duration-500" />
        
        {/* Animated Outline on Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 320">
            <rect
              x="1"
              y="1"
              width="278"
              height="318"
              rx="15"
              ry="15"
              fill="none"
              stroke="url(#travelingGlow)"
              strokeWidth="3"
              strokeDasharray="25 180"
              className="animate-dash"
              filter="url(#glowFilter)"
            />
            <defs>
              <linearGradient id="travelingGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="30%" stopColor="rgb(0, 255, 191)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="rgb(0, 255, 191)" stopOpacity="1" />
                <stop offset="70%" stopColor="rgb(0, 255, 191)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-2xl bg-cyber-glow/[0.08] blur-lg" />
          <div className="absolute -inset-2 rounded-2xl bg-cyber-glow/[0.12] blur-xl" />
          <div className="absolute -inset-4 rounded-2xl bg-cyber-glow/[0.06] blur-2xl" />
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Sparkle position="top-1/4 left-1/4" color="bg-cyber-glow" delay={0} duration={1.5} />
          <Sparkle position="top-3/4 right-1/3" color="bg-cyber-secondary-glow" delay={0.5} duration={1.8} />
          <Sparkle position="top-1/2 left-3/4" color="bg-white" delay={0.8} duration={1.2} />
          <Sparkle position="bottom-1/4 left-1/2" color="bg-cyber-glow" delay={1.2} duration={1.6} />
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          
          {/* Icon  */}
          {icon && (
            <motion.div 
              className="mb-6 flex-shrink-0"
              animate={isHovered ? { 
                rotate: 360, 
                scale: 1.10 
              } : { 
                rotate: 0, 
                scale: 1 
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.7, 0, 0.3, 1],
                type: "tween"
              }}
            >
              <div className="relative">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-transparent border border-cyber-glow/30 text-cyber-glow/90 text-2xl group-hover:border-cyber-glow/80 group-hover:text-cyber-glow group-hover:shadow-lg group-hover:shadow-cyber-glow/40 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  {icon}
                </span>
                {/* Icon Glow */}
                <div className="absolute inset-0 rounded-full bg-cyber-glow/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-full bg-cyber-glow/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          )}
          
          {/* Number */}
          <motion.div 
            className="text-5xl font-black text-white mb-4 tracking-tight flex-shrink-0 relative"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.5), 0 0 8px rgba(0,255,191,0.15)'
            }}
          >
            {displayValue}
          </motion.div>
          
          {/* Label */}
          <motion.div 
            className="text-cyber-glow/80 text-xs font-semibold uppercase tracking-[0.15em] mb-6 text-center group-hover:text-cyber-glow/90 transition-colors duration-300 flex-shrink-0"
            initial={{ opacity: 0.7 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.4 }}
          >
            {label}
          </motion.div>
          
          {/* Animated Line */}
          <div className="relative w-16 h-px flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-glow/40 to-transparent" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-glow/60 to-transparent"
              animate={{ 
                x: ['-100%', '100%'],
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 2,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
        
        {/* Corner Accents */}
        <CornerAccent position="top-3 left-3 border-l-2 border-t-2" />
        <CornerAccent position="top-3 right-3 border-r-2 border-t-2" />
        <CornerAccent position="bottom-3 left-3 border-l-2 border-b-2" />
        <CornerAccent position="bottom-3 right-3 border-r-2 border-b-2" />
      </div>
    </motion.div>
  )
}
