import KeyCapabilitiesSection from '@/components/life-sciences/capablities-section';
import ContactExpertSection from '@/components/life-sciences/contact-expert';
import ExperienceSection from '@/components/life-sciences/experience-section';
import HeroSection from '@/components/life-sciences/hero';
import NewsSection from '@/components/life-sciences/news-section';
import RelatedSectorsSection from '@/components/life-sciences/related-sectors';
import TechnologiesSolutionsSection from '@/components/life-sciences/technologies-solution';
import VideoSection from '@/components/life-sciences/video-section';
import CaseStudiesSection from '@/components/life-sciences/case-studies';
import React from 'react';

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
