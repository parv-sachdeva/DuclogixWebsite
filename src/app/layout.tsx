import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ducologix - Transforming Genomics with Intelligent Software",
  description: "Empowering bioinformatics enterprises with custom data solutions, innovative software tools, and cutting-edge genomics analysis platforms. Expert consulting for life sciences and biotechnology companies.",
  keywords: "genomics, bioinformatics, data analysis, life sciences, biotechnology, RNA-seq, software development, consulting, data visualization, research tools",
  authors: [{ name: "Ducologix" }],
  creator: "Ducologix",
  publisher: "Ducologix",
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "Ducologix",
    title: "Ducologix - Transforming Genomics with Intelligent Software",
    description: "Empowering bioinformatics enterprises with custom data solutions, innovative software tools, and cutting-edge genomics analysis platforms.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ducologix - Genomics and Bioinformatics Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ducologix - Transforming Genomics with Intelligent Software",
    description: "Empowering bioinformatics enterprises with custom data solutions and innovative software tools.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8B5CF6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ducologix.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta name="theme-color" content="#8B5CF6" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ducologix",
              "description": "Empowering bioinformatics enterprises with custom data solutions and innovative software tools",
              "url": "https://ducologix.com",
              "logo": "https://ducologix.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://linkedin.com/company/ducologix",
                "https://twitter.com/ducologix"
              ],
              "foundingDate": "2020",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Ducologix Team"
                }
              ],
              "areaServed": "Worldwide",
              "serviceType": [
                "Bioinformatics Consulting",
                "Genomics Software Development", 
                "Data Analysis Solutions",
                "Life Sciences Technology"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
