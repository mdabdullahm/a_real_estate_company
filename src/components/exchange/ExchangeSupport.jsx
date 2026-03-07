"use client";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Send, 
  Headset, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

const supportOptions = [
  {
    id: 1,
    title: "WhatsApp Support",
    desc: "Chat directly with our support team for instant help.",
    value: "+880 1XXX-XXXXXX",
    icon: <MessageCircle size={24} className="text-green-600" />,
    color: "bg-green-50",
    hover: "hover:border-green-200"
  },
  {
    id: 2,
    title: "Telegram Channel",
    desc: "Join our community for latest rates and updates.",
    value: "@exonpay_official",
    icon: <Send size={24} className="text-blue-500" />,
    color: "bg-blue-50",
    hover: "hover:border-blue-200"
  },
  {
    id: 3,
    title: "24/7 Live Chat",
    desc: "Talk to our experts directly from the website dashboard.",
    value: "Active Now",
    icon: <Headset size={24} className="text-purple-600" />,
    color: "bg-purple-50",
    hover: "hover:border-purple-200"
  }
];

const ExchangeSupport = () => {
  return (
    <section className="py-20">
      <div className="max-w-full mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            {"Still Need Help?"}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {"Our dedicated support team is ready to assist you 24/7 with any questions or transaction issues."}
          </p>
        </div>

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm transition-all duration-300 flex flex-col items-center text-center group ${option.hover}`}
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {option.icon}
              </div>

              {/* Text */}
              <h4 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h4>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {option.desc}
              </p>

              {/* Contact Value */}
              <div className="mt-auto w-full">
                <div className="bg-gray-50 rounded-2xl py-3 px-4 mb-4 font-bold text-gray-700 text-sm flex items-center justify-center gap-2">
                  <span>{option.value}</span>
                </div>
                
                <button className="flex items-center justify-center gap-2 text-blue-600 font-bold text-sm group/btn">
                  <span>{"Contact Now"}</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Email Option */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            {"Prefer email? Reach us at "}
            <a href="mailto:support@exonpay.com" className="text-blue-600 font-bold hover:underline">
               {"support@exonpay.com"}
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ExchangeSupport;