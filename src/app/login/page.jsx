"use client";
import Link from "next/link";
import { ShieldCheck, Zap, ChevronLeft } from "lucide-react";
import LoginForm from "@/components/auth/LoginForm";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
// আপনার নতুন JSON ফাইলটি ইমপোর্ট করুন
import moneyAnim from "../../../public/Money.json"; 

export default function LoginPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col lg:flex-row">
      
      {/* --- Left Side: Full Background Animation Section --- */}
      <section className="hidden lg:flex lg:w-1/2 bg-blue-600 relative overflow-hidden flex-col justify-between p-16">
        
        {/* ১. মেইন এনিমেশন (Full Height & Width Background) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          {isMounted && (
            <Lottie 
              animationData={moneyAnim} 
              loop={true} 
              style={{ width: '100%', height: '100%' }}
              // এটি এনিমেশনটিকে পুরো ব্যাকগ্রাউন্ড জুড়ে ছড়িয়ে রাখবে
              rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />
          )}
        </div>

        {/* ২. শ্যাডো এবং কালার ওভারলে (টেক্সট ফুটিয়ে তোলার জন্য) */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-blue-700/70 via-blue-600/50 to-blue-900/90 shadow-[inset_0_0_150px_rgba(0,0,0,0.4)]"></div>

        {/* ৩. কন্টেন্ট (এনিমেশনের উপরে থাকবে) */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          
          {/* Back to Home Button */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-white group w-fit">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all border border-white/20">
                <ChevronLeft size={20} />
              </div>
              <span className="font-bold">{"Back to Home"}</span>
            </Link>
          </div>

          {/* Branding Content */}
          <div className="max-w-md">
            <h1 className="text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              {"Exchange Money "} <br />
              <span className="text-blue-200">{"Easier & Safer."}</span>
            </h1>
            <p className="text-blue-50 text-xl mb-12 leading-relaxed font-medium drop-shadow-md">
              {"Join thousands of users who trade digital currencies with instant processing and bank-grade security."}
            </p>

            {/* Quick Stats Grid with Glassmorphism */}
            <div className="grid grid-cols-2 gap-6 mt-10">
               <div className="bg-white/10 backdrop-blur-xl p-5 rounded-[2rem] border border-white/20 shadow-2xl shadow-black/20">
                  <div className="flex items-center gap-2 text-white font-bold mb-1">
                     <ShieldCheck size={20} className="text-blue-300" />
                     <span>{"Secure"}</span>
                  </div>
                  <p className="text-blue-100 text-xs">{"Fully encrypted & protected."}</p>
               </div>
               <div className="bg-white/10 backdrop-blur-xl p-5 rounded-[2rem] border border-white/20 shadow-2xl shadow-black/20">
                  <div className="flex items-center gap-2 text-white font-bold mb-1">
                     <Zap size={20} className="text-yellow-300" />
                     <span>{"Instant"}</span>
                  </div>
                  <p className="text-blue-100 text-xs">{"Processing in 5-15 mins."}</p>
               </div>
            </div>
          </div>

          {/* Footer Text */}
          <div>
            <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.2em]">
              {"© 2024 Exonpay Exchange Service"}
            </p>
          </div>
        </div>
      </section>

      {/* --- Right Side: Login Form --- */}
      <section className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-white relative z-20 shadow-[-50px_0_100px_rgba(0,0,0,0.1)]">
        {/* Mobile Header */}
        <div className="lg:hidden mb-12 flex items-center justify-between">
           <Link href="/" className="text-2xl font-black text-blue-600">{"Exonpay"}</Link>
           <Link href="/" className="text-sm font-bold text-gray-400">{"Back"}</Link>
        </div>

        <LoginForm />
      </section>

    </main>
  );
}