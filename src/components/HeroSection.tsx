import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import hero from '../assets/iTFF.mp4'

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showSnippet, setShowSnippet] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!isPlaying && videoRef.current) {
      videoRef.current.play().catch((error) => console.error('Error playing video:', error))
    }
  }, [isPlaying])

  useEffect(() => {
    const timer = setTimeout(() => setShowSnippet(false), 3800) 
    return () => clearTimeout(timer)  
  }, [])

  const handleUserInteraction = () => setIsPlaying(true)
  const handleContextMenu = (e: React.MouseEvent) => e.preventDefault()

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        onClick={handleUserInteraction}
        onContextMenu={handleContextMenu}
      >
        <source src={hero} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="flex items-center justify-center absolute inset-0 z-10 px-4 py-16">
        {showSnippet && (
          <div className="text-center max-w-4xl w-full">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4"
            >
              iTF:  Security. Redefined.
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ delay: 0.6, duration: 3 }}
              className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8 max-w-md mx-auto"
            >
              Effortless protection for a complex world.
            </motion.p>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
