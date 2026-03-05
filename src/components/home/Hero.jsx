"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
// আপনার প্রজেক্ট স্ট্রাকচার অনুযায়ী পাথটি নিশ্চিত করুন
import heroAnimation from "../../../public/herobg.json"; 

const Hero = () => {
  const [sendAmount, setSendAmount] = useState(100);
  const [receiveAmount, setReceiveAmount] = useState(11500);
  const [isMounted, setIsMounted] = useState(false);

  // Next.js SSR (Server Side Rendering) এর জন্য লটি সরাসরি রেন্ডার হয় না, তাই মাউন্ট চেক করা জরুরি
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ক্যালকুলেশন লজিক (উদাহরণস্বরূপ)
  useEffect(() => {
    setReceiveAmount(sendAmount * 115);
  }, [sendAmount]);

  if (!isMounted) return <section className="min-h-[90vh] bg-white"></section>;

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden min-h-[90vh] flex items-center">
      
      {/* --- Lottie Background Animation --- */}
      {/* z-0 এবং pointer-events-none ব্যবহার করা হয়েছে যাতে এনিমেশন ক্লিকে বাধা না দেয় */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 flex items-center justify-center">
        <div className="w-full h-full lg:scale-125">
           <Lottie 
            animationData={heroAnimation} 
            loop={true} 
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: English Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
              Trusted by 10k+ users
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Secure & Fast <br />
              <span className="text-blue-600">Currency Exchange</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
              Experience the easiest way to buy, sell, and exchange Dollars, Euros, and Cryptocurrencies at the best market rates. Reliable service, available 24/7.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-200">
                Get Started
              </button>
              <button className="bg-white border-2 border-gray-200 hover:border-blue-600 text-gray-700 px-8 py-4 rounded-xl font-bold transition-all">
                Check Rates
              </button>
            </div>
          </motion.div>

          {/* Right Side: Exchange Calculator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-md border border-white shadow-2xl rounded-3xl p-6 lg:p-8"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-600 rounded-full mr-3"></span>
              Exchange Calculator
            </h3>
            
            <div className="space-y-4">
              {/* Send Field */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100 focus-within:border-blue-300 transition-all shadow-sm">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">You Send</label>
                <div className="flex items-center">
                  <input 
                    type="number" 
                    value={sendAmount}
                    onChange={(e) => setSendAmount(Number(e.target.value))}
                    className="bg-transparent text-2xl font-bold text-gray-800 outline-none w-full"
                  />
                  <select className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 font-semibold text-xs outline-none cursor-pointer">
                    <option>USD (Payeer)</option>
                    <option>USDT (TRC20)</option>
                    <option>Perfect Money</option>
                  </select>
                </div>
              </div>

              {/* Swap Icon */}
              <div className="flex justify-center -my-2 relative z-20">
                <div className="bg-blue-600 p-2.5 rounded-full text-white shadow-lg border-4 border-white hover:rotate-180 transition-transform duration-500 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
              </div>

              {/* Receive Field */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100 focus-within:border-blue-300 transition-all shadow-sm">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">You Receive</label>
                <div className="flex items-center">
                  <input 
                    type="number" 
                    value={receiveAmount}
                    readOnly
                    className="bg-transparent text-2xl font-bold text-gray-800 outline-none w-full"
                  />
                  <select className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 font-semibold text-xs outline-none cursor-pointer">
                    <option>BDT (Bkash)</option>
                    <option>BDT (Nagad)</option>
                    <option>BDT (Rocket)</option>
                  </select>
                </div>
              </div>

              {/* Rate & Info */}
              <div className="bg-blue-50/50 p-4 rounded-xl text-sm text-blue-700 flex justify-between items-center border border-blue-100">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold opacity-60">Exchange Rate</span>
                  <span className="font-bold">1 USD = 115.00 BDT</span>
                </div>
                <div className="text-right flex flex-col">
                  <span className="text-[10px] uppercase font-bold opacity-60">Processing</span>
                  <span className="font-bold">Instant</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition-all mt-4 shadow-xl shadow-blue-100 active:scale-[0.98]">
                Exchange Now
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;