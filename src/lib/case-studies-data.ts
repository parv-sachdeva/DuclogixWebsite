export interface CaseStudy {
  slug: string;
  imageUrl: string;
  publishDate: string;
  technologies: string[];
  gallery?: string[];
  // Translation keys for dynamic content
  titleKey: string;
  companyKey: string;
  summaryKey: string;
  readTimeKey: string;
  tagsKey: string;
  challengeKey: string;
  solutionKey: string;
  resultsKey: string;
  testimonialKey?: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "bulkrna-app",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    titleKey: "caseStudies.bulkrnaApp.title",
    companyKey: "caseStudies.bulkrnaApp.company",
    summaryKey: "caseStudies.bulkrnaApp.summary",
    publishDate: "2024-03-15",
    readTimeKey: "caseStudies.bulkrnaApp.readTime",
    tagsKey: "caseStudies.bulkrnaApp.tags",
    challengeKey: "caseStudies.bulkrnaApp.challenge",
    solutionKey: "caseStudies.bulkrnaApp.solution",
    resultsKey: "caseStudies.bulkrnaApp.results",
    technologies: ["React", "Next.js", "Python", "FastAPI", "DESeq2", "edgeR", "D3.js", "PostgreSQL"],
    testimonialKey: "caseStudies.bulkrnaApp.testimonial",
    gallery: ["https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
  },
  {
    slug: "scrna-app",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    titleKey: "caseStudies.scrnaApp.title",
    companyKey: "caseStudies.scrnaApp.company",
    summaryKey: "caseStudies.scrnaApp.summary",
    publishDate: "2024-02-28",
    readTimeKey: "caseStudies.scrnaApp.readTime",
    tagsKey: "caseStudies.scrnaApp.tags",
    challengeKey: "caseStudies.scrnaApp.challenge",
    solutionKey: "caseStudies.scrnaApp.solution",
    resultsKey: "caseStudies.scrnaApp.results",
    technologies: ["Vue.js", "Python", "Scanpy", "Seurat", "scikit-learn", "TensorFlow", "MongoDB", "Docker"],
    testimonialKey: "caseStudies.scrnaApp.testimonial",
    gallery: ["https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
  },
  {
    slug: "biodiversity-app",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    titleKey: "caseStudies.biodiversityApp.title",
    companyKey: "caseStudies.biodiversityApp.company",
    summaryKey: "caseStudies.biodiversityApp.summary",
    publishDate: "2024-01-20",
    readTimeKey: "caseStudies.biodiversityApp.readTime",
    tagsKey: "caseStudies.biodiversityApp.tags",
    challengeKey: "caseStudies.biodiversityApp.challenge",
    solutionKey: "caseStudies.biodiversityApp.solution",
    resultsKey: "caseStudies.biodiversityApp.results",
    technologies: ["React Native", "Angular", "Node.js", "Express", "MongoDB", "GIS", "TensorFlow", "AWS"],
    testimonialKey: "caseStudies.biodiversityApp.testimonial",
    gallery: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1574482620253-d67ca3b5dcce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
  },
  {
    slug: "rnaseq-nextflow-pipeline",
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    titleKey: "caseStudies.rnaseqPipeline.title",
    companyKey: "caseStudies.rnaseqPipeline.company",
    summaryKey: "caseStudies.rnaseqPipeline.summary",
    publishDate: "2023-12-10",
    readTimeKey: "caseStudies.rnaseqPipeline.readTime",
    tagsKey: "caseStudies.rnaseqPipeline.tags",
    challengeKey: "caseStudies.rnaseqPipeline.challenge",
    solutionKey: "caseStudies.rnaseqPipeline.solution",
    resultsKey: "caseStudies.rnaseqPipeline.results",
    technologies: ["Nextflow", "Docker", "Singularity", "Python", "R", "STAR", "RSEM", "DESeq2", "AWS Batch"],
    testimonialKey: "caseStudies.rnaseqPipeline.testimonial",
    gallery: ["https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudiesData.find(study => study.slug === slug);
};

export const getAllCaseStudies = (): CaseStudy[] => {
  return caseStudiesData;
};
