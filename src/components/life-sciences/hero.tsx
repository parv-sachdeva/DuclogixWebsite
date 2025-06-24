'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const HeroSection: React.FC = () => {
    const t = useTranslations('lifeSciences.hero');
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

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3"
                            >
                                {tCommon('newsAndClientStories')}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                className="border-gray-900 text-gray-900 hover:bg-gray-50 px-6 py-3"
                            >
                                {tCommon('exploreInYourGeography')}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative rounded-lg overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                                alt="Life sciences researcher working with microscope"
                                width={800}
                                height={600}
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

export default HeroSection;