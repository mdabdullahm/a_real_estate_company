"use client";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowRightLeft } from "lucide-react";

const rates = [
  { id: 1, name: "USDT (Binance)", buy: "122.50", sell: "124.80", stock: "5420.00", icon: "💎", trend: "up" },
  { id: 2, name: "Payeer USD", buy: "118.00", sell: "121.50", stock: "1250.00", icon: "🅿️", trend: "up" },
  { id: 3, name: "Perfect Money", buy: "117.50", sell: "120.00", stock: "890.00", icon: "PM", trend: "down" },
  { id: 4, name: "Advcash USD", buy: "115.00", sell: "119.20", stock: "450.00", icon: "A", trend: "up" },
  { id: 5, name: "WebMoney (WMZ)", buy: "110.00", sell: "116.50", stock: "2100.00", icon: "W", trend: "down" },
];

const LiveRates = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold text-green-600 uppercase tracking-widest">Live Rates</span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">Current Exchange Rates</h2>
            <p className="text-gray-500 mt-2">Get the best market rates for your digital assets instantly.</p>
          </div>
          
          <button className="flex items-center space-x-2 text-blue-600 font-bold hover:underline">
            <ArrowRightLeft size={20} />
            <span>View All Rates</span>
          </button>
        </div>

        {/* Rates Table */}
        <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-xl shadow-gray-50">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-5 text-sm font-bold text-gray-400 uppercase">Currency</th>
                <th className="px-6 py-5 text-sm font-bold text-gray-400 uppercase text-center">Buy Rate (BDT)</th>
                <th className="px-6 py-5 text-sm font-bold text-gray-400 uppercase text-center">Sell Rate (BDT)</th>
                <th className="px-6 py-5 text-sm font-bold text-gray-400 uppercase text-center">Stock Available</th>
                <th className="px-6 py-5 text-sm font-bold text-gray-400 uppercase text-right">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {rates.map((rate, index) => (
                <motion.tr 
                  key={rate.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-blue-50/30 transition-colors group"
                >
                  {/* Currency Info */}
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {rate.icon}
                      </div>
                      <span className="font-bold text-gray-800 text-lg">{rate.name}</span>
                    </div>
                  </td>

                  {/* Buy Rate */}
                  <td className="px-6 py-5 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-green-50 text-green-700 font-bold text-lg">
                      ৳{rate.buy}
                    </span>
                  </td>

                  {/* Sell Rate */}
                  <td className="px-6 py-5 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-bold text-lg">
                      ৳{rate.sell}
                    </span>
                  </td>

                  {/* Stock */}
                  <td className="px-6 py-5 text-center font-semibold text-gray-600">
                    {rate.stock} USD
                  </td>

                  {/* Trend Indicator */}
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end">
                      {rate.trend === "up" ? (
                        <div className="flex items-center space-x-1 text-green-500 bg-green-50 px-2 py-1 rounded-md">
                          <TrendingUp size={16} />
                          <span className="text-xs font-bold">+1.2%</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1 text-red-500 bg-red-50 px-2 py-1 rounded-md">
                          <TrendingDown size={16} />
                          <span className="text-xs font-bold">-0.5%</span>
                        </div>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Info */}
        <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-400">
          <p>Last updated: Today at 02:45 PM • Rates are subject to market volatility</p>
        </div>

      </div>
    </section>
  );
};

export default LiveRates;