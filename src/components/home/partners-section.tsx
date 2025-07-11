"use client";
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface Partner {
  name: string;
  logo: string;
}

interface PartnersSectionProps {
  partners: Partner[];
}

const PartnersSection = ({ partners }: PartnersSectionProps) => {
  const t = useTranslations('home.partners');

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl text-gray-600 mb-8">{t('title')}</h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {partners.map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={240}
                  height={240}
                  className="h-30 w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
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
    </section>
  );
};

export default PartnersSection; 