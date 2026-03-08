"use client";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Send, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight
} from "lucide-react";

const contactMethods = [
  {
    id: 1,
    title: "WhatsApp Support",
    desc: "Fastest way to get help with your transaction.",
    value: "+880 1700-000000",
    icon: <MessageCircle size={28} className="text-green-600" />,
    bgColor: "bg-green-50",
    action: "Chat Now",
    link: "https://wa.me/8801700000000"
  },
  {
    id: 2,
    title: "Telegram Support",
    desc: "Join our official support channel for updates.",
    value: "@exonpay_support",
    icon: <Send size={28} className="text-blue-500" />,
    bgColor: "bg-blue-50",
    action: "Join Channel",
    link: "https://t.me/exonpay"
  },
  {
    id: 3,
    title: "Official Email",
    desc: "For business inquiries and partnership deals.",
    value: "support@exonpay.com",
    icon: <Mail size={28} className="text-purple-600" />,
    bgColor: "bg-purple-50",
    action: "Send Email",
    link: "mailto:support@exonpay.com"
  }
];

const ContactInfo = () => {
  return (
    <section className="py-12 mx-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 group"
          >
            {/* Icon Container */}
            <div className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
              {method.icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {method.title}
            </h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              {method.desc}
            </p>

            {/* Value Display */}
            <div className="bg-gray-50 rounded-2xl py-4 px-6 mb-8">
               <span className="text-gray-800 font-bold block truncate">
                 {method.value}
               </span>
            </div>

            {/* Action Link */}
            <a 
              href={method.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between text-blue-600 font-bold group/link"
            >
              <span>{method.action}</span>
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                 <ArrowRight size={18} />
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Office Address Bar (Optional) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6"
      >
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
           <MapPin size={28} />
        </div>
        <div className="flex-1 text-center md:text-left">
           <h4 className="font-bold text-gray-900 mb-1">{"Registered Office"}</h4>
           <p className="text-gray-500 text-sm">{"Level 4, Financial Center, Gulshan-2, Dhaka 1212, Bangladesh"}</p>
        </div>
        <div className="h-px w-full md:w-px md:h-12 bg-gray-100"></div>
        <div className="flex items-center gap-4">
           <Phone size={20} className="text-blue-600" />
           <span className="font-bold text-gray-800">{"09612-000000"}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactInfo;