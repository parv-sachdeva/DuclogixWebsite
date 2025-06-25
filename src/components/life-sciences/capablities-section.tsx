'use client';
import Image from "next/image";
import { useTranslations } from 'next-intl';

const KeyCapabilitiesSection: React.FC = () => {
    const t = useTranslations('lifeSciences.capabilities');

    const capabilities = [
        {
            title: t('items.commercialLaunch.title'),
            description: t('items.commercialLaunch.description')
        },
        {
            title: t('items.clinicalServices.title'),
            description: t('items.clinicalServices.description')
        },
        {
            title: t('items.manufacturingInnovation.title'),
            description: t('items.manufacturingInnovation.description')
        },
        {
            title: t('items.regulatoryCompliance.title'),
            description: t('items.regulatoryCompliance.description')
        },
        {
            title: t('items.outsourcing.title'),
            description: t('items.outsourcing.description')
        },
        {
            title: t('items.intelligentAutomation.title'),
            description: t('items.intelligentAutomation.description')
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl font-light text-gray-900 mb-8">{t('title')}</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {t('description')}
                        </p>

                        <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-video">
                            <Image
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                                alt="Accelerating innovation in Life Sciences"
                                width={500}
                                height={280}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded">
                                <div className="text-sm font-medium text-gray-900">Accelerating innovation in Life Sciences</div>
                            </div>
                        </div>
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

export default KeyCapabilitiesSection;