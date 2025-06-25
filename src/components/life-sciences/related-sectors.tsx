'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';

const RelatedSectorsSection: React.FC = () => {
    const t = useTranslations('lifeSciences.relatedSectors');
    const tCommon = useTranslations('common');
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

    return (        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-light text-gray-900 mb-16">{t('title')}</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {sectors.map((sector, index) => (
                        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="p-8">
                                <div className="h-2 bg-gray-300 mb-6"></div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{sector.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{sector.description}</p>                                <Button variant="link" className="p-0 text-gray-900 hover:text-blue-600">
                                    {tCommon('learnMore')}
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

export default RelatedSectorsSection;