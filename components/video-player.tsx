"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface VideoPlayerProps {
  src: string
  poster?: string
  title?: string
  autoPlay?: boolean
  showControls?: boolean
  aspectRatio?: "16/9" | "4/3" | "1/1"
  className?: string
}

export default function VideoPlayer({
  src,
  poster,
  title,
  autoPlay = false,
  showControls = true,
  aspectRatio = "16/9",
  className = "",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControlsOverlay, setShowControlsOverlay] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative group overflow-hidden rounded-xl ${className}`}
      style={{ aspectRatio }}
      onMouseEnter={() => setShowControlsOverlay(true)}
      onMouseLeave={() => setShowControlsOverlay(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        loop
        playsInline
        muted={isMuted}
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Play/Pause overlay */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-rich-black/40 backdrop-blur-sm"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-cinematic-blue/90 text-white shadow-lg shadow-cinematic-blue/30"
            >
              <Play className="h-8 w-8" />
            </motion.button>
            {title && (
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-bold">{title}</h3>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls overlay */}
      {showControls && (
        <AnimatePresence>
          {(showControlsOverlay || !isPlaying) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-rich-black/80 to-transparent"
            >
              <div className="flex items-center justify-between">
                <button onClick={togglePlay} className="text-white hover:text-cinematic-blue transition-colors">
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
                <div className="flex items-center gap-2">
                  <button onClick={toggleMute} className="text-white hover:text-cinematic-blue transition-colors">
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </button>
                  <button onClick={toggleFullscreen} className="text-white hover:text-cinematic-blue transition-colors">
                    {isFullscreen ? <X className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}
