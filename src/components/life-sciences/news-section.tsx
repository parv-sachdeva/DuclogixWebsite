import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

// News and Thought Leadership Section
const NewsSection: React.FC = () => {
    const newsItems = [
        {
            type: 'Video',
            title: '2025 Voice of Our Clients – Health & life sciences',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop'
        },
        {
            type: 'Press release',
            title: 'CGI expands its presence in Québec City with the acquisition of Momentum Technologies',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop'
        },
        {
            type: 'Video',
            title: "Transforming patient care with CGI's data-driven healthcare strategy",
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-light text-gray-900 mb-16">News and thought leadership</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {newsItems.map((item, index) => (
                        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                            <CardContent className="p-0">
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                    {item.type === 'Video' && (
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                                <Play className="h-4 w-4 text-white ml-0.5" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <div className="text-sm text-gray-500 mb-2">{item.type}</div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Button variant="link" className="p-0 text-gray-900 hover:text-blue-600">
                    See more
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </section>
    );
};

export default NewsSection;