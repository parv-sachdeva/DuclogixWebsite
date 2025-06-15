import Image from "next/image";

const VideoSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
                            Transforming patient care with our data-driven healthcare strategy
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            As life sciences organizations work to minimize regulatory and competitive impacts while
                            maximizing revenue potential, CGI helps our clients worldwide reduce costs and drive
                            innovation through automation and process optimization. Discover how our in-depth
                            expertise and comprehensive range of services enable life sciences organizations to
                            accelerate digitization, enhance speed, efficiency, and innovation, while maintaining
                            compliance with evolving demands.
                        </p>
                    </div>

                    {/* Right Video */}
                    <div className="relative">
                        <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-video">
                            <Image
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                                alt="Healthcare data visualization"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />              {/* Data visualization overlay */}
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                                <div className="text-sm font-medium text-gray-900">Turn health data insights into meaningful outcomes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;