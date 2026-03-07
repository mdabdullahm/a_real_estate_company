"use client";
import { motion } from "framer-motion";
import { 
  RefreshCw, 
  ShieldCheck, 
  Globe, 
  AlertCircle,
  Clock,
  Zap
} from "lucide-react";

const infoCards = [
  {
    id: 1,
    title: "Real-time Updates",
    desc: "Our exchange rates are synchronized with global market APIs every 60 seconds to ensure you always get the most accurate pricing.",
    icon: <RefreshCw size={24} className="text-blue-600" />,
    bg: "bg-blue-50"
  },
  {
    id: 2,
    title: "Zero Hidden Fees",
    desc: "The rates displayed on this page include all service charges. What you see is exactly what you get in your wallet.",
    icon: <ShieldCheck size={24} className="text-green-600" />,
    bg: "bg-green-50"
  },
  {
    id: 3,
    title: "Market Volatility",
    desc: "During extreme market movements, rates may change rapidly. We recommend completing your order within 10 minutes of starting.",
    icon: <Globe size={24} className="text-purple-600" />,
    bg: "bg-purple-50"
  }
];

const RatesUpdateInfo = () => {
  return (
    <section className="py-16 mx-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              {"How Our Rates Work"}
            </h2>
            <p className="text-gray-500 leading-relaxed">
              {"We believe in complete transparency. Here is how we manage and update our exchange rates to provide the best service in Bangladesh."}
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-3xl border border-gray-100 shadow-sm">
             <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 animate-spin-slow">
                <Clock size={20} />
             </div>
             <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">{"Update Frequency"}</p>
                <p className="text-sm font-black text-gray-800">{"Every 60 Seconds"}</p>
             </div>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description || card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Policy Alert */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gray-900 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden"
        >
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
             <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/10 shrink-0">
                <AlertCircle className="text-yellow-400" size={32} />
             </div>
             <div className="flex-1 text-center md:text-left">
                <h4 className="text-white text-xl font-bold mb-2">{"Rate Lock Policy"}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {"When you start an exchange order, we lock the current rate for 15 minutes. This gives you enough time to complete the payment without worrying about sudden market drops. After 15 minutes, the rate will be refreshed based on the live market."}
                </p>
             </div>
             <div className="shrink-0">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2">
                   <Zap size={16} fill="currentColor" />
                   {"Learn More"}
                </button>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default RatesUpdateInfo;