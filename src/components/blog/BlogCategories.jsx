"use client";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Coins, 
  Zap, 
  BookOpen, 
  BarChart3, 
  Bell, 
  ArrowRight,
  Cpu
} from "lucide-react";
import Link from "next/link";

const blogCategories = [
  {
    id: 1,
    name: "Security & Safety",
    desc: "Guides on protecting your funds and identity.",
    count: "15 Articles",
    icon: <ShieldCheck size={28} className="text-blue-600" />,
    bgColor: "bg-blue-50",
    hoverBorder: "hover:border-blue-200"
  },
  {
    id: 2,
    name: "Crypto News",
    desc: "Latest updates from the global crypto market.",
    count: "24 Articles",
    icon: <Coins size={28} className="text-yellow-600" />,
    bgColor: "bg-yellow-50",
    hoverBorder: "hover:border-yellow-200"
  },
  {
    id: 3,
    name: "Exchange Tutorials",
    desc: "Step-by-step guides for smooth transactions.",
    count: "18 Articles",
    icon: <Zap size={28} className="text-purple-600" />,
    bgColor: "bg-purple-50",
    hoverBorder: "hover:border-purple-200"
  },
  {
    id: 4,
    name: "Market Analysis",
    desc: "Insights into price movements and trends.",
    count: "10 Articles",
    icon: <BarChart3 size={28} className="text-green-600" />,
    bgColor: "bg-green-50",
    hoverBorder: "hover:border-green-200"
  }
];

const BlogCategories = () => {
  return (
    <section className="py-16">
      <div className="max-w-full mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              {"Explore Topics"}
            </h2>
            <p className="text-gray-500 max-w-lg">
              {"Browse through our curated categories to find exactly what you're looking for in the digital currency world."}
            </p>
          </div>
          <Link href="/blog/categories" className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-2">
            {"View All Categories"} <ArrowRight size={16} />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm transition-all duration-300 group cursor-pointer ${category.hoverBorder}`}
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {category.icon}
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {category.desc}
              </p>

              {/* Bottom Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                   {category.count}
                 </span>
                 <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={14} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogCategories;