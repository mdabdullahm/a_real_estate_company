"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-blue-600 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-200"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Ready to Start Your <br />
                <span className="text-blue-100">First Exchange?</span>
              </h2>
              <p className="text-blue-50 text-lg mb-10 leading-relaxed max-w-md">
                Join over 10,000+ satisfied users who trust Exonpay for fast, secure, and reliable digital currency exchanges every day.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/register">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-50 transition-all flex items-center space-x-2"
                  >
                    <span>Get Started Now</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                
                <Link href="/contact">
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                    Contact Support
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side: Quick Stats / Benefits */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                <Zap className="text-yellow-300 mb-4" size={32} />
                <h4 className="text-white font-bold text-xl mb-1">Instant</h4>
                <p className="text-blue-100 text-sm">Most orders complete in 5-15 mins.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                <ShieldCheck className="text-green-300 mb-4" size={32} />
                <h4 className="text-white font-bold text-xl mb-1">Secure</h4>
                <p className="text-blue-100 text-sm">Bank-grade SSL encryption.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 col-span-full sm:col-span-1">
                <Users className="text-blue-200 mb-4" size={32} />
                <h4 className="text-white font-bold text-xl mb-1">10k+ Users</h4>
                <p className="text-blue-100 text-sm">Trusted globally since 2023.</p>
              </div>

              <div className="hidden sm:flex items-center justify-center p-6 border-2 border-dashed border-white/20 rounded-3xl">
                <p className="text-blue-100 text-xs text-center font-medium italic">
                  "The best rates I've found so far!"
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;