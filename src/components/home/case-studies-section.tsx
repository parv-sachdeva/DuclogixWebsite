"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface CaseStudy {
  slug: string;
  imageUrl: string;
  titleKey: string;
  companyKey: string;
}

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

import { useLocale } from 'next-intl';

const CaseStudiesSection = ({ caseStudies }: CaseStudiesSectionProps) => {
  const t = useTranslations('home.caseStudies');
  const caseStudiesT = useTranslations('caseStudies');
  const locale = useLocale();

  return (
    <section id="case-studies" className="py-16 lg:py-24 bg-gradient-to-br from-purple-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">{t('title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              href={`/${locale}/case-studies/${study.slug}`}
              className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative h-48 overflow-hidden">                <Image
                  src={study.imageUrl}
                  alt={caseStudiesT(study.titleKey.replace('caseStudies.', ''))}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
              </div>              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2 font-medium">{caseStudiesT(study.companyKey.replace('caseStudies.', ''))}</p>
                <h3 className="font-semibold text-gray-900 mb-4 line-clamp-3 leading-snug">
                  {caseStudiesT(study.titleKey.replace('caseStudies.', ''))}
                </h3>
                <div className="flex items-center text-purple-600 group-hover:text-purple-700 transition-colors">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/case-studies`}
            className="inline-flex items-center text-white font-semibold hover:text-gray-200 transition-colors group"
          >
            {t('discoverMore')}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection; 