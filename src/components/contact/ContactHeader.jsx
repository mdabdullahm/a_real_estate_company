"use client";
import { motion } from "framer-motion";
import { ChevronRight, Home, MessageSquare, Clock, Globe, Headset } from "lucide-react";
import Link from "next/link";

const ContactHeader = () => {
  return (
    <section className="relative bg-white pt-12 pb-20 overflow-hidden">
      {/* Background Decor - কন্টাক্ট পেজের জন্য নীল এবং সায়ান (Cyan) এর কম্বিনেশন */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] right-[-15%] w-[45%] h-[70%] bg-blue-300 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-15%] w-[45%] h-[70%] bg-cyan-200 rounded-full blur-[120px]"></div>
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
            <span className="text-blue-600">{"Contact Us"}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            {"How Can We "} 
            <span className="text-blue-600">{"Help You"}</span> 
            {" Today?"}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            {"Have a question about an exchange? Need technical support? Our dedicated team is here to assist you 24 hours a day, 7 days a week."}
          </motion.p>

          {/* Support Stats / Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
             <div className="flex items-center gap-3 bg-white shadow-xl shadow-blue-50 border border-blue-50 px-6 py-4 rounded-3xl">
                <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                   <Clock size={20} />
                </div>
                <div className="text-left">
                   <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">{"Response Time"}</p>
                   <p className="text-sm font-bold text-gray-800">{"Under 15 Mins"}</p>
                </div>
             </div>
             
             <div className="flex items-center gap-3 bg-white shadow-xl shadow-blue-50 border border-blue-50 px-6 py-4 rounded-3xl">
                <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                   <Headset size={20} />
                </div>
                <div className="text-left">
                   <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">{"Availability"}</p>
                   <p className="text-sm font-bold text-gray-800">{"24/7 Support"}</p>
                </div>
             </div>

             <div className="flex items-center gap-3 bg-white shadow-xl shadow-blue-50 border border-blue-50 px-6 py-4 rounded-3xl">
                <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                   <MessageSquare size={20} />
                </div>
                <div className="text-left">
                   <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">{"Live Chat"}</p>
                   <p className="text-sm font-bold text-gray-800">{"Always Active"}</p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactHeader;