"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  ArrowRightLeft, 
  Info, 
  Zap,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

const currencies = [
  { id: 1, name: "USDT", rate: 122.50, icon: "💎" },
  { id: 2, name: "Payeer", rate: 118.00, icon: "🅿️" },
  { id: 3, name: "Perfect Money", rate: 117.50, icon: "PM" },
  { id: 4, name: "bKash", rate: 1, icon: "BK" },
  { id: 5, name: "Nagad", rate: 1, icon: "NG" },
];

const RateCalculator = () => {
  const [amount, setAmount] = useState(100);
  const [fromCurr, setFromCurr] = useState(currencies[0]);
  const [toCurr, setToCurr] = useState(currencies[3]);
  const [result, setResult] = useState(0);

  useEffect(() => {
    // ক্যালকুলেশন লজিক: (Amount * FromRate) / ToRate
    const calculated = (amount * fromCurr.rate) / toCurr.rate;
    setResult(calculated.toFixed(2));
  }, [amount, fromCurr, toCurr]);

  return (
    <section className="py-16 mx-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative bg-gray-900 rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl"
      >
        {/* Background Blur Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] -z-0"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
              <Calculator size={18} />
              <span>{"Quick Converter"}</span>
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
              {"Estimate Your "} <br />
              <span className="text-blue-500">{"Exchange Value"}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {"Calculate exactly how much you will receive before making a transaction. Our rates are transparent with no hidden service fees."}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
               <div className="flex items-center gap-1.5">
                  <TrendingUp size={16} className="text-green-500" />
                  <span>{"Real-time Market Rates"}</span>
               </div>
               <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
               <span>{"Last Update: 1m ago"}</span>
            </div>
          </div>

          {/* Right Side: Calculator UI */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-inner">
             <div className="space-y-6">
                
                {/* Input 1 */}
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">{"Amount You Send"}</label>
                   <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-4 focus-within:border-blue-500/50 transition-all">
                      <input 
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="bg-transparent text-2xl font-black text-white outline-none w-full"
                      />
                      <select 
                        className="bg-gray-800 text-white border-none rounded-xl px-3 py-2 font-bold text-sm outline-none cursor-pointer"
                        onChange={(e) => setFromCurr(currencies.find(c => c.id === parseInt(e.target.value)))}
                      >
                         {currencies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </select>
                   </div>
                </div>

                {/* Arrow Icon */}
                <div className="flex justify-center -my-3">
                   <div className="bg-blue-600 p-2 rounded-full text-white shadow-lg border-4 border-gray-900">
                      <ArrowRightLeft size={18} />
                   </div>
                </div>

                {/* Input 2 */}
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">{"Estimated Receive"}</label>
                   <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-4">
                      <input 
                        type="text" 
                        value={result}
                        readOnly
                        className="bg-transparent text-2xl font-black text-blue-400 outline-none w-full"
                      />
                      <select 
                        className="bg-gray-800 text-white border-none rounded-xl px-3 py-2 font-bold text-sm outline-none cursor-pointer"
                        value={toCurr.id}
                        onChange={(e) => setToCurr(currencies.find(c => c.id === parseInt(e.target.value)))}
                      >
                         {currencies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </select>
                   </div>
                </div>

                {/* Summary Info */}
                <div className="bg-white/5 rounded-2xl p-4 flex items-start gap-3 border border-white/5">
                   <Info className="text-gray-400 mt-1" size={16} />
                   <p className="text-[11px] text-gray-400 leading-relaxed">
                      {"Note: The final amount may vary slightly due to network fees or market fluctuations during the transaction process."}
                   </p>
                </div>

                <Link href="/exchange" className="block">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 group">
                    <Zap size={20} fill="currentColor" />
                    <span>{"Exchange Now"}</span>
                  </button>
                </Link>

             </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default RateCalculator;