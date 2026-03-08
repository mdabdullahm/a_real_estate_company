"use client";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const featuredPost = {
  id: "featured-1",
  title: "The Future of Digital Currency: How 2024 is Changing the Exchange Landscape",
  desc: "The world of digital finance is evolving faster than ever. From new security protocols to the rise of decentralized stablecoins, discover the key trends that are shaping how we exchange money globally this year.",
  category: "Market Analysis",
  date: "Oct 30, 2024",
  author: "Ariful Islam",
  time: "15 min read",
  image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
};

const FeaturedPost = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8">
           <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <TrendingUp size={20} />
           </div>
           <h2 className="text-2xl font-black text-gray-900">{"Featured Story"}</h2>
        </div>

        {/* Featured Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-[3rem] border border-gray-100 overflow-hidden shadow-2xl shadow-gray-200/40 group"
        >
          <div className="grid lg:grid-cols-2 items-center">
            
            {/* Image Side */}
            <div className="h-[350px] lg:h-[500px] overflow-hidden relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  {featuredPost.category}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-16">
              <div className="flex items-center gap-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-blue-500" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-500" />
                  <span>{featuredPost.time}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                <Link href={`/blog/${featuredPost.id}`}>
                  {featuredPost.title}
                </Link>
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-10 line-clamp-3">
                {featuredPost.desc}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{"Written By"}</p>
                    <p className="font-bold text-gray-900">{featuredPost.author}</p>
                  </div>
                </div>

                <Link href={`/blog/${featuredPost.id}`}>
                  <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all flex items-center gap-3 shadow-xl shadow-gray-200 group/btn">
                    <span>{"Read Full Article"}</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPost;