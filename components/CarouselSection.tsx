"use client"

import { useState, useEffect, useRef } from "react"

const CarouselSection = () => {
  const images = [
    "/ai_ethic.jpeg",
    "/roundtables.jpeg",
    "/past.jpeg",
    "/speaker.jpeg",
    "/speaker2.jpeg",
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
    "/img11.jpg",
    "/img12.jpg",
    "/img13.jpg",
    "/img14.jpg",
    "/img17.jpeg",
    "/img18.jpeg",
    "/img19.jpeg",
    "/img20.jpeg",
    "/img21.jpeg",
    "/img22.jpeg",
    "/img23.jpeg",
    "/img24.jpeg",
    "/img25.jpeg",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-slide functionality - continuous without pause
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsTransitioning(false)
      }, 150) // Half of transition duration for smooth effect
    }, 3000) // Change slide every 3 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [images.length])

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
        setIsTransitioning(false)
      }, 150)
    }
  }

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsTransitioning(false)
      }, 150)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:pt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Gallery</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our curated collection of memorable moments and experiences
        </p>
      </div>

      <div className="relative overflow-hidden rounded-sm">
        {/* Main Carousel Container */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
          {/* Smooth Sliding Container */}
          <div 
            className="flex items-center justify-center space-x-8 w-full transition-all duration-700 ease-in-out"
            style={{
              transform: isTransitioning ? 'translateX(-100px)' : 'translateX(0)',
              opacity: isTransitioning ? 0.7 : 1
            }}
          >
            {/* Previous Image */}
            <div
              className="relative cursor-pointer transition-all duration-700 ease-in-out transform hover:scale-105"
              style={{ 
                transform: `scale(0.75) ${isTransitioning ? 'translateX(50px)' : 'translateX(0)'}`,
                opacity: isTransitioning ? 0.5 : 0.8
              }}
              onClick={goToPrevious}
            >
              <div className="relative w-64 h-80 md:w-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={images[(currentIndex - 1 + images.length) % images.length] || "/placeholder.svg?height=400&width=320&text=Gallery"}
                  alt="Previous"
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>

            {/* Current Image (Center - Bigger) */}
            <div
              className="relative transition-all duration-700 ease-in-out transform"
              style={{ 
                transform: `scale(1) ${isTransitioning ? 'translateX(0)' : 'translateX(0)'}`,
                opacity: isTransitioning ? 0.9 : 1
              }}
            >
              <div className="relative w-80 h-96 md:w-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={images[currentIndex] || "/placeholder.svg?height=500&width=384&text=Featured"}
                  alt="Current"
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Next Image */}
            <div
              className="relative cursor-pointer transition-all duration-700 ease-in-out transform hover:scale-105"
              style={{ 
                transform: `scale(0.75) ${isTransitioning ? 'translateX(-50px)' : 'translateX(0)'}`,
                opacity: isTransitioning ? 0.5 : 0.8
              }}
              onClick={goToNext}
            >
              <div className="relative w-64 h-80 md:w-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={images[(currentIndex + 1) % images.length] || "/placeholder.svg?height=400&width=320&text=Gallery"}
                  alt="Next"
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar
        <div className="mt-8 bg-gray-200 rounded-full h-1 overflow-hidden">
          <div
            className="h-full bg-[#0066FF] transition-all duration-700 ease-out"
            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          />
        </div> */}

        {/* Navigation Dots */}
        {/* <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setCurrentIndex(index)
                    setIsTransitioning(false)
                  }, 150)
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#0066FF] w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default CarouselSection
