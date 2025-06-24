import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About us', href: '/about' },
  ];

  const resourceLinks = [
    { name: 'Articles', href: '/articles' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Case studies', href: '/case-studies' },
    { name: 'Podcasts', href: '/podcasts' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'Facebook', href: '#', icon: Facebook },
  ];

  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text py-2 mb-4">Ducologix</div>
              <p className="text-lg font-medium text-gray-700 mb-4">
                Insights you can act on
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Founded in 1976, CGI is among the largest IT and business consulting 
                services firms in the world. We are insights-driven and outcomes-focused 
                to help accelerate returns on your investments.
              </p>
            </div>
          </div>

          {/* Combined Links Section */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Company Links */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-6">Company</h3>
                <ul className="space-y-4">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resource Center */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-6">Resource center</h3>
                <ul className="space-y-4">
                  {resourceLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter and Social */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold text-gray-900 mb-6">Discover more about Ducologix</h3>
            
            <div className="mb-8">
              <p className="text-gray-700 mb-4">Keeping you informed</p>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200"
              >
                Subscribe
              </Button>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} Ducologix Inc.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
              <Link 
                href="/privacy" 
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies" 
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
              >
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;