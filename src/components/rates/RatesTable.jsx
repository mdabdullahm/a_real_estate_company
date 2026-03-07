"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ArrowRight, 
  TrendingUp, 
  TrendingDown, 
  Wallet,
  Zap
} from "lucide-react";
import Link from "next/link";

const ratesData = [
  { id: 1, name: "USDT (Binance TRC20)", buy: "122.50", sell: "124.80", stock: "12,450.00", icon: "💎", trend: "up", type: "Crypto" },
  { id: 2, name: "Payeer USD", buy: "118.00", sell: "121.50", stock: "4,200.00", icon: "🅿️", trend: "up", type: "E-Wallet" },
  { id: 3, name: "Perfect Money USD", buy: "117.50", sell: "120.00", stock: "2,890.00", icon: "PM", trend: "down", type: "E-Wallet" },
  { id: 4, name: "Advcash USD", buy: "115.00", sell: "119.20", stock: "1,450.00", icon: "A", trend: "up", type: "E-Wallet" },
  { id: 5, name: "Skrill USD", buy: "112.00", sell: "118.50", stock: "850.00", icon: "S", trend: "down", type: "E-Wallet" },
  { id: 6, name: "Neteller USD", buy: "112.00", sell: "118.50", stock: "920.00", icon: "N", trend: "up", type: "E-Wallet" },
  { id: 7, name: "WebMoney (WMZ)", buy: "110.00", sell: "116.00", stock: "3,100.00", icon: "W", trend: "down", type: "E-Wallet" },
  { id: 8, name: "Litecoin (LTC)", buy: "105.00", sell: "112.00", stock: "5,000.00", icon: "Ł", trend: "up", type: "Crypto" },
];

const RatesTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All"); // নতুন ফিল্টার স্টেট

  // সার্চ এবং ক্যাটাগরি ফিল্টার লজিক একসাথে
  const filteredRates = ratesData.filter(rate => {
    const matchesSearch = rate.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "All" || rate.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full px-4">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search currency..." 
            className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-300 shadow-sm transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* বাটনগুলো এখানে আপডেট করা হয়েছে */}
        <div className="flex gap-2 bg-white p-1 rounded-2xl border border-gray-100 shadow-sm">
           {["All", "Crypto", "E-Wallet"].map((type) => (
             <button
               key={type}
               onClick={() => setFilterType(type)}
               className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                 filterType === type 
                 ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                 : "text-gray-600 hover:bg-gray-50"
               }`}
             >
               {type}
             </button>
           ))}
        </div>
      </div>

      {/* Main Table Card */}
      <motion.div 
        layout // ফিল্টার হওয়ার সময় টেবিলটি স্মুথলি রি-সাইজ হবে
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">{"Currency"}</th>
                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center">{"Buy Rate"}</th>
                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center">{"Sell Rate"}</th>
                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center">{"Stock"}</th>
                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest text-right">{"Action"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <AnimatePresence mode="popLayout">
                {filteredRates.map((rate, index) => (
                  <motion.tr 
                    key={rate.id}
                    layout // এটি রো গুলো ফিল্টার হওয়ার সময় চমৎকার এনিমেশন দিবে
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="hover:bg-blue-50/20 transition-colors group"
                  >
                    {/* Currency Info */}
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center font-bold text-gray-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                          {rate.icon}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 leading-none mb-1">{rate.name}</p>
                          <p className="text-[10px] font-bold text-blue-500 uppercase tracking-tighter">{rate.type}</p>
                        </div>
                      </div>
                    </td>

                    {/* Buy Rate */}
                    <td className="px-8 py-6 text-center">
                      <div className="inline-flex flex-col items-center">
                         <span className="text-lg font-black text-gray-800">{`৳${rate.buy}`}</span>
                         <span className="text-[10px] text-green-500 font-bold flex items-center gap-0.5">
                            <TrendingUp size={10} /> {"1.2%"}
                         </span>
                      </div>
                    </td>

                    {/* Sell Rate */}
                    <td className="px-8 py-6 text-center">
                      <div className="inline-flex flex-col items-center">
                         <span className="text-lg font-black text-gray-800">{`৳${rate.sell}`}</span>
                         <span className={`text-[10px] font-bold flex items-center gap-0.5 ${rate.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                            {rate.trend === 'up' ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                            {rate.trend === 'up' ? "0.5%" : "0.3%"}
                         </span>
                      </div>
                    </td>

                    {/* Stock */}
                    <td className="px-8 py-6 text-center">
                      <div className="flex flex-col items-center">
                         <div className="flex items-center gap-1.5 text-gray-600 mb-1">
                            <Wallet size={14} className="opacity-40" />
                            <span className="font-bold text-sm">{`$${rate.stock}`}</span>
                         </div>
                         <div className="w-20 h-1 bg-gray-100 rounded-full overflow-hidden">
                            <div className="w-2/3 h-full bg-blue-500"></div>
                         </div>
                      </div>
                    </td>

                    {/* Action */}
                    <td className="px-8 py-6 text-right">
                      <Link href="/exchange">
                        <button className="bg-gray-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-blue-600 transition-all flex items-center gap-2 ml-auto group/btn">
                          <span>{"Exchange"}</span>
                          <Zap size={14} fill="currentColor" className="group-hover/btn:scale-110" />
                        </button>
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </motion.div>
      
      {/* Table Footer Info */}
      <div className="mt-8 p-6 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
         <p className="text-sm text-blue-700 font-medium text-center sm:text-left">
           {"Rates are updated automatically based on global market fluctuations."}
         </p>
         <button className="text-sm font-black text-blue-600 uppercase tracking-widest hover:underline">
            {"Download CSV"}
         </button>
      </div>
    </div>
  );
};

export default RatesTable;