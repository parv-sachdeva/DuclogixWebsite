'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ChevronDown, ChevronUp, Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Replace 'your-formspree-id' with your actual Formspree form ID
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => {
          setIsSubmitted(false);
          setIsExpanded(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            How can we help?
          </h2>
          
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="secondary"
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300"
          >
            Contact
            {isExpanded ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Expandable Contact Form */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-w-2xl mx-auto mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
                <p className="text-white/80">
                  Your message has been sent successfully. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-white mb-2 block">
                    Company
                  </Label>
                  <Input
                    id="company"
                    {...register('company')}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white mb-2 block">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                    placeholder="What can we help you with?"
                  />
                  {errors.subject && (
                    <p className="text-red-300 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white resize-none"
                    placeholder="Tell us more about your needs..."
                  />
                  {errors.message && (
                    <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 rounded-lg transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;