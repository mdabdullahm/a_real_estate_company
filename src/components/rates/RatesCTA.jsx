"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Users } from "lucide-react";
import Link from "next/link";

const RatesCTA = () => {
  return (
    <section className="py-15">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-200"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                {"Liked Our Rates? "} <br />
                <span className="text-blue-100">{"Start Exchanging Now!"}</span>
              </h2>
              <p className="text-blue-50 text-lg mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {"Don't wait for market fluctuations. Secure your exchange at the current best rates and get your funds delivered in minutes."}
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/exchange">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-50 transition-all flex items-center gap-2"
                  >
                    <span>{"Exchange Now"}</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                    {"Get Support"}
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side: Trust Factors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4 text-white">
                     <Zap size={24} fill="currentColor" />
                  </div>
                  <h4 className="text-white font-bold mb-1">{"Fast Processing"}</h4>
                  <p className="text-blue-100 text-xs">{"Average 5-15 mins"}</p>
               </div>

               <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4 text-white">
                     <ShieldCheck size={24} />
                  </div>
                  <h4 className="text-white font-bold mb-1">{"Secure Swap"}</h4>
                  <p className="text-blue-100 text-xs">{"Verified & Protected"}</p>
               </div>

               <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col items-center text-center col-span-full">
                  <div className="flex -space-x-2 mb-4">
                     {[1,2,3].map(i => (
                        <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-blue-500" alt="user" />
                     ))}
                     <div className="w-10 h-10 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center text-[10px] font-black text-blue-600">
                        {"+10k"}
                     </div>
                  </div>
                  <p className="text-white text-sm font-bold">{"Join 10,000+ Active Users"}</p>
                  <p className="text-blue-100 text-[10px] uppercase tracking-widest mt-1">{"Trustworthy Platform"}</p>
               </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RatesCTA;