"use client";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  Headset, 
  CircleDollarSign, 
  Lock, 
  RefreshCcw 
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "High Security",
    desc: "Your transactions and data are protected with industry-standard SSL encryption and multi-layer security.",
    icon: <ShieldCheck size={32} />,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    id: 2,
    title: "Instant Exchange",
    desc: "No more waiting for hours. Most of our exchange orders are completed within 5 to 15 minutes.",
    icon: <Zap size={32} />,
    color: "text-yellow-500",
    bg: "bg-yellow-50"
  },
  {
    id: 3,
    title: "Best Market Rates",
    desc: "We offer the most competitive rates in the market with zero hidden fees or extra charges.",
    icon: <CircleDollarSign size={32} />,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    id: 4,
    title: "24/7 Live Support",
    desc: "Our dedicated support team is available around the clock to assist you with any issues or queries.",
    icon: <Headset size={32} />,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    id: 5,
    title: "Secure Wallet",
    desc: "Your funds are kept in secure, cold-storage wallets to ensure maximum safety against any threats.",
    icon: <Lock size={32} />,
    color: "text-red-600",
    bg: "bg-red-50"
  },
  {
    id: 6,
    title: "Automatic System",
    desc: "Our advanced automated system ensures that your exchange is processed accurately every single time.",
    icon: <RefreshCcw size={32} />,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Core Advantages</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Why Thousands Trust <span className="text-blue-600">Exonpay</span>
            </h2>
            <p className="text-gray-500 text-lg">
              We provide a seamless, secure, and lightning-fast currency exchange experience designed for the modern world.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Info */}
        <div className="mt-20 p-8 rounded-3xl bg-blue-600 flex flex-col md:flex-row items-center justify-between gap-6 text-white overflow-hidden relative">
          {/* Decorative Circle */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Ready to experience the best service?</h3>
            <p className="text-blue-100">Join over 10,000+ satisfied users today.</p>
          </div>
          
          <div className="flex gap-4 relative z-10">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Create Free Account
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;