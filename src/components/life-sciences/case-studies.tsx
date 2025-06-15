import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
                                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop"
                                    alt="Pharmaceutical company case study"
                                    width={800}
                                    height={600}
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
                                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop"
                                    alt="Manufacturing processes case study"
                                    width={800}
                                    height={600}
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

export default CaseStudiesSection;