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
      title: "Creating long-term value with responsible AI",
      description: "Fair, transparent, and accountable AI gives organizations a competitive edge. Responsible AI safeguards your reputation and unlocks AI's full potential.",
      cta: "Learn more and download our report",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    },
    {
      title: "Digital transformation that delivers results",
      description: "Transform your business with cutting-edge technology solutions that drive innovation and operational excellence across all sectors.",
      cta: "Explore our services",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      title: "Secure cloud solutions for the future",
      description: "Modernize your infrastructure with secure, scalable cloud solutions that enable your organization to thrive in the digital economy.",
      cta: "Discover cloud services",
      imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop"
    }
  ];

  // Partners data with logos
  const partners = [
    { name: "Microsoft", logo: "/micro.png" },
    { name: "Getty Images", logo: "/micro.png" },
    { name: "Roche", logo: "/micro.png" },
    { name: "nanoString", logo: "/micro.png" },
    { name: "Kite", logo: "/micro.png" },
    { name: "Kaiser Permanente", logo: "/micro.png" },
    { name: "Microsoft", logo: "/micro.png" },
    { name: "Getty Images", logo: "/micro.png" },
    { name: "Roche", logo: "/micro.png" },
    { name: "nanoString", logo: "/micro.png" },
    { name: "Kite", logo: "/micro.png" },
    { name: "Kaiser Permanente", logo: "/micro.png" }
  ];

  // Case studies data
  const caseStudies = [
    {
      company: "HUS Kiinteistöt Oy",
      title: "AI-driven purchase invoice handling saves up to 76% of time in HUS Kiinteistöt",
      imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      slug: "hus-kiinteistot-ai-invoice"
    },
    {
      company: "Raisio",
      title: "AI makes operations more efficient for Finnish food industry pioneer",
      imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      slug: "raisio-ai-operations"
    },
    {
      company: "Case study",
      title: "Multi-layered generative-AI solution accelerates insurance giant's software delivery",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      slug: "insurance-genai-software"
    },
    {
      company: "CGI's Artificial Intelligence Practice",
      title: "GenAI cuts query response time to just 45 seconds for telecom firm",
      imageUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop",
      slug: "telecom-genai-query"
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