"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Lightbulb,
  Network,
  Puzzle,
  ArrowRight,
  Heart,
  Zap,
  Users,
  Settings,
  Brain,
  BarChart3,
  Cloud,
  Cpu,
  Grid3X3,
  Smartphone
} from 'lucide-react';

const ThreeColumnSection = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations('home.threeColumns');
  const tCommon = useTranslations('common');

  // Data configuration with translations
  const sectionsData = [
    {
      id: 'insights',
      icon: Lightbulb,
      title: t('insights.title'),
      description: t('insights.description'),
      gradient: 'from-blue-500 to-cyan-500',
      hoverGradient: 'from-blue-600 to-cyan-600',
      items: [
        { name: t('insights.items.bioinformatics'), icon: Brain, href: '#' },
        { name: t('insights.items.dataStorytelling'), icon: BarChart3, href: '#' },
        { name: t('insights.items.clinicalAnalytics'), icon: Heart, href: '#' },
        { name: t('insights.items.academicCollaborations'), icon: Users, href: '#' },
      ],
      ctaText: t('insights.cta'),
      ctaHref: '#case-studies',
      accentColor: 'text-blue-600 hover:text-blue-700'
    },
    {
      id: 'services',
      icon: Network,
      title: t('services.title'),
      description: t('services.description'),
      gradient: 'from-emerald-500 to-teal-500',
      hoverGradient: 'from-emerald-600 to-teal-600',
      items: [
        { name: t('services.items.bioinformaticsConsulting'), icon: Brain, href: '#' },
        { name: t('services.items.dataVisualization'), icon: BarChart3, href: '#' },
        { name: t('services.items.pipelineAutomation'), icon: Settings, href: '#' },
        { name: t('services.items.cloudSolutions'), icon: Cloud, href: '#' },
        { name: t('services.items.dataScience'), icon: Cpu, href: '#' },
        { name: t('services.items.dataWrangling'), icon: Grid3X3, href: '#' }
      ],
      ctaText: t('services.cta'),
      ctaHref: '#case-studies',
      accentColor: 'text-emerald-600 hover:text-emerald-700'
    },
    {
      id: 'solutions',
      icon: Puzzle,
      title: t('solutions.title'),
      description: t('solutions.description'),
      gradient: 'from-violet-500 to-purple-500',
      hoverGradient: 'from-violet-600 to-purple-600',
      items: [
        { name: t('solutions.items.rShinyApps'), icon: Smartphone, href: '#' },
        { name: t('solutions.items.nextflowPipelines'), icon: Network, href: '#' },
        { name: t('solutions.items.highPerformanceComputing'), icon: Zap, href: '#' },
        { name: t('solutions.items.customDashboards'), icon: BarChart3, href: '#' },
        { name: t('solutions.items.ngsAnalysis'), icon: Brain, href: '#' }
      ],
      ctaText: t('solutions.cta'),
      ctaHref: '#case-studies',
      accentColor: 'text-violet-600 hover:text-violet-700'
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section-id');
            if (id && !visibleItems.includes(id)) {
              setVisibleItems(prev => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-section-id]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {sectionsData.map((section, index) => {
            const IconComponent = section.icon;
            const isVisible = visibleItems.includes(section.id);

            return (
              <div
                key={section.id}
                data-section-id={section.id}
                className={`group relative transition-all duration-700 ease-out transform ${isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Card Container */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50">

                  {/* Header with Icon and Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${section.gradient} group-hover:${section.hoverGradient} transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110 transform`}>
                      <IconComponent className="h-8 w-8 text-white" />

                      {/* Subtle pulse animation */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br  opacity-75  group-hover:animate-none`}></div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {section.title}
                    </h2>
                  </div>
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8 text-base lg:text-lg group-hover:text-gray-700 transition-colors">
                    {section.description}
                  </p>

                  {/* Enhanced Tags with Icons */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {section.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group/tag flex items-center space-x-2 px-4 py-2 bg-gray-50 hover:bg-white text-gray-700 hover:text-gray-900 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-md hover:scale-105 border border-transparent hover:border-gray-200"
                          role="button"
                          tabIndex={0}
                        >
                          <ItemIcon className="h-4 w-4 text-gray-500 group-hover/tag:text-gray-700 transition-colors" />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Enhanced CTA */}
                  <Link
                    href={section.ctaHref}
                    className={`inline-flex items-center ${section.accentColor} font-semibold transition-all duration-300 group/cta text-lg hover:gap-3 gap-2`}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="relative">
                      {section.ctaText}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover/cta:w-full"></span>
                    </span>
                    <ArrowRight className="h-5 w-5 group-hover/cta:translate-x-1 transition-transform duration-300" />
                  </Link>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${section.gradient} opacity-10 rounded-bl-3xl rounded-tr-2xl transition-opacity duration-300 group-hover:opacity-20`}></div>
                </div>
              </div>
            );
          })}
        </div>        {/* Additional Call-to-Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('cta.title')}
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const section = document.getElementById('case-studies');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
                type="button"
              >
                {tCommon('startYourProject')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnSection;