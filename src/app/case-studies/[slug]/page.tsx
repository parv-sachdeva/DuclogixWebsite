import React from 'react';
import { useParams } from 'next/navigation';

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Convert slug to title case for display
  const title = String(slug)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-20">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-purple-800">{title}</h1>
        <p className="text-lg text-gray-700 mb-6">This case study page is coming soon. Stay tuned for our full blog post!</p>
        <div className="mt-8">
          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">Blog Coming Soon</span>
        </div>
      </div>
    </div>
  );
} 