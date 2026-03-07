"use client";
import { motion } from "framer-motion";
import { ChevronRight, Home, ArrowRightLeft, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

const ExchangeHeader = () => {
  return (
    <section className="relative bg-white pt-12 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-purple-300 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Breadcrumbs */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-sm font-medium text-gray-500 mb-6 bg-gray-50 px-4 py-2 rounded-full border border-gray-100"
          >
            <Link href="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <Home size={14} />
              <span>Home</span>
            </Link>
            <ChevronRight size={14} />
            <span className="text-blue-600">Exchange</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            {"Instant "} 
            <span className="text-blue-600">Currency</span> 
            {" Exchange"}
          </motion.h1>
          
          {/* Subtitle - এখানে {" "} ব্যবহার করা হয়েছে নিরাপদ থাকার জন্য */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            {"Convert your digital assets securely with the best market rates. Automated processing ensures your funds arrive in minutes."}
          </motion.p>

          {/* Quick Features Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center space-x-2 text-sm font-bold text-gray-700 bg-white shadow-sm border border-gray-100 px-5 py-3 rounded-2xl">
              <ShieldCheck size={18} className="text-green-500" />
              <span>Secure Transaction</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-bold text-gray-700 bg-white shadow-sm border border-gray-100 px-5 py-3 rounded-2xl">
              <Clock size={18} className="text-blue-500" />
              <span>5-15 Mins Process</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-bold text-gray-700 bg-white shadow-sm border border-gray-100 px-5 py-3 rounded-2xl">
              <ArrowRightLeft size={18} className="text-purple-500" />
              <span>Low Fees</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExchangeHeader;