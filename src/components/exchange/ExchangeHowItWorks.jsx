"use client";
import { motion } from "framer-motion";
import { 
  ClipboardEdit, 
  WalletCards, 
  BadgeCheck, 
  ArrowRight 
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Fill the Details",
    desc: "Enter the amount you want to exchange and provide your receiving account details.",
    icon: <ClipboardEdit size={28} className="text-blue-600" />,
    color: "bg-blue-50"
  },
  {
    id: "02",
    title: "Complete Payment",
    desc: "Send the funds to our provided wallet or account number shown in the next step.",
    icon: <WalletCards size={28} className="text-purple-600" />,
    color: "bg-purple-50"
  },
  {
    id: "03",
    title: "Get Your Funds",
    desc: "Once confirmed, our automated system will send the exchanged amount to you instantly.",
    icon: <BadgeCheck size={28} className="text-green-600" />,
    color: "bg-green-50"
  }
];

const ExchangeHowItWorks = () => {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="max-w-full mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            {"Simple 3-Step Process"}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {"We've simplified the exchange process to make it as fast and secure as possible for you."}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connecting Arrows (Desktop Only) */}
          <div className="hidden md:block absolute top-1/3 left-1/4 w-1/2 h-px border-t-2 border-dashed border-gray-200 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Step Number Badge */}
              <div className="mb-6 relative">
                <div className={`w-20 h-20 ${step.color} rounded-[2rem] flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform duration-500`}>
                  {step.icon}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white shadow-lg border border-gray-100 w-10 h-10 rounded-full flex items-center justify-center font-black text-gray-800 text-sm">
                  {step.id}
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed px-6">
                {step.desc}
              </p>

              {/* Mobile Arrow */}
              {index !== steps.length - 1 && (
                <div className="md:hidden mt-8 text-gray-300">
                  <ArrowRight size={24} className="rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Alert Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-8 rounded-[2.5rem] bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-600/30">
                <BadgeCheck className="text-blue-400" size={32} />
             </div>
             <div>
                <h4 className="text-xl font-bold">{"Ready to make a transfer?"}</h4>
                <p className="text-gray-400 text-sm">{"All transactions are encrypted and monitored for your safety."}</p>
             </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all whitespace-nowrap">
            {"Start Exchange Now"}
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ExchangeHowItWorks;