import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "@/components/home/footer";
import ContactSection from "@/components/home/contact";
import Header from "@/components/home/header";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Dynamic metadata generation based on locale
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });
  
  // Fallback to English if translation doesn't exist
  const title = t.raw('title') || "Ducologix - Transforming Genomics with Intelligent Software";
  const description = t.raw('description') || "Empowering bioinformatics enterprises with custom data solutions, innovative software tools, and cutting-edge genomics analysis platforms. Expert consulting for life sciences and biotechnology companies.";
  
  return {
    title,
    description,
    keywords: "genomics, bioinformatics, data analysis, life sciences, biotechnology, RNA-seq, software development, consulting, data visualization, research tools",
    authors: [{ name: "Ducologix" }],
    creator: "Ducologix",
    publisher: "Ducologix",
    robots: "index, follow",
    alternates: {
      canonical: `https://ducologix.com/${locale}`,
      languages: {
        'en': 'https://ducologix.com/en',
        'de': 'https://ducologix.com/de',
        'fr': 'https://ducologix.com/fr',
        'es': 'https://ducologix.com/es',
        'zh': 'https://ducologix.com/zh',
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: `https://ducologix.com/${locale}`,
      siteName: "Ducologix",
      title,
      description,
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
      title,
      description,
      images: ["/og-image.jpg"],
    },
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#8B5CF6",
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href={`https://ducologix.com/${locale}`} />
        
        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="en" href="https://ducologix.com/en" />
        <link rel="alternate" hrefLang="de" href="https://ducologix.com/de" />
        <link rel="alternate" hrefLang="fr" href="https://ducologix.com/fr" />
        <link rel="alternate" hrefLang="es" href="https://ducologix.com/es" />
        <link rel="alternate" hrefLang="zh" href="https://ducologix.com/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://ducologix.com/en" />
        
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="ICBM" content="37.7749, -122.4194" />
        <meta name="DC.title" content="Ducologix - Genomics and Bioinformatics Solutions" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ducologix",
              "description": "Empowering bioinformatics enterprises with custom data solutions and innovative software tools",
              "url": `https://ducologix.com/${locale}`,
              "logo": "https://ducologix.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service",
                "availableLanguage": ["en", "de", "fr", "es", "zh"]
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
              "areaServed": {
                "@type": "GeoShape",
                "name": "Worldwide"
              },
              "serviceType": [
                "Bioinformatics Consulting",
                "Genomics Software Development", 
                "Data Analysis Solutions",
                "Life Sciences Technology",
                "RNA-seq Analysis",
                "Single-cell Analysis"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              }
            })
          }}
        />
        
        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": `https://ducologix.com/${locale}`
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <ContactSection />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
