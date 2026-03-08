"use client";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Send, 
  Share2 
} from "lucide-react";

const socialPlatforms = [
  {
    id: 1,
    name: "Facebook",
    username: "/exonpay.official",
    icon: <Facebook size={24} />,
    color: "hover:bg-[#1877F2]",
    textColor: "group-hover:text-white",
    bgColor: "bg-blue-50",
    link: "#"
  },
  {
    id: 2,
    name: "Twitter / X",
    username: "@exonpay_io",
    icon: <Twitter size={24} />,
    color: "hover:bg-black",
    textColor: "group-hover:text-white",
    bgColor: "bg-gray-100",
    link: "#"
  },
  {
    id: 3,
    name: "Instagram",
    username: "@exonpay_exchange",
    icon: <Instagram size={24} />,
    color: "hover:bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    textColor: "group-hover:text-white",
    bgColor: "bg-pink-50",
    link: "#"
  },
  {
    id: 4,
    name: "YouTube",
    username: "Exonpay Tutorials",
    icon: <Youtube size={24} />,
    color: "hover:bg-[#FF0000]",
    textColor: "group-hover:text-white",
    bgColor: "bg-red-50",
    link: "#"
  },
  {
    id: 5,
    name: "LinkedIn",
    username: "Exonpay Solutions",
    icon: <Linkedin size={24} />,
    color: "hover:bg-[#0A66C2]",
    textColor: "group-hover:text-white",
    bgColor: "bg-blue-50",
    link: "#"
  },
  {
    id: 6,
    name: "Telegram",
    username: "t.me/exonpay",
    icon: <Send size={24} />,
    color: "hover:bg-[#229ED9]",
    textColor: "group-hover:text-white",
    bgColor: "bg-sky-50",
    link: "#"
  }
];

const SocialLinks = () => {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="max-w-full mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              <Share2 size={16} />
              <span>{"Connect With Us"}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
              {"Join Our "} <span className="text-blue-600">{"Community"}</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              {"Follow us on social media for the latest exchange rates, market news, and exclusive platform updates."}
            </p>
          </motion.div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {socialPlatforms.map((social, index) => (
            <motion.a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group flex flex-col items-center justify-center p-8 rounded-[2rem] border border-gray-100 bg-white transition-all duration-500 ${social.color} shadow-sm hover:shadow-2xl`}
            >
              <div className={`w-14 h-14 ${social.bgColor} rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110`}>
                <div className={`text-gray-600 ${social.textColor} transition-colors`}>
                  {social.icon}
                </div>
              </div>
              
              <h4 className={`font-bold text-gray-900 text-sm mb-1 ${social.textColor} transition-colors`}>
                {social.name}
              </h4>
              <p className={`text-[10px] font-medium text-gray-400 ${social.textColor} opacity-60 transition-colors truncate w-full text-center`}>
                {social.username}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Newsletter Callout (Optional) */}
        <div className="mt-20 p-10 rounded-[3rem] bg-blue-50 border border-blue-100 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/50 rounded-full blur-3xl"></div>
           <p className="relative z-10 text-blue-900 font-bold text-lg">
             {"Don't miss a beat. Over 50,000+ people follow our social updates daily!"}
           </p>
        </div>

      </div>
    </section>
  );
};

export default SocialLinks;