"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, ArrowRight, X, ChevronLeft, ChevronRight, Clock, Newspaper } from "lucide-react";
import Link from "next/link";

// ডামি ডেটা আগের মতোই থাকবে...
const allPosts = [
  { id: 1, title: "How to Securely Exchange Crypto in 2024", category: "Security", date: "Oct 24", author: "Admin", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400", desc: "Learn the essential steps to keep your digital assets safe.", time: "5 min read" },
  { id: 2, title: "Top 5 Crypto Trends to Watch This Year", category: "Crypto News", date: "Oct 22", author: "Team", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=400", desc: "Discover what's happening in the global crypto market.", time: "8 min read" },
  { id: 3, title: "A Complete Guide to Payeer Wallet", category: "Tutorials", date: "Oct 20", author: "Editor", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400", desc: "Everything you need to know about setting up Payeer.", time: "10 min read" },
  { id: 4, title: "Understanding Market Volatility", category: "Market Analysis", date: "Oct 18", author: "Analyst", image: "https://images.unsplash.com/photo-1611974714024-4607a50d6525?q=80&w=400", desc: "Why crypto prices move so fast and how to plan.", time: "6 min read" },
  { id: 5, title: "Platform Security Update: V2.0", category: "Platform Updates", date: "Oct 15", author: "Dev Team", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400", desc: "We've improved our exchange speed and security.", time: "4 min read" },
  { id: 6, title: "5 Tips for Fast Exchange", category: "Exchange Tips", date: "Oct 12", author: "Staff", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400", desc: "Simple tricks to get your funds faster on our platform.", time: "3 min read" },
  { id: 7, title: "Perfect Money vs Advcash", category: "Tutorials", date: "Oct 10", author: "Admin", image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=400", desc: "Which payment method is better for your needs?", time: "7 min read" },
];

const categories = ["All Posts", "Crypto News", "Exchange Tips", "Security", "Tutorials", "Market Analysis", "Platform Updates"];

const BlogContent = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => { setCurrentPage(1); }, [activeCategory, searchQuery]);

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = activeCategory === "All Posts" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="max-w-7xl mx-auto px-4 pb-24">
      
      {/* --- Section Caption (নতুন অংশ) --- */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">
            <Newspaper size={18} />
            <span>Latest Articles</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Explore Our <span className="text-blue-600">Knowledge Base</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Search for tutorials, security news, and platform updates to stay ahead in the digital currency world.
          </p>
        </motion.div>
      </div>

      {/* --- Search & Filter Section --- */}
      <section className="relative z-30 mb-16">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-5 shadow-2xl border border-gray-100">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for articles, news or tips..." 
              className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-14 pr-12 outline-none font-medium text-gray-700"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full">
                <X size={16} />
              </button>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                  activeCategory === cat ? "bg-blue-600 border-blue-600 text-white shadow-lg" : "bg-white border-gray-100 text-gray-500 hover:border-blue-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- Blog Post Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        <AnimatePresence mode='popLayout'>
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-52 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-black text-blue-600 uppercase">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12}/> {post.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <Link href={`/blog/${post.id}`} className="text-blue-600 font-bold text-sm flex items-center gap-2 group/link">
                    {"Read More"} <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <h3 className="text-xl font-bold text-gray-400">{"No results found matching your criteria."}</h3>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* --- Pagination UI --- */}
      {totalPages > 1 && (
        <div className="mt-20 flex flex-col items-center">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
            {"Showing Page "} <span className="text-blue-600">{currentPage}</span> {" of "} {totalPages}
          </p>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all ${
                currentPage === 1 ? "opacity-30 cursor-not-allowed" : "border-gray-200 hover:border-blue-600 text-gray-600 bg-white"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-12 h-12 rounded-2xl font-black text-sm transition-all ${
                    currentPage === i + 1 ? "bg-blue-600 text-white shadow-xl shadow-blue-100" : "bg-white border border-gray-100 text-gray-500 hover:border-blue-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all ${
                currentPage === totalPages ? "opacity-30 cursor-not-allowed" : "border-gray-200 hover:border-blue-600 text-gray-600 bg-white"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogContent;