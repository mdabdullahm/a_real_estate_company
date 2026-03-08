"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Chrome, 
  ShieldCheck 
} from "lucide-react";
import Link from "next/link";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-black text-gray-900 mb-2">{"Create Account"}</h2>
          <p className="text-gray-500 font-medium">
            {"Join Exonpay today and experience the fastest currency exchange."}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{"Full Name"}</label>
            <div className="relative">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="e.g. Ariful Islam"
                className="w-full bg-gray-50 border border-gray-100 focus:border-blue-300 focus:bg-white rounded-2xl py-4 pl-14 pr-4 outline-none transition-all font-medium text-gray-700"
              />
            </div>
          </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{"Password"}</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-100 focus:border-blue-300 focus:bg-white rounded-2xl py-4 pl-12 pr-10 outline-none transition-all font-medium text-gray-700 text-sm"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{"Confirm"}</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-100 focus:border-blue-300 focus:bg-white rounded-2xl py-4 pl-12 pr-10 outline-none transition-all font-medium text-gray-700 text-sm"
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-3 px-1">
            <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <label htmlFor="terms" className="text-xs font-medium text-gray-500 cursor-pointer leading-relaxed">
              {"I agree to the "}
              <Link href="/terms" className="text-blue-600 font-bold hover:underline">{"Terms of Service"}</Link>
              {" and "}
              <Link href="/privacy" className="text-blue-600 font-bold hover:underline">{"Privacy Policy"}</Link>
            </label>
          </div>

          {/* Register Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 group">
            <span>{"Create My Account"}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Social Register Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px bg-gray-100 flex-1"></div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{"Sign up with"}</span>
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

        {/* Login Link */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            {"Already have an account? "}
            <Link href="/login" className="text-blue-600 font-bold hover:underline">
              {"Login Here"}
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;