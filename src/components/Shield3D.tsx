import { useRef, useEffect, useState } from 'react'
// @ts-ignore
import shieldLogo from '../assets/sh13ld_logo.png'

export default function Shield3D() {
  const imageRef = useRef<HTMLImageElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  useEffect(() => {
    if (imageRef.current) {
      const targetRotationY = mousePosition.x * 15
      const targetRotationX = mousePosition.y * 10
      imageRef.current.style.transform = `perspective(1000px) rotateY(${targetRotationY}deg) rotateX(${targetRotationX}deg) translateY(${Math.sin(Date.now() * 0.002) * 5}px)`
    }
  }, [mousePosition])
  
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: '100%', height: '20rem', minHeight: '16rem', overflow: 'visible', padding: '1rem' }}
    >
      {/* Static 2D Shield Image */}
      <div className="relative z-10 flex items-center justify-center">
        <img
          ref={imageRef}
          src={shieldLogo}
          alt="SH13LDME Shield Logo"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain transition-transform duration-200 ease-out"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(0, 255, 191, 0.3))',
            willChange: 'transform'
          }}
        />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
        <div className="w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] md:w-[20rem] md:h-[20rem] bg-cyber-glow opacity-15 rounded-full blur-3xl animate-cyber-pulse" />
        <div className="absolute w-[8rem] h-[8rem] sm:w-[12rem] sm:h-[12rem] md:w-[14rem] md:h-[14rem] bg-cyber-glow opacity-20 rounded-full blur-2xl" />
        <div className="absolute w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] md:w-[8rem] md:h-[8rem] bg-cyber-glow opacity-25 rounded-full blur-xl" />
      </div>
    </div>
  )
}
