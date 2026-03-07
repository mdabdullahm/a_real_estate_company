"use client";
import { motion } from "framer-motion";
import { ChevronRight, Home, BookOpen, Users, Newspaper, Search } from "lucide-react";
import Link from "next/link";

const BlogHeader = () => {
  return (
    <section className="relative bg-white pt-12 pb-20 overflow-hidden">
      {/* Background Decor - ব্লগের জন্য আমরা ইন্ডিগো এবং নীলের কম্বিনেশন ব্যবহার করছি */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-20%] w-[50%] h-[70%] bg-indigo-200 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-200 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Breadcrumbs */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-sm font-medium text-gray-500 mb-8 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 shadow-sm"
          >
            <Link href="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <Home size={14} />
              <span>{"Home"}</span>
            </Link>
            <ChevronRight size={14} />
            <span className="text-blue-600">{"Blog"}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            {"Insights "} 
            <span className="text-blue-600">{"&"}</span> 
            {" Crypto News"}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            {"Stay informed with the latest trends in digital currency, security tips, and step-by-step tutorials to master your exchanges."}
          </motion.p>

          {/* Quick Blog Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white shadow-md border border-gray-100 rounded-2xl flex items-center justify-center text-indigo-600">
                   <Newspaper size={20} />
                </div>
                <div className="text-left">
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">{"Total Articles"}</p>
                   <p className="text-lg font-black text-gray-800">{"50+"}</p>
                </div>
             </div>
             
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white shadow-md border border-gray-100 rounded-2xl flex items-center justify-center text-blue-600">
                   <BookOpen size={20} />
                </div>
                <div className="text-left">
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">{"Categories"}</p>
                   <p className="text-lg font-black text-gray-800">{"12+"}</p>
                </div>
             </div>

             <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white shadow-md border border-gray-100 rounded-2xl flex items-center justify-center text-green-600">
                   <Users size={20} />
                </div>
                <div className="text-left">
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">{"Monthly Readers"}</p>
                   <p className="text-lg font-black text-gray-800">{"5k+"}</p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BlogHeader;