import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Tag, CheckCircle, Quote, Users } from 'lucide-react';
import { getCaseStudyBySlug } from '@/lib/case-studies-data';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/#case-studies" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-800 to-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center text-purple-200">
              <Calendar className="h-4 w-4 mr-2" />
              {formatDate(caseStudy.publishDate)}
            </div>
            <div className="flex items-center text-purple-200">
              <Clock className="h-4 w-4 mr-2" />
              {caseStudy.readTime}
            </div>
            <div className="flex items-center text-purple-200">
              <Users className="h-4 w-4 mr-2" />
              {caseStudy.company}
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{caseStudy.title}</h1>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">{caseStudy.summary}</p>
          
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center bg-purple-700 text-purple-100 px-3 py-1 rounded-full text-sm"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="relative h-96 mb-12 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={caseStudy.imageUrl}
            alt={caseStudy.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Challenge Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
          <div className="prose prose-lg prose-purple max-w-none">
            <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
          <div className="prose prose-lg prose-purple max-w-none">
            <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudy.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200 hover:border-purple-300 transition-colors"
              >
                <span className="font-medium text-gray-900">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          <div className="grid gap-4">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="flex items-start bg-green-50 rounded-lg p-4 border border-green-200">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800">{result}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
              <Quote className="h-8 w-8 text-purple-600 mb-4" />              <blockquote className="text-xl text-gray-800 italic mb-6 leading-relaxed">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {caseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{caseStudy.testimonial.author}</div>
                  <div className="text-gray-600">{caseStudy.testimonial.position}</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Gallery */}
        {caseStudy.gallery && caseStudy.gallery.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.gallery.map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src={image}
                    alt={`${caseStudy.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Project?</h2>          <p className="text-purple-100 mb-6">
            Let&apos;s discuss how we can help you achieve similar results with innovative solutions tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </section>
      </div>
    </div>
  );
}