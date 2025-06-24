export interface CaseStudy {
  slug: string;
  imageUrl: string;
  title: string;
  company: string;
  summary: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  gallery?: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "bulkrna-app",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "bulkRNA App",
    company: "BioTech Research Institute",
    summary: "Developed a comprehensive bulk RNA sequencing analysis platform that streamlined genomic research workflows and reduced analysis time by 70%.",
    publishDate: "2024-03-15",
    readTime: "8 min read",
    tags: ["Bioinformatics", "RNA Sequencing", "Data Visualization", "React"],
    challenge: "The BioTech Research Institute was struggling with fragmented tools for bulk RNA sequencing analysis. Researchers had to use multiple software packages, leading to inefficient workflows, inconsistent results, and significant time delays in their genomic studies. The lack of a unified platform was hindering their ability to process large datasets efficiently.",
    solution: "We developed a comprehensive web-based bulkRNA analysis platform that integrates all necessary tools into a single, intuitive interface. The solution features automated quality control, differential expression analysis, pathway enrichment, and interactive visualization tools. Built with React and Next.js for the frontend, with a robust Python backend using FastAPI and integrated with popular bioinformatics libraries like DESeq2 and edgeR.",
    results: [
      "70% reduction in analysis time from weeks to days",
      "95% improvement in workflow consistency across research teams",
      "50% decrease in computational resource waste",
      "Enabled processing of 10x larger datasets",
      "Improved reproducibility with automated reporting features"
    ],
    technologies: ["React", "Next.js", "Python", "FastAPI", "DESeq2", "edgeR", "D3.js", "PostgreSQL"],    testimonial: {
      quote: "The bulkRNA app has revolutionized our research workflow. What used to take our team weeks now takes just days, and the quality of our analysis has improved dramatically.",
      author: "Dr. Sarah Chen",
      position: "Lead Bioinformatician, BioTech Research Institute"
    },
    gallery: ["https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
  },  {
    slug: "scrna-app",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "scRNA App",
    company: "Genomics Innovation Lab",
    summary: "Built a cutting-edge single-cell RNA sequencing analysis platform that enables researchers to explore cellular heterogeneity with unprecedented detail and speed.",
    publishDate: "2024-02-28",
    readTime: "10 min read",
    tags: ["Single-cell", "Machine Learning", "Data Science", "Vue.js"],
    challenge: "Single-cell RNA sequencing analysis requires sophisticated computational methods to handle the complexity and scale of the data. The Genomics Innovation Lab needed a platform that could perform clustering, trajectory analysis, and cell type identification while being accessible to researchers without extensive computational backgrounds.",
    solution: "We created an advanced scRNA analysis platform featuring automated cell clustering, trajectory inference, differential expression analysis, and cell type annotation. The platform incorporates machine learning algorithms for dimensionality reduction and clustering, with an intuitive drag-and-drop interface for creating analysis pipelines. Built with Vue.js frontend and Python backend utilizing Scanpy, Seurat, and custom ML models.",
    results: [
      "Enabled analysis of datasets with >1 million cells",
      "80% faster cell type identification process",
      "Improved accuracy in trajectory analysis by 40%",
      "Reduced barrier to entry for non-computational researchers",
      "Integrated with major single-cell databases for enhanced annotation"
    ],
    technologies: ["Vue.js", "Python", "Scanpy", "Seurat", "scikit-learn", "TensorFlow", "MongoDB", "Docker"],    testimonial: {
      quote: "This platform has made single-cell analysis accessible to our entire research team. The automated cell type identification alone has saved us months of manual work.",
      author: "Prof. Michael Rodriguez",
      position: "Director, Genomics Innovation Lab"
    },
    gallery: ["https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
  },  {
    slug: "biodiversity-app",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Biodiversity App",
    company: "EcoConservation Foundation",
    summary: "Developed a comprehensive biodiversity monitoring platform that combines citizen science data collection with advanced analytics to track ecosystem health across multiple regions.",
    publishDate: "2024-01-20",
    readTime: "12 min read",
    tags: ["Environmental Science", "Mobile App", "GIS", "Conservation"],
    challenge: "The EcoConservation Foundation needed a scalable solution to monitor biodiversity across vast geographical areas. Traditional methods were time-consuming, expensive, and limited in scope. They required a platform that could engage citizen scientists while maintaining data quality and providing actionable insights for conservation efforts.",
    solution: "We built a comprehensive biodiversity monitoring ecosystem consisting of a mobile app for field data collection, a web dashboard for data analysis, and automated reporting tools. The solution integrates GIS mapping, species identification using machine learning, and real-time data validation. The platform supports offline data collection and automatic synchronization when connectivity is restored.",
    results: [
      "Increased data collection by 300% through citizen science engagement",
      "90% improvement in data accuracy through automated validation",
      "Real-time monitoring of 50+ protected areas",
      "Reduced monitoring costs by 60%",
      "Enabled predictive modeling for conservation planning"
    ],
    technologies: ["React Native", "Angular", "Node.js", "Express", "MongoDB", "GIS", "TensorFlow", "AWS"],    testimonial: {
      quote: "The biodiversity app has transformed how we approach conservation. We now have real-time insights into ecosystem health that guide our conservation strategies.",
      author: "Dr. Emily Watson",
      position: "Chief Conservation Officer, EcoConservation Foundation"
    },
    gallery: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1574482620253-d67ca3b5dcce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
  },  {
    slug: "rnaseq-nextflow-pipeline",
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Rnaseq Nextflow pipeline",
    company: "Precision Medicine Center",
    summary: "Engineered a robust, scalable RNA sequencing pipeline using Nextflow that automated the entire analysis workflow from raw reads to biological insights.",
    publishDate: "2023-12-10",
    readTime: "15 min read",
    tags: ["Nextflow", "Pipeline", "DevOps", "Automation"],
    challenge: "The Precision Medicine Center was processing hundreds of RNA-seq samples monthly using manual, error-prone workflows. They needed a scalable, reproducible pipeline that could handle varying sample types, ensure quality control, and integrate with their existing infrastructure while maintaining compliance with regulatory standards.",
    solution: "We developed a comprehensive Nextflow pipeline that automates the entire RNA-seq analysis workflow. The pipeline includes quality control, read alignment, quantification, differential expression analysis, and functional annotation. It features automatic resource management, error handling, resume capabilities, and generates comprehensive reports. The solution is containerized using Docker and can run on various compute environments.",
    results: [
      "100% automation of RNA-seq analysis workflow",
      "95% reduction in processing errors",
      "80% faster turnaround time for results",
      "Scalable to process 1000+ samples simultaneously",
      "Full traceability and reproducibility for regulatory compliance"
    ],
    technologies: ["Nextflow", "Docker", "Singularity", "Python", "R", "STAR", "RSEM", "DESeq2", "AWS Batch"],    testimonial: {
      quote: "The Nextflow pipeline has revolutionized our RNA-seq analysis capabilities. We can now process samples at scale while maintaining the highest quality standards.",
      author: "Dr. James Patterson",
      position: "Bioinformatics Director, Precision Medicine Center"
    },
    gallery: ["https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudiesData.find(study => study.slug === slug);
};

export const getAllCaseStudies = (): CaseStudy[] => {
  return caseStudiesData;
};
