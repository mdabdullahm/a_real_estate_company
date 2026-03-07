"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowDownUp, 
  Info, 
  ShieldCheck, 
  Zap, 
  Wallet, 
  Mail, 
  Phone 
} from "lucide-react";

const currencies = [
  { id: "usdt", name: "USDT (Binance)", rate: 122.50, icon: "💎", type: "USD" },
  { id: "py", name: "Payeer USD", rate: 118.00, icon: "🅿️", type: "USD" },
  { id: "pm", name: "Perfect Money", rate: 117.50, icon: "PM", type: "USD" },
  { id: "bk", name: "bKash (Personal)", rate: 1, icon: "BK", type: "BDT" },
  { id: "ng", name: "Nagad (Personal)", rate: 1, icon: "NG", type: "BDT" },
];

const ExchangeForm = () => {
  const [sendAmount, setSendAmount] = useState(100);
  const [sendCurr, setSendCurr] = useState(currencies[0]);
  const [receiveCurr, setReceiveCurr] = useState(currencies[3]);
  const [receiveAmount, setReceiveAmount] = useState(0);

  // সিম্পল ক্যালকুলেশন লজিক
  useEffect(() => {
    const rate = sendCurr.rate / receiveCurr.rate;
    // যদি টাইপ ভিন্ন হয় (USD -> BDT), রেট গুণ হবে
    if (sendCurr.type === "USD" && receiveCurr.type === "BDT") {
        setReceiveAmount((sendAmount * sendCurr.rate).toFixed(2));
    } else {
        setReceiveAmount(sendAmount); // আপাতত সিম্পল রাখলাম
    }
  }, [sendAmount, sendCurr, receiveCurr]);

  return (
    <div className="max-w-full mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-100 border border-gray-100 overflow-hidden"
      >
        <div className="grid lg:grid-cols-12">
          
          {/* Left Side: The Form */}
          <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              {"1. Set Your Amount"}
            </h3>

            <div className="space-y-6">
              {/* Send Box */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{"You Send"}</label>
                <div className="flex items-center bg-gray-50 border border-gray-100 rounded-3xl p-4 focus-within:border-blue-300 transition-all">
                  <div className="flex-1">
                    <input 
                      type="number" 
                      value={sendAmount}
                      onChange={(e) => setSendAmount(e.target.value)}
                      className="bg-transparent text-3xl font-extrabold text-gray-900 outline-none w-full"
                    />
                    <p className="text-xs text-gray-400 mt-1">{"Min: $10 • Max: $5000"}</p>
                  </div>
                  <select 
                    className="bg-white border border-gray-200 rounded-2xl px-4 py-3 font-bold text-sm outline-none cursor-pointer shadow-sm"
                    onChange={(e) => setSendCurr(currencies.find(c => c.id === e.target.value))}
                  >
                    {currencies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
              </div>

              {/* Swap Icon */}
              <div className="flex justify-center -my-4 relative z-10">
                <button className="bg-blue-600 p-3 rounded-full text-white shadow-lg border-4 border-white hover:rotate-180 transition-transform duration-500">
                  <ArrowDownUp size={20} />
                </button>
              </div>

              {/* Receive Box */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{"You Receive"}</label>
                <div className="flex items-center bg-gray-50 border border-gray-100 rounded-3xl p-4 focus-within:border-blue-300 transition-all">
                  <div className="flex-1">
                    <input 
                      type="number" 
                      value={receiveAmount}
                      readOnly
                      className="bg-transparent text-3xl font-extrabold text-gray-900 outline-none w-full"
                    />
                    <p className="text-xs text-blue-500 font-medium mt-1">{"Fees Included"}</p>
                  </div>
                  <select 
                    className="bg-white border border-gray-200 rounded-2xl px-4 py-3 font-bold text-sm outline-none cursor-pointer shadow-sm"
                    value={receiveCurr.id}
                    onChange={(e) => setReceiveCurr(currencies.find(c => c.id === e.target.value))}
                  >
                    {currencies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Details */}
            <div className="mt-12">
               <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                 {"2. Payment Details"}
               </h3>
               <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
                    <input type="email" placeholder="Your Email Address" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-300 transition-all" />
                  </div>
                  <div className="relative">
                    <Wallet className="absolute left-4 top-4 text-gray-400" size={20} />
                    <input type="text" placeholder={`Your ${receiveCurr.name} Account / Number`} className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-300 transition-all" />
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: Summary Card */}
          <div className="lg:col-span-5 bg-blue-50/50 p-8 md:p-12">
            <h4 className="text-lg font-bold text-gray-800 mb-6">{"Order Summary"}</h4>
            
            <div className="space-y-4 mb-8">
               <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{"Exchange Rate"}</span>
                  <span className="font-bold text-gray-800">{`1 ${sendCurr.type} = ${sendCurr.rate} BDT`}</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{"Service Fee"}</span>
                  <span className="font-bold text-green-600">{"$0.00 (Free)"}</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{"Estimated Time"}</span>
                  <span className="font-bold text-gray-800">{"5-15 Minutes"}</span>
               </div>
               <div className="h-px bg-blue-100 my-4"></div>
               <div className="flex justify-between items-end">
                  <span className="text-sm text-gray-500 mb-1">{"Total You Receive"}</span>
                  <span className="text-3xl font-black text-blue-600">{`${receiveAmount} BDT`}</span>
               </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-blue-100 mb-8">
               <div className="flex items-start gap-3">
                  <Info className="text-blue-500 mt-1" size={18} />
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {"Please double check your account number. Transactions are irreversible once processed."}
                  </p>
               </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              <Zap size={20} fill="currentColor" />
              {"Confirm Exchange"}
            </button>

            <div className="mt-8 flex items-center justify-center gap-4 opacity-50">
               <ShieldCheck size={16} />
               <span className="text-[10px] uppercase font-bold tracking-widest">{"SSL Encrypted & Secure"}</span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default ExchangeForm;