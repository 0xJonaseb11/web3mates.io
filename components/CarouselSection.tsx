"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsTransitioning(false)
      }, 150)
    }, 3000)

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:pt-20">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Featured Gallery</h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          Discover our curated collection of memorable moments and experiences
        </p>
      </div>

      <div className="relative overflow-hidden rounded-sm">
        <div className="relative h-64 sm:h-80 md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-8 w-full transition-all duration-700 ease-in-out"
            style={{
              transform: isTransitioning ? 'translateX(-100px)' : 'translateX(0)',
              opacity: isTransitioning ? 0.7 : 1
            }}
          >

            <div
              className="relative cursor-pointer transition-all duration-700 ease-in-out transform hover:scale-105"
              style={{ 
                transform: `scale(0.75) ${isTransitioning ? 'translateX(50px)' : 'translateX(0)'}`,
                opacity: isTransitioning ? 0.5 : 0.8
              }}
              onClick={goToPrevious}
            >
              <div className="relative w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={images[(currentIndex - 1 + images.length) % images.length] || "/past.jpeg"}
                  alt="Previous gallery image"
                  fill
                  className="object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>


            <div
              className="relative transition-all duration-700 ease-in-out transform"
              style={{ 
                transform: `scale(1) ${isTransitioning ? 'translateX(0)' : 'translateX(0)'}`,
                opacity: isTransitioning ? 0.9 : 1
              }}
            >
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src={images[currentIndex] || "/ai_ethic.jpeg"}
                  alt="Current featured gallery image"
                  fill
                  className="object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>


            <div
              className="relative cursor-pointer transition-all duration-700 ease-in-out transform hover:scale-105"
              style={{ 
                transform: `scale(0.75) ${isTransitioning ? 'translateX(-50px)' : 'translateX(0)'}`,
                opacity: isTransitioning ? 0.5 : 0.8
              }}
              onClick={goToNext}
            >
              <div className="relative w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={images[(currentIndex + 1) % images.length] || "/speaker.jpeg"}
                  alt="Next gallery image"
                  fill
                  className="object-cover transition-all duration-700 ease-in-out"
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
