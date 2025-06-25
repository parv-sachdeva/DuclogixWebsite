'use client';
import React from 'react';
import {
  BusinessConsultingHero,
  CapabilitiesSection,
  CLevelServicesSection,
  ServiceTagsSection,
  ValuePropositionSection,
  ClientStoriesSection,
  BusinessLeadersSection,
  VoiceOfClientsSection,
  LatestNewsSection
} from '@/components/business-consulting/BusinessConsultingComponents';

const BusinessConsultingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <BusinessConsultingHero />
      <CapabilitiesSection />
      <CLevelServicesSection />
      <ServiceTagsSection />
      <ValuePropositionSection />
      <ClientStoriesSection />
      <BusinessLeadersSection />
      <VoiceOfClientsSection />
      <LatestNewsSection />
    </div>
  );
};

export default BusinessConsultingPage;
