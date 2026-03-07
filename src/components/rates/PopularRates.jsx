"use client";
import { motion } from "framer-motion";
import { ArrowRight, Flame, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

const popularPairs = [
  { id: 1, from: "USDT", to: "bKash", rate: "122.50", iconF: "💎", iconT: "BK", color: "text-pink-600", bg: "bg-pink-50" },
  { id: 2, from: "Payeer", to: "Nagad", rate: "118.00", iconF: "🅿️", iconT: "NG", color: "text-orange-600", bg: "bg-orange-50" },
  { id: 3, from: "Binance", to: "Rocket", rate: "121.00", iconF: "BN", iconT: "RK", color: "text-purple-600", bg: "bg-purple-50" },
  { id: 4, from: "Perfect Money", to: "bKash", rate: "117.50", iconF: "PM", iconT: "BK", color: "text-blue-600", bg: "bg-blue-50" },
];

const PopularRates = () => {
  return (
    <section className="py-16 mx-4">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
            <Flame size={20} fill="currentColor" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-gray-900 leading-none">{"Popular Pairs"}</h3>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">{"Most Traded Today"}</p>
          </div>
        </div>
        <Link href="/exchange" className="hidden sm:block text-sm font-bold text-blue-600 hover:underline">
          {"View All Pairs →"}
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularPairs.map((pair, index) => (
          <motion.div
            key={pair.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group"
          >
            {/* Pair Icons */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm border border-white font-bold text-lg relative z-10">
                  {pair.iconF}
                </div>
                <div className={`w-12 h-12 ${pair.bg} ${pair.color} rounded-2xl flex items-center justify-center shadow-sm border border-white font-bold text-xs relative z-0`}>
                  {pair.iconT}
                </div>
              </div>
              <div className="bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1">
                <TrendingUp size={12} className="text-green-500" />
                <span className="text-[10px] font-black text-green-600 uppercase">{"Hot"}</span>
              </div>
            </div>

            {/* Rate Info */}
            <div className="mb-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                {`${pair.from} to ${pair.to}`}
              </p>
              <h4 className="text-2xl font-black text-gray-900">
                {`৳${pair.rate}`}
              </h4>
            </div>

            {/* Quick Button */}
            <Link href="/exchange">
              <button className="w-full bg-gray-50 group-hover:bg-blue-600 group-hover:text-white py-3 rounded-xl font-bold text-xs text-gray-600 transition-all flex items-center justify-center gap-2">
                <span>{"Exchange Now"}</span>
                <Zap size={14} className="group-hover:fill-current" />
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularRates;