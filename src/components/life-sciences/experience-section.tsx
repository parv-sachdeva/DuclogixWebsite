const ExperienceSection: React.FC = () => {
    const stats = [
        {
            number: '700+',
            description: 'biotech/pharmaceutical projects completed for 50 clients'
        },
        {
            number: '95%',
            description: 'repeat engagements with life sciences clients'
        },
        {
            number: '11',
            description: 'of the top 20 biotech and pharmaceutical clients served globally'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-light text-gray-900 mb-16 text-center">Experience and expertise</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-6xl lg:text-7xl font-bold text-purple-700 mb-4">
                                {stat.number}
                            </div>
                            <p className="text-gray-600 leading-relaxed">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;