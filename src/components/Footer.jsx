"use client";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap 
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-black text-white tracking-tighter">
              {"Exonpay"}
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {"The most trusted digital currency exchange platform in Bangladesh. Fast, secure, and reliable service since 2023."}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all group">
                <Facebook size={18} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all group">
                <Send size={18} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all group">
                <Twitter size={18} className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8">{"Quick Links"}</h4>
            <ul className="space-y-4">
              {["Home", "Exchange", "Rates", "Blog", "Contact", "FAQ"].map((link) => (
                <li key={link}>
                  <Link 
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-500 text-sm flex items-center gap-2 group transition-all"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services & Support */}
          <div>
            <h4 className="text-lg font-bold mb-8">{"Support & Legal"}</h4>
            <ul className="space-y-4">
              {["Terms of Service", "Privacy Policy", "Anti-Fraud Policy", "Fees & Limits", "Kyc Verification"].map((link) => (
                <li key={link}>
                  <Link 
                    href="#" 
                    className="text-gray-400 hover:text-blue-500 text-sm transition-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8">{"Contact Info"}</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0 border border-blue-600/20">
                  <Mail size={18} className="text-blue-500" />
                </div>
                <div className="text-sm">
                  <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-1">{"Email Us"}</p>
                  <p className="text-gray-300">{"support@exonpay.com"}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center shrink-0 border border-green-600/20">
                  <Phone size={18} className="text-green-500" />
                </div>
                <div className="text-sm">
                  <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-1">{"Call Center"}</p>
                  <p className="text-gray-300">{"09612-000000"}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-600/10 flex items-center justify-center shrink-0 border border-purple-600/20">
                  <MapPin size={18} className="text-purple-500" />
                </div>
                <div className="text-sm">
                  <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-1">{"Office Address"}</p>
                  <p className="text-gray-300 leading-relaxed">{"Gulshan-2, Dhaka, Bangladesh"}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 w-full mb-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-blue-500" />
              <span>{"SSL Secure"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-yellow-500" />
              <span>{"Instant Payout"}</span>
            </div>
          </div>

          <p className="text-gray-500 text-xs">
            {"©"} {currentYear} <span className="text-gray-300">{"Exonpay"}</span>{". All Rights Reserved."}
          </p>

          <div className="flex items-center gap-2">
             <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{"System Status: Online"}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;