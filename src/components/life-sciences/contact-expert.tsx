import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                                    width={200}
                                    height={200}
                                    alt="Ben Goldberg"
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

export default ContactExpertSection;