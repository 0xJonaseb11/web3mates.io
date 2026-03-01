"use client";

import Link from "next/link";
import LoadingSpinner from "@/components/LoadingSpinner";
import useLoading from "@/hooks/useLoading";


const blogPosts = [
  {
    id: "1",
    title: "Starting Your Web3 Journey in Rwanda and Beyond",
    content:
      "Discover how Rwanda is becoming a hub for Web3 innovation, with opportunities for developers and entrepreneurs to shape Africa's digital future.",
    date: "2025-03-20",
  },
  {
    id: "2",
    title: "DeFi Solutions Tailored for African Markets",
    content:
      "Explore decentralized finance projects addressing Africa's unique financial challenges and unlocking new economic possibilities.",
    date: "2025-03-18",
  },
  {
    id: "3",
    title: "Expanding Blockchain Education Across Rwanda",
    content:
      "Learn about our initiatives to bring blockchain knowledge to universities, startups, and communities in Rwanda.",
    date: "2025-03-15",
  },
];

export default function BlogPosts() {
  const loading = useLoading();

  if (loading) {
    return <LoadingSpinner isLoading={loading} />;
  }

  return (
    <main className="py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/events"
          className="inline-flex items-center text-[#0066FF] hover:text-blue-700 mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
          aria-label="Back to Events page"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Events
        </Link>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1C39] mb-8 sm:mb-10 lg:mb-12">
          Insights & Updates from Rwanda&apos;s Web3 Frontier
        </h1>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="border-b border-gray-300 pb-6 sm:pb-8"
            >
              <time
                className="text-[#0066FF] text-xs sm:text-sm mb-2 block"
                dateTime={post.date}
              >
                {new Date(post.date).toLocaleDateString("en-RW", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0B1C39] mb-3 sm:mb-4">
                {post.title}
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                {post.content}
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="text-[#0066FF] font-semibold hover:text-blue-700 transition-colors text-sm sm:text-base"
                aria-label={`Read more about: ${post.title}`}
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
