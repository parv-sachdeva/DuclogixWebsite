'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';
import {
  ArrowRight,
  Plus,
  Minus,
} from 'lucide-react';
import Image from 'next/image';

// Hero Section Component
export const BusinessConsultingHero: React.FC = () => {
  const t = useTranslations('businessConsulting.hero');
  const tCommon = useTranslations('common');

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              {t('title')}
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-700 mb-8 leading-tight">
              {t('subtitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t('description')}
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <p className="font-semibold text-gray-900 mb-2">
                {t('forbesAward')}
              </p>
              <Button variant="link" className="p-0 text-blue-600 hover:text-blue-800">
                {tCommon('learnMore')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Image with Award Badge */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Business consulting team meeting"
                height={400}
                width={600}
                className="w-full h-96 object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute top-20 left-0 w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>

              {/* Forbes Badge */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center text-white text-center p-4">
                <div>
                  <div className="text-xs font-bold">Forbes 2024</div>
                  <div className="text-xs font-semibold mt-1">WORLD&apos;S BEST</div>
                  <div className="text-xs font-semibold">MANAGEMENT</div>
                  <div className="text-xs font-semibold">CONSULTING FIRMS</div>
                </div>
              </div>
            </div>
          </div>
        </div>        {/* IDC MarketScape Callout */}
        <div className="mt-12">
          <Button variant="link" className="text-blue-600 hover:text-blue-800 text-lg">
            {t('idcMarketscape')}
          </Button>
        </div>
      </div>
    </section>
  );
};

// Expandable Capabilities Section
export const CapabilitiesSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const t = useTranslations('businessConsulting.capabilities');

  const capabilities = [
    {
      title: t('businessStrategy.title'),
      content: t('businessStrategy.content')
    },
    {
      title: t('humanTransformation.title'),
      content: t('humanTransformation.content')
    },
    {
      title: t('operationalExcellence.title'),
      content: t('operationalExcellence.content')
    },
    {
      title: t('digitalLeadership.title'),
      content: t('digitalLeadership.content')
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Partnering with executives to respond to constant change while building for future success
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our consultants work with industry leaders to balance competing demands,
              adapt and thrive in any market condition, and build long-term business and
              societal value through <span className="font-semibold">four key consulting capabilities</span>—business strategy,
              human-centered transformation, customer/citizen value and operational
              excellence, and digital leadership and CIO agenda.
            </p>
            <div className="w-4 h-32 bg-gradient-to-b from-blue-600 to-purple-600"></div>
          </div>

          {/* Right Expandable List */}
          <div className="space-y-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900">{capability.title}</span>
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center text-white">
                    {expandedItems.includes(index) ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>
                {expandedItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{capability.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// C-Level Services Section
export const CLevelServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Consulting services that address challenges at the top of the C-level agenda
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Within each of our consulting capabilities, we help decision-makers manage
              evolving business demands and today&apos;s broader macro trends while
              building sustainable value for customers, citizens and society at large.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Executive team in boardroom meeting"
              height={400}
              width={600}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Tags Section
export const ServiceTagsSection: React.FC = () => {
  const services = [
    { name: 'Strategic alignment', featured: false },
    { name: 'Sustainability & ESG advisory', featured: true },
    { name: 'M&A advisory', featured: false },
    { name: 'Change management', featured: false },
    { name: 'CFO advisory', featured: false },
    { name: 'Supply chain consulting', featured: false },
    { name: 'CIO advisory', featured: false },
    { name: 'Cybersecurity advisory', featured: false },
    { name: 'AI advisory', featured: false }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-light text-gray-900 mb-12">
          Explore our consulting services
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Badge
              key={index}
              className={`px-6 py-3 text-sm rounded-full cursor-pointer transition-all ${service.featured
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                }`}
            >
              {service.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

// Value Proposition Section
export const ValuePropositionSection: React.FC = () => {
  const values = [
    {
      title: 'In-depth industry knowledge and experience',
      description: 'Leveraging deep industry insight and experience, our approach transforms market opportunities into tangible results in a dynamic business landscape.'
    },
    {
      title: 'Actionable innovation',
      description: 'Taking full advantage of our end-to-end capabilities, we help decision-makers drive actionable innovation and create competitive advantage as digital leaders.'
    },
    {
      title: 'Global insights and local talent',
      description: 'Our global network of 20+ innovation hubs, combined with our 3,000+ consultants worldwide, deliver global insights on a local scale to generate unmatched value.'
    },
    {
      title: 'Proximity and partnership',
      description: 'By fostering a culture of accountability and transparency, we partner closely with you to unleash the full potential of your organization.'
    },
    {
      title: 'Augmented consultancy',
      description: 'Empowered by artificial intelligence and advanced platforms, our consultants embody the fusion of expert insights with continuous knowledge exchange and best practices.'
    },
    {
      title: 'Human-centricity',
      description: 'We put people first in everything we do, helping your teams to drive change that enables meaningful, sustainable success.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-gray-900 mb-4">The value our consultants deliver</h2>
        <p className="text-xl text-gray-700 mb-16 max-w-2xl">
          <span className="font-semibold">We think boldly and act pragmatically. This is how we make a difference.</span>
        </p>
        <p className="text-lg text-gray-600 mb-16 max-w-4xl">
          Our consulting differentiators accelerate the journey to your desired state. We help you
          choose the best path for your transformation, and we work with you every step of the way.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Image */}
          <div>
            <Image
              height={400}
              width={600}
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
              alt="Business consultant looking at city view"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Right Value Points */}
          <div className="space-y-8">
            <div className="w-4 h-32 bg-gradient-to-b from-blue-600 to-purple-600 mb-8"></div>
            {values.map((value, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-900">{value.title}:</span>
                  <span className="text-gray-600 ml-1">{value.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Client Stories Section
export const ClientStoriesSection: React.FC = () => {
  const stories = [
    {
      title: 'Change management drives the success of an insurer\'s Personal Information Protection (PIP) program',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop'
    },
    {
      title: 'Helping a large telco transform into an agile organization by aligning business and IT around value',
      image: 'https://images.unsplash.com/photo-1558618666-fccd04c75c16?w=400&h=250&fit=crop'
    },
    {
      title: 'Forbes names CGI as one of \'World\'s Best Management Consulting Firms\' for 2024',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    },
    {
      title: 'Support a North American telecommunications company in the optimization of their IT assets and expenditures',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-gray-900 mb-16">Client stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stories.map((story, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
              <CardContent className="p-0">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image
                    height={400}
                    width={600}
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">Article</div>
                  <h3 className="text-base font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-3">
                    {story.title}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button variant="link" className="p-0 text-gray-900 hover:text-blue-600">
          More client stories
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

// Business Leaders Section
export const BusinessLeadersSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-gray-900 mb-16">Talk to our business consulting leaders</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
          {/* Leader Profile */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex gap-6">
                <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    height={400}
                    width={600}
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&face"
                    alt="Pierre-Dominique Martin"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Pierre-Dominique Martin</h3>
                  <p className="text-gray-700 mb-4">Senior Vice-President, Global Business and Strategic IT Consulting</p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6">
                    View profile
                  </Button>
                </div>
              </div>

              <p className="text-gray-600 mt-6 leading-relaxed">
                A 30+ year veteran of CGI, Senior Vice-President Pierre-Dominique Martin is responsible for the company&apos;s global
                business and strategic IT consulting services. In this role, he partners with CGI&apos;s global operations leaders to drive
                forward CGI&apos;s consulting services model and ...
              </p>
            </CardContent>
          </Card>

          {/* Second leader card would be here */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

// Voice of Clients Section
export const VoiceOfClientsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Illustration */}
          <div>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
              alt="Voice of our clients illustration"
              height={400}
              width={600}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">2025 CGI Voice of Our Clients</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The CGI Voice of Our Clients shares findings from our in-depth interviews with
              business and IT executives across the industries and geographies we serve.
            </p>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Latest News Section
export const LatestNewsSection: React.FC = () => {
  const newsItems = [
    {
      title: 'Change management drives the success of an insurer\'s Personal Information Protection (PIP) program',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop'
    },
    {
      title: 'Helping a large telco transform into an agile organization by aligning business and IT around value',
      image: 'https://images.unsplash.com/photo-1558618666-fccd04c75c16?w=400&h=250&fit=crop'
    },
    {
      title: 'Forbes names CGI as one of \'World\'s Best Management Consulting Firms\' for 2024',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    },
    {
      title: 'Support a North American telecommunications company in the optimization of their IT assets and expenditures',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-gray-900 mb-16">Latest news and related media</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
              <CardContent className="p-0">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image
                    height={400}
                    width={600}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">Article</div>
                  <h3 className="text-base font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Button variant="link" className="p-0 text-gray-900 hover:text-blue-600">
            See more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}; 