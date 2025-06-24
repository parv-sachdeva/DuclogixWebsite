"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface CarouselSlide {
  title: string;
  description: string;
  imageUrl: string;
  cta: string;
}

interface HeroCarouselProps {
  carouselSlides: CarouselSlide[];
}

const HeroCarousel = ({ carouselSlides }: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[500px] lg:h-[600px]">
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <div className="grid md:grid-cols-2 h-full">
                {/* Content Side */}
                <div className="flex items-center justify-center px-6 md:px-12 lg:px-16 bg-white">
                  <div className="max-w-lg">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    <button
                      onClick={() => {
                        const section = document.getElementById('case-studies');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-4 py-2 rounded-full shadow  group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-transform hover:scale-105"
                      type="button"
                    >
                      {slide.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Image Side with Overlay */}
                <div className="relative h-full overflow-hidden">
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/40" />
                  {/* Purple Accent */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-t from-purple-600 to-red-500 opacity-80"
                    style={{ clipPath: 'polygon(100% 100%, 0% 100%, 100% 0%)' }} />
                </div>
              </div>
            </div>
          ))}

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-105 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-105 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel; 