"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Film, FileText, Music, Video, Play } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Pause } from "lucide-react"
import VideoPlayer from "@/components/video-player"

export default function FreeAssets() {
  const [musicStates, setMusicStates] = useState([{ isPlaying: false }, { isPlaying: false }, { isPlaying: false }])

  const audioRefs = useRef<(HTMLAudioElement | null)[]>([null, null, null])

  const handleDownload = (title: string, type: string) => {
    // Create a temporary link element
    const link = document.createElement('a')
    
    // Set the download URL based on the type of asset
    let downloadUrl = ''
    switch(type) {
      case 'template':
        downloadUrl = `/downloads/${title.toLowerCase().replace(/\s+/g, '-')}.pdf`
        break
      case 'music':
        downloadUrl = `/downloads/${title.toLowerCase().replace(/\s+/g, '-')}.mp3`
        break
      case 'lut':
        downloadUrl = `/downloads/${title.toLowerCase().replace(/\s+/g, '-')}.cube`
        break
      case 'footage':
        downloadUrl = `/downloads/${title.toLowerCase().replace(/\s+/g, '-')}.mp4`
        break
    }
    
    link.href = downloadUrl
    link.download = `${title}.${downloadUrl.split('.').pop()}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    return () => {
      // Pause all audio when the component unmounts
      audioRefs.current.forEach((audio) => {
        if (audio) {
          audio.pause()
        }
      })
    }
  }, [])

  const handleMusicToggle = (index: number) => {
    setMusicStates((prevStates) => {
      const newStates = [...prevStates]
      const isCurrentlyPlaying = newStates[index].isPlaying

      // Pause all other tracks
      newStates.forEach((state, i) => {
        if (i !== index && state.isPlaying) {
          newStates[i] = { ...state, isPlaying: false }
          if (audioRefs.current[i]) {
            audioRefs.current[i]?.pause()
          }
        }
      })

      // Toggle the current track
      newStates[index] = { ...newStates[index], isPlaying: !isCurrentlyPlaying }

      // Play or pause the current track
      if (audioRefs.current[index]) {
        if (!isCurrentlyPlaying) {
          audioRefs.current[index]?.play()
        } else {
          audioRefs.current[index]?.pause()
        }
      }

      return newStates
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-rich-black py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-deep-red/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-cinematic-blue/10 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">Free Filmmaking Resources</h1>
            <p className="mb-8 text-lg text-cool-gray">
              Download high-quality assets to enhance your filmmaking projects. No strings attached.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="w-full bg-cinematic-blue hover:bg-cinematic-blue/80 text-white sm:w-auto">
                Browse All Resources
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-700 hover:border-warm-yellow hover:text-warm-yellow sm:w-auto"
              >
                Join Our Newsletter
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gradient-to-b from-rich-black to-gray-900 py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/2 h-96 w-96 rounded-full bg-deep-red/5 blur-3xl"></div>
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cinematic-blue/5 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
            Resource{" "}
            <motion.span
              className="holographic relative inline-block"
              animate={{
                color: ["#00B4FF", "#9D4EDD", "#FF3A5E", "#00B4FF"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Categories
            </motion.span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                icon: FileText,
                title: "Script Templates",
                description: "Professional screenplay and storyboard templates to structure your projects.",
                href: "#templates",
                color: "from-cinematic-blue/20 to-neon-purple/10"
              },
              {
                icon: Music,
                title: "Royalty-Free Music",
                description: "Background tracks and sound effects for your films and videos.",
                href: "#music",
                color: "from-neon-purple/20 to-cyan-500/10"
              },
              {
                icon: Film,
                title: "LUTs & Presets",
                description: "Color grading presets for popular editing software to enhance your footage.",
                href: "#luts",
                color: "from-cyan-500/20 to-teal-400/10"
              },
              {
                icon: Video,
                title: "Stock Footage",
                description: "High-quality B-roll and establishing shots for your productions.",
                href: "#footage",
                color: "from-teal-400/20 to-cinematic-blue/10"
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className="w-full md:w-5/12 lg:w-[22%] relative"
              >
                <Link
                  href={category.href}
                  className="group relative h-full flex flex-col items-center text-center"
                >
                  {/* Square background with gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br border border-gray-800 group-hover:border-cinematic-blue transition-all duration-500 -z-10"></div>
                  
                  {/* Background gradient for square */}
                  <div className={`absolute inset-2 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10`}></div>
                  
                  {/* Icon container with glow effect */}
                  <div className="mt-10 mb-6 relative">
                    <div className="absolute inset-0 bg-cinematic-blue/10 rounded-full blur-xl scale-0 group-hover:scale-150 transition-all duration-700"></div>
                    <motion.div 
                      className="relative w-20 h-20 flex items-center justify-center bg-gray-900/80 rounded-full border border-gray-800 group-hover:border-cinematic-blue"
                      whileHover={{ 
                        rotate: 360,
                        transition: { duration: 2, ease: "linear" }
                      }}
                    >
                      <category.icon className="h-10 w-10 text-cinematic-blue" />
                    </motion.div>
                  </div>
                  
                  {/* Title with animation */}
                  <h3 className="mb-3 text-xl font-bold group-hover:text-cinematic-blue transition-colors duration-300 px-6">
                    {category.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-cool-gray mb-10 px-6">{category.description}</p>
                  
                  {/* Explore button that appears on hover */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="bg-gray-900/80 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <span className="text-cinematic-blue group-hover:text-neon-purple transition-colors duration-300 text-sm font-medium flex items-center">
                        Explore <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Script Templates */}
      <section id="templates" className="bg-rich-black py-16">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Script Templates</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Professional Screenplay Template",
                description:
                  "Industry-standard screenplay format compatible with Final Draft and other screenwriting software.",
                formats: "PDF, FDX, Fountain",
                image: "/images/script-template.jpg",
              },
              {
                title: "Storyboard Template Pack",
                description: "Professional storyboard templates in various aspect ratios for planning your shots.",
                formats: "PDF, PSD, AI",
                image: "/images/storyboard-template.jpg",
              },
              {
                title: "Shot List & Scheduling Templates",
                description: "Comprehensive production planning templates to organize your shoot days efficiently.",
                formats: "XLSX, PDF, Google Sheets",
                image: "/images/shot-list-template.jpg",
              },
            ].map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-6 backdrop-blur-sm hover:border-cinematic-blue transition-all duration-300"
              >
                <div className="mb-4 aspect-[3/4] overflow-hidden rounded-lg bg-gray-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cinematic-blue/10 to-neon-purple/10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <Image
                    src={template.image || "/placeholder.svg"}
                    alt={`${template.title} preview`}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold group-hover:text-cinematic-blue transition-colors duration-300">
                  {template.title}
                </h3>
                <p className="mb-4 text-sm text-cool-gray">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cool-gray">{template.formats}</span>
                  <Button 
                    size="sm" 
                    className="gap-1 bg-cinematic-blue hover:bg-cinematic-blue/80"
                    onClick={() => handleDownload(template.title, 'template')}
                  >
                    <Download className="h-4 w-4" /> Download
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Royalty-Free Music */}
      <section id="music" className="bg-gradient-to-b from-rich-black to-gray-900 py-16">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Royalty-Free Music</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cinematic Score Pack",
                description: "10 orchestral tracks perfect for dramatic scenes and trailers.",
                formats: "MP3, WAV | 320kbps",
                image: "/images/cinematic-score.jpg",
                video: "/videos/Ticking Away .mp3",
              },
              {
                title: "Ambient Background Collection",
                description: "8 atmospheric tracks for creating mood and tension in your scenes.",
                formats: "MP3, WAV | 320kbps",
                image: "/images/ambient-sounds.jpg",
                video: "/videos/Ticking Away .mp3",
              },
              {
                title: "Essential Sound Effects Library",
                description: "100+ high-quality sound effects for enhancing your audio design.",
                formats: "MP3, WAV | 48kHz/24bit",
                image: "/images/sound-effects.jpg",
                video: "/videos/Ticking Away .mp3",
              },
            ].map((audio, index) => {
              const isPlaying = musicStates[index].isPlaying

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-6 backdrop-blur-sm hover:border-cinematic-blue transition-all duration-300"
                >
                  <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-gray-800 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cinematic-blue/10 to-neon-purple/10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <Image
                      src={audio.image || "/placeholder.svg"}
                      alt={`${audio.title} preview`}
                      width={350}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-bold group-hover:text-cinematic-blue transition-colors duration-300">
                    {audio.title}
                  </h3>
                  <p className="mb-4 text-sm text-cool-gray">{audio.description}</p>
                  <div className="mb-4">
                    <div className="rounded-lg bg-gray-900 p-2">
                      <div className="flex items-center gap-2">
                        <button
                          className="rounded-full bg-cinematic-blue p-2 text-white hover:bg-cinematic-blue/80 transition-colors"
                          onClick={() => handleMusicToggle(index)}
                        >
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </button>
                        <div className="h-1 flex-1 rounded-full bg-gray-800">
                          <div className="h-full w-1/3 rounded-full bg-cinematic-blue"></div>
                        </div>
                        <span className="text-xs text-cool-gray">1:24</span>
                      </div>
                    </div>
                    {isPlaying && (
                      <audio
                        src={audio.video}
                        ref={(el) => { audioRefs.current[index] = el; }}
                        autoPlay
                        className="hidden"
                        onEnded={() => handleMusicToggle(index)}
                      />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cool-gray">{audio.formats}</span>
                    <Button 
                      size="sm" 
                      className="gap-1 bg-cinematic-blue hover:bg-cinematic-blue/80"
                      onClick={() => handleDownload(audio.title, 'music')}
                    >
                      <Download className="h-4 w-4" /> Download
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* LUTs & Presets */}
      <section id="luts" className="bg-rich-black py-16">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">LUTs & Presets</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cinematic LUT Pack",
                description: "10 professional LUTs inspired by popular films to give your footage a cinematic look.",
                formats: "Premiere Pro, DaVinci Resolve, FCPX",
                image: "/images/lut-pack.jpg",
              },
              {
                title: "Film Grain Overlays",
                description: "Authentic 35mm and 16mm film grain overlays to add texture to your digital footage.",
                formats: "4K ProRes, H.264",
                image: "/images/film-grain.jpg",
              },
              {
                title: "Premiere Pro Editing Presets",
                description: "Time-saving transition and effect presets for Adobe Premiere Pro.",
                formats: "Premiere Pro CC 2020+",
                image: "/images/premiere-presets.jpg",
              },
            ].map((preset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-6 backdrop-blur-sm hover:border-cinematic-blue transition-all duration-300"
              >
                <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-gray-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cinematic-blue/10 to-neon-purple/10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <Image
                    src={preset.image || "/placeholder.svg"}
                    alt={`${preset.title} preview`}
                    width={350}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold group-hover:text-cinematic-blue transition-colors duration-300">
                  {preset.title}
                </h3>
                <p className="mb-4 text-sm text-cool-gray">{preset.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cool-gray">{preset.formats}</span>
                  <Button 
                    size="sm" 
                    className="gap-1 bg-cinematic-blue hover:bg-cinematic-blue/80"
                    onClick={() => handleDownload(preset.title, 'lut')}
                  >
                    <Download className="h-4 w-4" /> Download
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock Footage */}
      <section id="footage" className="bg-gradient-to-b from-rich-black to-gray-900 py-16">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Stock Footage</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Urban Cityscape Pack",
                description: "15 establishing shots of city skylines, streets, and urban life.",
                formats: "4K | H.264 | 29.97fps",
                image: "/images/urban-footage.jpg",
                video: "/videos/project1.mp4",
              },
              {
                title: "Nature & Landscapes Collection",
                description: "20 beautiful nature shots including forests, mountains, and water scenes.",
                formats: "4K | ProRes | 24fps",
                image: "/images/nature-footage.jpg",
                video: "/videos/project1.mp4",
              },
              {
                title: "Abstract Backgrounds",
                description: "12 looping abstract backgrounds perfect for titles and transitions.",
                formats: "4K | H.264 | 60fps",
                image: "/images/abstract-backgrounds.jpg",
                video: "/videos/project1.mp4",
              },
            ].map((footage, index) => {
              const [showVideo, setShowVideo] = useState(false)

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-6 backdrop-blur-sm hover:border-cinematic-blue transition-all duration-300"
                >
                  <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-gray-800 relative">
                    {showVideo ? (
                      <VideoPlayer src={footage.video} title={footage.title} aspectRatio="16/9" autoPlay />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-cinematic-blue/10 to-neon-purple/10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                        <Image
                          src={footage.image || "/placeholder.svg"}
                          alt={`${footage.title} preview`}
                          width={350}
                          height={200}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <button
                          className="absolute bottom-2 right-2 rounded-full bg-rich-black/80 p-2 hover:bg-cinematic-blue/80 transition-colors"
                          onClick={() => setShowVideo(true)}
                        >
                          <Play className="h-4 w-4 text-white" />
                        </button>
                      </>
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-bold group-hover:text-cinematic-blue transition-colors duration-300">
                    {footage.title}
                  </h3>
                  <p className="mb-4 text-sm text-cool-gray">{footage.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cool-gray">{footage.formats}</span>
                    <Button 
                      size="sm" 
                      className="gap-1 bg-cinematic-blue hover:bg-cinematic-blue/80"
                      onClick={() => handleDownload(footage.title, 'footage')}
                    >
                      <Download className="h-4 w-4" /> Download
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-rich-black py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-deep-red/10 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-0 h-72 w-72 rounded-full bg-cinematic-blue/10 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-8 backdrop-blur-sm"
          >
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">Get More Free Resources</h2>
              <p className="mb-6 text-cool-gray">
                Subscribe to our newsletter to receive new free resources every month and exclusive filmmaking tips.
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-gray-700 bg-gray-900 px-4 py-2"
                />
                <Button className="bg-cinematic-blue hover:bg-cinematic-blue/80 text-white">Subscribe</Button>
              </div>
              <p className="mt-4 text-xs text-cool-gray">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-t from-rich-black to-gray-900 py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-deep-red/10 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-0 h-72 w-72 rounded-full bg-cinematic-blue/10 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-8 md:p-12 backdrop-blur-sm"
          >
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Take Your Filmmaking to the Next Level?</h2>
              <p className="mb-8 text-cool-gray">
                Join our cohort program and learn from industry professionals who will help you master the craft of
                filmmaking.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button className="w-full bg-cinematic-blue hover:bg-cinematic-blue/80 text-white sm:w-auto">
                  Apply to Cohort
                </Button>
                <Link href="/pricing">
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 hover:border-warm-yellow hover:text-warm-yellow sm:w-auto"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


/* Add this style to your global CSS */
/* 
.clip-hex {
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
}
*/
