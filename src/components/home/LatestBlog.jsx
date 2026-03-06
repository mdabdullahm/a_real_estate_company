"use client";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "How to Securely Exchange Cryptocurrency in 2024",
    excerpt: "Security is the top priority when it comes to digital assets. Learn the best practices to keep your funds safe...",
    date: "Oct 24, 2024",
    author: "Admin",
    category: "Security",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Why Stablecoins are Becoming the Future of Payments",
    excerpt: "Stablecoins like USDT and USDC are bridging the gap between traditional finance and crypto. Here is why...",
    date: "Oct 20, 2024",
    author: "Exonpay Team",
    category: "Market News",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "A Beginner's Guide to Using Payeer in Bangladesh",
    excerpt: "Want to receive international payments? Payeer is a great option. Follow our step-by-step guide to get started...",
    date: "Oct 15, 2024",
    author: "Editor",
    category: "Tutorial",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
  },
];

const LatestBlog = () => {
  return (
    <section className="py-24 bg-gray-50/30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Resources & Insights</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Latest From Our Blog</h2>
            <p className="text-gray-500 text-lg">
              Stay updated with the latest news, security tips, and tutorials about the digital currency world.
            </p>
          </motion.div>
          
          <Link href="/blog">
            <button className="flex items-center space-x-2 bg-white border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group shadow-sm">
              <span>View All Posts</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              {/* Image Container */}
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                
                <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center space-x-2 font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestBlog;