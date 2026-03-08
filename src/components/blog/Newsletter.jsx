"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Bell, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gray-900 rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-100"
        >
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-0"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-0"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Content */}
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-[0.3em] text-xs mb-6">
                <Bell size={18} className="animate-bounce" />
                <span>Stay Informed</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                {"Subscribe to Our "} <br />
                <span className="text-blue-500">{"Newsletter"}</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md">
                {"Get the latest exchange rates, crypto market insights, and security alerts delivered straight to your inbox."}
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                    <ShieldCheck size={18} className="text-blue-500" />
                    <span>{"Weekly market analysis and tips"}</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                    <ShieldCheck size={18} className="text-blue-500" />
                    <span>{"Instant security & platform updates"}</span>
                 </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-inner">
               <AnimatePresence mode="wait">
                 {!isSubscribed ? (
                   <motion.form 
                     key="form"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     onSubmit={handleSubscribe} 
                     className="space-y-6"
                   >
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">{"Email Address"}</label>
                        <div className="relative">
                           <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                           <input 
                             type="email" 
                             required
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             placeholder="Enter your email" 
                             className="w-full bg-white/10 border border-white/10 focus:border-blue-500 focus:bg-white/20 rounded-2xl py-5 pl-14 pr-4 outline-none text-white transition-all font-medium"
                           />
                        </div>
                     </div>

                     <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group">
                        <span>{"Join Newsletter"}</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                     
                     <p className="text-[10px] text-center text-gray-500 font-bold uppercase tracking-widest">
                        {"We respect your privacy. No spam, ever."}
                     </p>
                   </motion.form>
                 ) : (
                   <motion.div 
                     key="success"
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="text-center py-8"
                   >
                      <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-600/30">
                         <CheckCircle2 size={40} className="text-blue-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">{"Welcome to the Club!"}</h4>
                      <p className="text-gray-400">{"You've successfully subscribed to our newsletter."}</p>
                      <button 
                        onClick={() => setIsSubscribed(false)}
                        className="mt-6 text-sm font-bold text-blue-500 hover:underline"
                      >
                         {"Subscribe with another email"}
                      </button>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

// এই ফাইলে AnimatePresence ইমপোর্ট করা প্রয়োজন
import { AnimatePresence } from "framer-motion";

export default Newsletter;