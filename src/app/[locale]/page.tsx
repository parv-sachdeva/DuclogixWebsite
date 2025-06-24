"use client";
import React from 'react';
import {useTranslations} from 'next-intl';
import HeroCarousel from '@/components/home/hero-carousel';
import ThreeColumnSection from '@/components/home/three-column-section';
import PartnersSection from '@/components/home/partners-section';
import CaseStudiesSection from '@/components/home/case-studies-section';
import { getAllCaseStudies } from '@/lib/case-studies-data';

const Website = () => {
  const t = useTranslations('home');

  // Carousel data with translations
  const carouselSlides = [
    {
      title: t('heroSlides.slide1.title'),
      description: t('heroSlides.slide1.description'),
      cta: t('heroSlides.slide1.cta'),
      imageUrl: "/c1.svg"
    },
    {
      title: t('heroSlides.slide2.title'),
      description: t('heroSlides.slide2.description'),
      cta: t('heroSlides.slide2.cta'),
      imageUrl: "/c2.svg"
    },
    {
      title: t('heroSlides.slide3.title'),
      description: t('heroSlides.slide3.description'),
      cta: t('heroSlides.slide3.cta'),
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
  // Case studies data from global data file
  const caseStudies = getAllCaseStudies().map(study => ({
    companyKey: study.companyKey,
    titleKey: study.titleKey,
    imageUrl: study.imageUrl,
    slug: study.slug
  }));
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
