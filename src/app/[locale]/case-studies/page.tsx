"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { getAllCaseStudies } from '@/lib/case-studies-data';
import { useTranslations } from 'next-intl';

import { useLocale } from 'next-intl';

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();
  const t = useTranslations('caseStudies');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-800 to-purple-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t('title')}</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <Link href={`/${locale}/case-studies/${study.slug}`} className="block group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">                  <Image
                    src={study.imageUrl}
                    alt={t(study.titleKey.replace('caseStudies.', ''))}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {/* Company badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {t(study.companyKey.replace('caseStudies.', ''))}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(study.publishDate)}
                    </div>                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {t(study.readTimeKey.replace('caseStudies.', ''))} {t('readTime')}
                    </div>
                  </div>                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {t(study.titleKey.replace('caseStudies.', ''))}
                  </h2>

                  {/* Summary */}
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {t(study.summaryKey.replace('caseStudies.', ''))}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="inline-flex items-center bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {t(study.tagsKey.replace('caseStudies.', ''))}
                    </span>
                  </div>{/* Read more */}
                  <div className="flex items-center text-purple-600 group-hover:text-purple-700 font-medium">
                    {tCommon('readCaseStudy')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t('cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
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
    </div>
  );
}
