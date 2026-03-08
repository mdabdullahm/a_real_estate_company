"use client";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  MessagesSquare, 
  LifeBuoy, 
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import Link from "next/link";

const helpOptions = [
  {
    id: 1,
    title: "Help Center & Guides",
    desc: "Browse our detailed documentation on how to use the platform, security tips, and more.",
    icon: <BookOpen size={28} className="text-blue-600" />,
    action: "Browse Guides",
    link: "/blog"
  },
  {
    id: 2,
    title: "Community & Updates",
    desc: "Join our official Telegram community to get real-time updates and talk with other users.",
    icon: <MessagesSquare size={28} className="text-purple-600" />,
    action: "Join Telegram",
    link: "https://t.me/exonpay"
  },
  {
    id: 3,
    title: "Technical Support",
    desc: "Facing issues with your transaction or account? Contact our technical experts directly.",
    icon: <LifeBuoy size={28} className="text-green-600" />,
    action: "Open a Ticket",
    link: "/contact"
  }
];

const SupportHelp = () => {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="max-w-full mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              {"Explore More Ways to Get Help"}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {"Can't find what you're looking for? Explore our other resources or talk to the community to resolve your issues faster."}
            </p>
          </motion.div>
        </div>

        {/* Help Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {helpOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 group text-center flex flex-col items-center"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-500 shadow-inner">
                {option.icon}
              </div>

              {/* Text Content */}
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {option.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                {option.desc}
              </p>

              {/* Action Button */}
              <Link href={option.link} className="mt-auto w-full">
                <button className="w-full bg-gray-50 group-hover:bg-blue-600 group-hover:text-white py-4 rounded-2xl font-bold text-sm text-gray-700 transition-all flex items-center justify-center gap-2 border border-gray-100 group-hover:border-blue-600 shadow-sm">
                   <span>{option.action}</span>
                   <ArrowRight size={16} />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-[3rem] bg-gray-900 text-white relative overflow-hidden"
        >
          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -z-0"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-600/30">
                  <ShieldCheck className="text-blue-400" size={32} />
               </div>
               <div>
                  <h4 className="text-2xl font-bold">{"Your Security is Guaranteed"}</h4>
                  <p className="text-gray-400 text-sm">{"Our support team will never ask for your password or private recovery phrases."}</p>
               </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
               <p className="text-sm font-bold text-gray-300">
                 {"Server Status: "} <span className="text-white">{"All Systems Operational"}</span>
               </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SupportHelp;