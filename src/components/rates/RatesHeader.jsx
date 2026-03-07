"use client";
import { motion } from "framer-motion";
import { ChevronRight, Home, RefreshCw, BarChart3, TrendingUp } from "lucide-react";
import Link from "next/link";

const RatesHeader = () => {
  return (
    <section className="relative bg-white pt-12 pb-20 overflow-hidden">
      {/* Background Mesh Gradient (Rates এর জন্য আমরা হালকা সবুজ ও নীলের কম্বিনেশন ব্যবহার করছি) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[70%] bg-green-200 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-200 rounded-full blur-[120px]"></div>
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
              <span>{"Home"}</span>
            </Link>
            <ChevronRight size={14} />
            <span className="text-blue-600">{"Rates"}</span>
          </motion.div>

          {/* Live Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-2 mb-6 bg-green-50 px-3 py-1.5 rounded-xl border border-green-100"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">
              {"Live Market Rates"}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            {"Exchange Rates "} 
            <span className="text-blue-600">{"&"}</span> 
            {" Stock"}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            {"Check our current buy and sell rates for all digital currencies. We update our rates every minute to provide you with the best market price."}
          </motion.p>

          {/* Header Stats (Optional) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-8"
          >
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-blue-600">
                   <TrendingUp size={20} />
                </div>
                <div className="text-left">
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{"Top Rate"}</p>
                   <p className="text-sm font-black text-gray-800">{"124.50 BDT"}</p>
                </div>
             </div>
             
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-green-600">
                   <BarChart3 size={20} />
                </div>
                <div className="text-left">
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{"Available Stock"}</p>
                   <p className="text-sm font-black text-gray-800">{"$25,400.00"}</p>
                </div>
             </div>

             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-purple-600">
                   <RefreshCw size={20} />
                </div>
                <div className="text-left">
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{"Last Update"}</p>
                   <p className="text-sm font-black text-gray-800">{"1 min ago"}</p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RatesHeader;