"use client";
import React from 'react';
import HeroCarousel from '@/components/home/hero-carousel';
import ThreeColumnSection from '@/components/home/three-column-section';
import PartnersSection from '@/components/home/partners-section';
import CaseStudiesSection from '@/components/home/case-studies-section';

const Website = () => {
  // Carousel data
  const carouselSlides = [
    {
      title: "Transforming Genomics with Intelligent Software",
      description: "Empowering bioinformatics enterprises with custom data solutions and innovative software tools.",
      cta: "Discover Case Studies",
      imageUrl: "/c1.svg"
    },
    {
      title: "Harness the Power of Big Data",
      description: "From exploration to prediction, we craft data-driven strategies that fuel decisions and accelerate growth.",
      cta: "Discover Case Studies",
      imageUrl: "/c2.svg"
    },
    {
      title: "Making Data Make Sense",
      description: "Interactive dashboards and visual storytelling that bring clarity to complex datasets.",
      cta: "Discover Case Studies",
      imageUrl: "/c3.svg"
    }
  ];

  // Partners data with logos
  const partners = [
    { name: "Illumina", logo: "/i.png" },
    { name: "Roche", logo: "/i2.png" },
    { name: "Sonoma Biotherapeutics", logo: "/i3.png" },
    { name: "MedGenome Labs", logo: "/i4.png" },
    { name: "Illumina", logo: "/i.png" },
    { name: "Roche", logo: "/i2.png" },
    { name: "Sonoma Biotherapeutics", logo: "/i3.png" },
    { name: "MedGenome Labs", logo: "/i4.png" },
  ];

  // Case studies data
  const caseStudies = [
    {
      company: "Case Study",
      title: "bulkRNA App",
      imageUrl: "/case-placeholder.svg",
      slug: "bulkrna-app"
    },
    {
      company: "Case Study",
      title: "scRNA App",
      imageUrl: "/case-placeholder.svg",
      slug: "scrna-app"
    },
    {
      company: "Case Study",
      title: "Biodiversity App",
      imageUrl: "/case-placeholder.svg",
      slug: "biodiversity-app"
    },
    {
      company: "Case Study",
      title: "Rnaseq Nextflow pipeline",
      imageUrl: "/case-placeholder.svg",
      slug: "rnaseq-nextflow-pipeline"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel carouselSlides={carouselSlides} />
      <ThreeColumnSection />
      <CaseStudiesSection caseStudies={caseStudies} />
      <PartnersSection partners={partners} />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Website;