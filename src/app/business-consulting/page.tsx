import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Network, 
  Puzzle,
  Play,
} from 'lucide-react';
import Image from 'next/image';

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Life sciences
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-700 mb-8 leading-tight">
              Leveraging our extensive industry expertise to accelerate digitization
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              As life sciences organizations work to minimize regulatory and competitive 
              impacts while maximizing revenue potential, CGI helps clients reduce costs 
              and drive innovation through automation and process optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3"
              >
                News and client stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-900 text-gray-900 hover:bg-gray-50 px-6 py-3"
              >
                Explore in your geography
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <Image 
                src="https://picsum.photos/600/400?random=1" 
                alt="Life sciences researcher working with microscope"
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute top-20 left-0 w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Technologies and Solutions Section
const TechnologiesSolutionsSection: React.FC = () => {
  const technologies = [
    'Advanced analytics',
    'Digital transformation', 
    'Cloud & hybrid IT',
    'Cybersecurity',
    'Intelligent automation'
  ];

  const solutions = [
    'CGI BICEPS',
    "CGI's Procos"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enabling Technologies */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Network className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">Enabling technologies</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 text-sm border-gray-300 hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Puzzle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">Solutions</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {solutions.map((solution, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 text-sm border-gray-300 hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-colors"
                >
                  {solution}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Video Section Component
const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Transforming patient care with our data-driven healthcare strategy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              As life sciences organizations work to minimize regulatory and competitive impacts while 
              maximizing revenue potential, CGI helps our clients worldwide reduce costs and drive 
              innovation through automation and process optimization. Discover how our in-depth 
              expertise and comprehensive range of services enable life sciences organizations to 
              accelerate digitization, enhance speed, efficiency, and innovation, while maintaining 
              compliance with evolving demands.
            </p>
          </div>

          {/* Right Video */}
          <div className="relative">
            <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-video">
              <Image 
                src="https://picsum.photos/600/340?random=2" 
                alt="Healthcare data visualization"
                width={600}
                height={340}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                  <Play className="h-6 w-6 text-white ml-1" />
                </div>
              </div>
              {/* Data visualization overlay */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <div className="text-sm font-medium text-gray-900">Turn health data insights into meaningful outcomes</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              To play this video, enable Statistics cookies. Google/YouTube may process your data – 
              <a href="#" className="text-blue-600 hover:underline">Learn more</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Key Capabilities Section
const KeyCapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      title: 'Commercial launch',
      description: 'and operations to simplify planning and execution and improve launch efficiency'
    },
    {
      title: 'Clinical services',
      description: 'to reduce the duration of drug development timelines'
    },
    {
      title: 'Manufacturing innovation', 
      description: 'to achieve end-to-end supply chain optimization, manufacturing execution excellence, transport management and ERP, including Industry 4.0'
    },
    {
      title: 'Regulatory compliance',
      description: 'to help clients continuously monitor clinical drug safety data across the entire product life cycle'
    },
    {
      title: 'Outsourcing',
      description: 'to improve the management and operation of company-wide infrastructures, application suites and business processes'
    },
    {
      title: 'Intelligent automation',
      description: 'to increase efficiency of operations by combining advanced analytics with IoT and AI for predictive maintenance'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-light text-gray-900 mb-8">Key capabilities</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              CGI expertise and services help life sciences organizations increase speed, efficiency and 
              innovation, while keeping pace with compliance demands.
            </p>
            
            <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-video">
              <Image 
                src="https://picsum.photos/500/280?random=3" 
                alt="Accelerating innovation in Life Sciences"
                width={500}
                height={280}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center cursor-pointer">
                  <Play className="h-4 w-4 text-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded">
                <div className="text-sm font-medium text-gray-900">Accelerating innovation in Life Sciences</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              To play this video, enable Statistics cookies. Google/YouTube may process your data – 
              <a href="#" className="text-blue-600 hover:underline">Learn more</a>.
            </p>
          </div>

          {/* Right Capabilities List */}
          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-900">{capability.title}</span>
                  <span className="text-gray-600"> {capability.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience and Expertise Section
const ExperienceSection: React.FC = () => {
  const stats = [
    {
      number: '700+',
      description: 'biotech/pharmaceutical projects completed for 50 clients'
    },
    {
      number: '95%',
      description: 'repeat engagements with life sciences clients'
    },
    {
      number: '11',
      description: 'of the top 20 biotech and pharmaceutical clients served globally'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-gray-900 mb-16 text-center">Experience and expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl lg:text-7xl font-bold text-purple-700 mb-4">
                {stat.number}
              </div>
              <p className="text-gray-600 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Case Studies Section
const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-gray-900 mb-16">CGI solutions and services have supported:</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <Image 
                  src="https://picsum.photos/400/200?random=4" 
                  alt="Pharmaceutical company case study"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-4 h-20 bg-gradient-to-b from-blue-600 to-purple-600 mb-4"></div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Several pharmaceutical company:</span> providing data cleansing as a 
                  part of the data migration process
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 2 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <Image 
                  src="https://picsum.photos/400/200?random=5" 
                  alt="Manufacturing processes case study"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-4 h-20 bg-gradient-to-b from-blue-600 to-purple-600 mb-4"></div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Several pharmaceutical companies:</span> enabling ISA-95 compliance by integrating 
                  data to automate processes, reduce costs, speed up production, and digitize their 
                  manufacturing processes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Related Sectors Section
const RelatedSectorsSection: React.FC = () => {
  const sectors = [
    {
      title: 'Health',
      description: 'CGI assists health clients in meeting the growing expectations of a digital population in a safe, secure, cost-effective and compliant manner that leverages emerging technology and research ecosystems.',
      link: '#'
    },
    {
      title: 'Manufacturing', 
      description: "CGI's innovative strategies and solutions enable manufacturers to transform from product-centric to customer-centric businesses by helping them embark on their Industry 4.0 journey and supporting their transformation end to end.",
      link: '#'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-gray-900 mb-16">Related sectors</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="h-2 bg-gray-300 mb-6"></div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{sector.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{sector.description}</p>
                <Button variant="link" className="p-0 text-gray-900 hover:text-blue-600">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// News and Thought Leadership Section
const NewsSection: React.FC = () => {
  const newsItems = [
    {
      type: 'Video',
      title: '2025 Voice of Our Clients – Health & life sciences',
      image: '/api/placeholder/300/200'
    },
    {
      type: 'Press release',
      title: 'CGI expands its presence in Québec City with the acquisition of Momentum Technologies', 
      image: '/api/placeholder/300/200'
    },
    {
      type: 'Video',
      title: "Transforming patient care with CGI's data-driven healthcare strategy",
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-gray-900 mb-16">News and thought leadership</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
              <CardContent className="p-0">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src="https://picsum.photos/300/200?random=6" 
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  {item.type === 'Video' && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="h-4 w-4 text-white ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{item.type}</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button variant="link" className="p-0 text-gray-900 hover:text-blue-600">
          See more
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

// Contact Expert Section
const ContactExpertSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-gray-900 mb-16">Contact our expert</h2>
        
        <Card className="border-0 shadow-lg max-w-4xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-48 h-48 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <Image 
                  src="https://picsum.photos/200/200?random=7" 
                  alt="Ben Goldberg"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Ben Goldberg</h3>
                <p className="text-lg text-blue-600 mb-6">Global Industry Lead, Health and Life Sciences</p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Ben Goldberg is the Global Industry Lead for Health and Life Sciences at CGI, where he 
                  engages with teams around the world to help define, develop, and foster our role as 
                  technology partner for health and care organizations.
                </p>
                <Button variant="link" className="p-0 text-gray-900 hover:text-blue-600">
                  View profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

// Main Page Component
const LifeSciencesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TechnologiesSolutionsSection />
      <VideoSection />
      <KeyCapabilitiesSection />
      <ExperienceSection />
      <CaseStudiesSection />
      <RelatedSectorsSection />
      <NewsSection />
      <ContactExpertSection />
    </div>
  );
};

export default LifeSciencesPage;