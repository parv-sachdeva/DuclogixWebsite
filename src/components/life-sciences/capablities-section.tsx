import Image from "next/image";

const KeyCapabilitiesSection: React.FC = () => {
    const capabilities = [
        {
            title: 'Commercial launch',
            description: 'and operations to simplify planning and execution and improve launch efficiency'
        },
        {
            title: 'Clinical services',
            description: 'to reduce the duration of drug development timelines'
        },
        {
            title: 'Manufacturing innovation',
            description: 'to achieve end-to-end supply chain optimization, manufacturing execution excellence, transport management and ERP, including Industry 4.0'
        },
        {
            title: 'Regulatory compliance',
            description: 'to help clients continuously monitor clinical drug safety data across the entire product life cycle'
        },
        {
            title: 'Outsourcing',
            description: 'to improve the management and operation of company-wide infrastructures, application suites and business processes'
        },
        {
            title: 'Intelligent automation',
            description: 'to increase efficiency of operations by combining advanced analytics with IoT and AI for predictive maintenance'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl font-light text-gray-900 mb-8">Key capabilities</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            CGI expertise and services help life sciences organizations increase speed, efficiency and
                            innovation, while keeping pace with compliance demands.
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