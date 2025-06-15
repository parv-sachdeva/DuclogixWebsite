import { Badge } from "@/components/ui/badge";
import { Network, Puzzle } from "lucide-react";

const TechnologiesSolutionsSection: React.FC = () => {
    const technologies = [
        'Advanced analytics',
        'Digital transformation',
        'Cloud & hybrid IT',
        'Cybersecurity',
        'Intelligent automation'
    ];

    const solutions = [
        'CGI BICEPS',
        "CGI's Procos"
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Enabling Technologies */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Network className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-semibold text-gray-900">Enabling technologies</h2>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {technologies.map((tech, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="px-4 py-2 text-sm border-gray-300 hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-colors"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Puzzle className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-semibold text-gray-900">Solutions</h2>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {solutions.map((solution, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="px-4 py-2 text-sm border-gray-300 hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-colors"
                                >
                                    {solution}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSolutionsSection;