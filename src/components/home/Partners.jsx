"use client";
import { motion } from "framer-motion";
import { 
  CreditCard, 
  Wallet, 
  BadgeDollarSign, 
  Coins, 
  ArrowLeftRight, 
  Banknote,
  ShieldCheck,
  Globe
} from "lucide-react";

const partners = [
  { name: "bKash", icon: <Wallet className="text-pink-500" />, bgColor: "bg-pink-50" },
  { name: "Nagad", icon: <Banknote className="text-orange-500" />, bgColor: "bg-orange-50" },
  { name: "Binance", icon: <Coins className="text-yellow-500" />, bgColor: "bg-yellow-50" },
  { name: "PayPal", icon: <CreditCard className="text-blue-600" />, bgColor: "bg-blue-50" },
  { name: "Perfect Money", icon: <BadgeDollarSign className="text-red-500" />, bgColor: "bg-red-50" },
  { name: "Skrill", icon: <ArrowLeftRight className="text-purple-500" />, bgColor: "bg-purple-50" },
  { name: "Payeer", icon: <Globe className="text-blue-400" />, bgColor: "bg-blue-50" },
  { name: "Bank Transfer", icon: <ShieldCheck className="text-green-600" />, bgColor: "bg-green-50" },
];

const Partners = () => {
  // স্লাইডারটি লুপ করার জন্য ডাবল করে নিচ্ছি
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="max-w-full mx-auto px-4 mb-10 text-center">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-3">
          Our Trusted Partners
        </h2>
        <p className="text-gray-500 text-lg">Supported payment methods for instant exchange</p>
      </div>

      <div className="relative flex items-center">
        {/* লোগো স্লাইডার */}
        <motion.div
          className="flex space-x-8 items-center"
          animate={{
            x: ["0%", "-50%"], // এটি লুপ তৈরি করবে
          }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 min-w-[220px] hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${partner.bgColor} rounded-xl flex items-center justify-center`}>
                {partner.icon}
              </div>
              <span className="text-xl font-bold text-gray-800 whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* সাইডে হালকা শ্যাডো ইফেক্ট (ঐচ্ছিক) */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Partners;