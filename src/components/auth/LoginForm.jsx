"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, Chrome } from "lucide-react";
import Link from "next/link";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-black text-gray-900 mb-2">{"Welcome Back!"}</h2>
          <p className="text-gray-500 font-medium">
            {"Login to your Exonpay account to start exchanging."}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{"Email Address"}</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full bg-gray-50 border border-gray-100 focus:border-blue-300 focus:bg-white rounded-2xl py-4 pl-14 pr-4 outline-none transition-all font-medium text-gray-700"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{"Password"}</label>
              <Link href="/forgot-password" size={12} className="text-xs font-bold text-blue-600 hover:underline">
                {"Forgot Password?"}
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-100 focus:border-blue-300 focus:bg-white rounded-2xl py-4 pl-14 pr-12 outline-none transition-all font-medium text-gray-700"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-3 px-1">
            <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <label htmlFor="remember" className="text-sm font-medium text-gray-500 cursor-pointer">
              {"Keep me logged in"}
            </label>
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 group">
            <span>{"Login to Account"}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Social Login Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px bg-gray-100 flex-1"></div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{"Or continue with"}</span>
          <div className="h-px bg-gray-100 flex-1"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 border border-gray-100 rounded-2xl py-3 px-4 hover:bg-gray-50 transition-all font-bold text-sm text-gray-700">
            <Chrome size={18} className="text-red-500" />
            <span>{"Google"}</span>
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-100 rounded-2xl py-3 px-4 hover:bg-gray-50 transition-all font-bold text-sm text-gray-700">
             <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-white font-black text-[10px]">f</div>
             <span>{"Facebook"}</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            {"Don't have an account? "}
            <Link href="/register" className="text-blue-600 font-bold hover:underline">
              {"Create Free Account"}
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;