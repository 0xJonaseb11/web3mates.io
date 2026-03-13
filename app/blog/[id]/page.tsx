"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock blog posts data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: "1",
    title: "Starting Your Web3 Journey in Rwanda and Beyond",
    content: `
      <p>Rwanda is rapidly emerging as a hub for Web3 innovation in Africa, creating unprecedented opportunities for developers, entrepreneurs, and tech enthusiasts to shape the continent's digital future.</p>
      
      <h2>The Rise of Web3 in Rwanda</h2>
      <p>With its forward-thinking government policies, robust digital infrastructure, and growing tech ecosystem, Rwanda has positioned itself as a leader in blockchain adoption across Africa. The country's commitment to becoming a knowledge-based economy aligns perfectly with the decentralized, transparent nature of Web3 technologies.</p>
      
      <h2>Key Opportunities for Developers</h2>
      <p>Rwanda's Web3 ecosystem offers several unique advantages:</p>
      <ul>
        <li><strong>Government Support:</strong> Clear regulatory frameworks and government backing for blockchain initiatives</li>
        <li><strong>Growing Market:</strong> Increasing demand for blockchain solutions in finance, supply chain, and governance</li>
        <li><strong>Community:</strong> Active developer communities and regular meetups</li>
        <li><strong>Education:</strong> University partnerships and training programs</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>For those looking to begin their Web3 journey in Rwanda:</p>
      <ol>
        <li>Join local blockchain communities and meetups</li>
        <li>Participate in hackathons and workshops</li>
        <li>Connect with mentors and industry professionals</li>
        <li>Start building projects that address local challenges</li>
      </ol>
      
      <h2>Looking Ahead</h2>
      <p>As Rwanda continues to invest in digital transformation, the Web3 ecosystem will only grow stronger. This presents a unique opportunity for early adopters to establish themselves as leaders in Africa's blockchain revolution.</p>
    `,
    excerpt:
      "Discover how Rwanda is becoming a hub for Web3 innovation, with opportunities for developers and entrepreneurs to shape Africa's digital future.",
    date: "2025-03-20",
    author: "Web3 Mates Team",
    readTime: "5 min read",
    tags: ["Web3", "Rwanda", "Blockchain", "Innovation"],
  },
  {
    id: "2",
    title: "DeFi Solutions Tailored for African Markets",
    content: `
      <p>Decentralized finance (DeFi) is revolutionizing how Africans access financial services, offering solutions that are specifically designed to address the continent's unique economic challenges.</p>
      
      <h2>Understanding Africa's Financial Landscape</h2>
      <p>Africa faces several financial inclusion challenges that traditional banking has struggled to solve:</p>
      <ul>
        <li>Limited access to traditional banking services</li>
        <li>High remittance costs for cross-border transactions</li>
        <li>Currency volatility and inflation issues</li>
        <li>Lack of credit history for small businesses</li>
      </ul>
      
      <h2>DeFi Solutions Making a Difference</h2>
      <p>Several innovative DeFi projects are addressing these challenges:</p>
      <ul>
        <li><strong>Micro-lending Platforms:</strong> Providing small loans to entrepreneurs without traditional collateral</li>
        <li><strong>Stablecoin Solutions:</strong> Offering protection against local currency volatility</li>
        <li><strong>Cross-border Payments:</strong> Reducing remittance costs significantly</li>
        <li><strong>Yield Farming:</strong> Creating new income opportunities for savers</li>
      </ul>
      
      <h2>Success Stories</h2>
      <p>Across Africa, DeFi platforms are already making an impact:</p>
      <ul>
        <li>Farmers accessing credit through tokenized assets</li>
        <li>Small businesses receiving international payments instantly</li>
        <li>Individuals earning yields on their savings</li>
        <li>Communities pooling resources for collective investment</li>
      </ul>
      
      <h2>The Road Ahead</h2>
      <p>As DeFi adoption grows in Africa, we can expect to see more localized solutions, better user experiences, and increased regulatory clarity. The potential for financial inclusion and economic empowerment is enormous.</p>
    `,
    excerpt:
      "Explore decentralized finance projects addressing Africa's unique financial challenges and unlocking new economic possibilities.",
    date: "2025-03-18",
    author: "Web3 Mates Team",
    readTime: "6 min read",
    tags: ["DeFi", "Financial Inclusion", "Africa", "Blockchain"],
  },
  {
    id: "3",
    title: "Expanding Blockchain Education Across Rwanda",
    content: `
      <p>Education is the foundation of any technological revolution, and Rwanda is taking significant steps to ensure its citizens are prepared for the blockchain future.</p>
      
      <h2>University Partnerships</h2>
      <p>We're working closely with leading universities in Rwanda to integrate blockchain education into their curricula:</p>
      <ul>
        <li><strong>University of Rwanda:</strong> Offering blockchain courses in computer science and engineering programs</li>
        <li><strong>Kigali Institute of Science and Technology:</strong> Hosting blockchain workshops and hackathons</li>
        <li><strong>Rwanda Polytechnic:</strong> Providing practical blockchain training for vocational students</li>
      </ul>
      
      <h2>Community Workshops</h2>
      <p>Beyond formal education, we're reaching communities through:</p>
      <ul>
        <li>Free weekend workshops for beginners</li>
        <li>Advanced training sessions for developers</li>
        <li>Entrepreneurship programs focused on blockchain startups</li>
        <li>Youth outreach programs in schools</li>
      </ul>
      
      <h2>Online Learning Resources</h2>
      <p>To make blockchain education accessible to everyone, we've developed:</p>
      <ul>
        <li>Comprehensive online courses in local languages</li>
        <li>Interactive coding tutorials and challenges</li>
        <li>Video content featuring local experts</li>
        <li>Community forums for peer learning</li>
      </ul>
      
      <h2>Measuring Impact</h2>
      <p>Our educational initiatives have already shown promising results:</p>
      <ul>
        <li>Over 500 students enrolled in blockchain courses</li>
        <li>25+ community workshops completed</li>
        <li>15 blockchain projects launched by students</li>
        <li>Growing interest from local businesses</li>
      </ul>
      
      <h2>Future Plans</h2>
      <p>We're expanding our educational reach to include:</p>
      <ul>
        <li>Mobile learning apps for rural areas</li>
        <li>Partnerships with international blockchain organizations</li>
        <li>Certification programs recognized by industry</li>
        <li>Research initiatives in blockchain applications</li>
      </ul>
    `,
    excerpt:
      "Learn about our initiatives to bring blockchain knowledge to universities, startups, and communities in Rwanda.",
    date: "2025-03-15",
    author: "Web3 Mates Team",
    readTime: "7 min read",
    tags: ["Education", "Blockchain", "Rwanda", "Community"],
  },
];

import { use } from "react";

export default function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/events/blog"
              className="inline-flex mt-6 items-center text-[#0066FF] hover:text-blue-700 mb-6 transition-colors text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>

            <div className="mb-6">
              <time
                className="text-[#0066FF] text-sm mb-2 block"
                dateTime={post.date}
              >
                {new Date(post.date).toLocaleDateString("en-RW", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1C39] mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 sm:p-8 lg:p-12 shadow-lg"
        >
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Share this article
            </h3>
            <div className="flex gap-4">
              <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </button>
              <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
