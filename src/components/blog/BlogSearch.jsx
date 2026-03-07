"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, User, ArrowRight, X, TrendingUp } from "lucide-react";
import Link from "next/link";

// ব্লগ পোস্টের ডামি ডেটা
const allPosts = [
  {
    id: 1,
    title: "How to Securely Exchange Crypto in 2024",
    category: "Security",
    date: "Oct 24, 2024",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400",
    desc: "Learn the essential steps to keep your digital assets safe during exchange."
  },
  {
    id: 2,
    title: "Top 5 Crypto Trends to Watch This Year",
    category: "Crypto News",
    date: "Oct 22, 2024",
    author: "Team",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=400",
    desc: "Discover what's happening in the global crypto market right now."
  },
  {
    id: 3,
    title: "A Complete Guide to Payeer Wallet",
    category: "Tutorials",
    date: "Oct 20, 2024",
    author: "Editor",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400",
    desc: "Everything you need to know about setting up and using Payeer safely."
  },
  {
    id: 4,
    title: "Understanding Market Volatility",
    category: "Market Analysis",
    date: "Oct 18, 2024",
    author: "Analyst",
    image: "https://images.unsplash.com/photo-1611974714024-4607a50d6525?q=80&w=400",
    desc: "Why crypto prices move so fast and how to plan your exchanges."
  },
  {
    id: 5,
    title: "Platform Security Update: V2.0",
    category: "Platform Updates",
    date: "Oct 15, 2024",
    author: "Dev Team",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400",
    desc: "We've improved our exchange speed and security protocols."
  },
  {
    id: 6,
    title: "5 Tips for Fast Exchange",
    category: "Exchange Tips",
    date: "Oct 12, 2024",
    author: "Staff",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400",
    desc: "Simple tricks to get your funds faster on our platform."
  }
];

const categories = ["All Posts", "Crypto News", "Exchange Tips", "Security", "Tutorials", "Market Analysis", "Platform Updates"];

const BlogContent = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  // ফিল্টারিং লজিক (Search + Category)
  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = activeCategory === "All Posts" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-full mx-auto px-4 pb-24">
      
      {/* --- Search & Filter Bar Section --- */}
      <section className="relative z-30 -mt-12 mb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] p-5 shadow-2xl shadow-gray-200/50 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..." 
                  className="w-full bg-gray-50 border border-transparent focus:border-blue-300 focus:bg-white rounded-2xl py-4 pl-14 pr-12 outline-none transition-all font-medium text-gray-700"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors">
                    <X size={16} className="text-gray-500" />
                  </button>
                )}
              </div>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all">
                {"Search"}
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                    activeCategory === cat
                      ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200"
                      : "bg-white border-gray-100 text-gray-500 hover:border-blue-200 hover:text-blue-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Blog Post Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-52 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-blue-600 uppercase">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={12}/> {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{post.desc}</p>
                  <Link href={`/blog/${post.id}`} className="text-blue-600 font-bold text-sm flex items-center gap-2 group/link">
                    {"Read More"} <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <h3 className="text-2xl font-bold text-gray-400">{"No articles found matching your search."}</h3>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogContent;