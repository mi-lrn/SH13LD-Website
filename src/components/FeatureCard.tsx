import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FeatureCardProps {
  title: string
  items: string[]
  icon?: ReactNode
  delay?: number
}

const CornerAccent = ({ position }: { position: string }) => (
  <div className={`absolute ${position} w-4 h-4 border-cyber-glow/30 opacity-0 group-hover:opacity-100 transition-all duration-500`} />
);

const DiagonalLine = ({ left, blur }: { left: string; blur: string }) => (
  <div 
    className={`absolute h-full w-1 bg-gradient-to-b from-transparent via-cyber-glow/80 to-transparent`}
    style={{ 
      left,
      transform: 'rotate(15deg)',
      filter: `blur(${blur})`
    }}
  />
);

export default function FeatureCard({ title, items, icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.03,
        rotateY: 3,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
      }}
      className="relative group cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div className="bg-transparent backdrop-blur-xl border border-border/50 rounded-2xl p-8 h-full relative overflow-hidden transition-all duration-500">
        
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-glow/[0.02] via-black/[0.03] to-transparent backdrop-blur-xl rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-tl from-cyber-glow/[0.01] via-transparent to-white/[0.02] rounded-2xl" />
        
        {/* Borders */}
        <div className="absolute inset-0 rounded-2xl border border-cyber-glow/20 group-hover:border-cyber-glow/60 transition-all duration-500" />
        <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-white/15 transition-all duration-500" />
        
        {/* Glow Effects */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-2xl bg-cyber-glow/[0.08] blur-lg" />
          <div className="absolute -inset-1 rounded-2xl bg-cyber-glow/[0.06] blur-xl" />
          <div className="absolute -inset-2 rounded-2xl bg-cyber-glow/[0.04] blur-2xl" />
        </div>
        
        {/* Diagonal Lines */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 animate-lines-group-slide">
            <DiagonalLine left="35%" blur="3px" />
            <DiagonalLine left="50%" blur="1px" />
            <DiagonalLine left="65%" blur="2px" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            {icon && (
              <motion.div 
                className="p-3 rounded-xl bg-cyber-glow/10 text-cyber-glow group-hover:bg-cyber-glow/20 group-hover:shadow-lg group-hover:shadow-cyber-glow/30 transition-all duration-500"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {icon}
              </motion.div>
            )}
            <h3 className="text-2xl font-bold text-foreground group-hover:text-cyber-glow/90 transition-colors duration-300">
              {title}
            </h3>
          </div>
          
          <ul className="space-y-4">
            {items.map((item, index) => (
              <motion.li 
                key={index} 
                className="flex items-start gap-4 text-muted-foreground group-hover:text-white transition-colors duration-300"
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-2 h-2 bg-cyber-glow rounded-full mt-2 flex-shrink-0 group-hover:shadow-lg group-hover:shadow-cyber-glow/50 group-hover:scale-125 transition-all duration-300" />
                <span className="text-sm leading-relaxed group-hover:text-white transition-colors duration-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        {/* Corner Accents */}
        <CornerAccent position="top-3 left-3 border-l border-t" />
        <CornerAccent position="top-3 right-3 border-r border-t" />
        <CornerAccent position="bottom-3 left-3 border-l border-b" />
        <CornerAccent position="bottom-3 right-3 border-r border-b" />
      </div>
    </motion.div>
  )
}
