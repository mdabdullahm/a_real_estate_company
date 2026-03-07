"use client";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  UserCheck, 
  FileLock2, 
  ServerCrash 
} from "lucide-react";

const securityFeatures = [
  {
    id: 1,
    title: "256-bit SSL Encryption",
    desc: "All your data and transactions are protected by industry-leading end-to-end encryption.",
    icon: <Lock size={24} className="text-blue-600" />,
  },
  {
    id: 2,
    title: "Anti-Fraud Monitoring",
    desc: "Our automated systems monitor every transaction 24/7 to detect and prevent suspicious activity.",
    icon: <Eye size={24} className="text-purple-600" />,
  },
  {
    id: 3,
    title: "Secure Cold Storage",
    desc: "Most of our digital assets are kept in offline cold storage to ensure maximum safety against hacks.",
    icon: <FileLock2 size={24} className="text-green-600" />,
  },
  {
    id: 4,
    title: "Identity Protection",
    desc: "We follow strict KYC/AML protocols to protect your identity and ensure a clean ecosystem.",
    icon: <UserCheck size={24} className="text-orange-600" />,
  }
];

const ExchangeSecurity = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
              <ShieldCheck size={20} />
              <span>{"Security Infrastructure"}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              {"Your Safety is Our"} <br />
              <span className="text-blue-600">{"Top Priority."}</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              {"We implement bank-grade security protocols to ensure that every exchange you make is 100% secure. From encryption to real-time monitoring, we've got you covered."}
            </p>

            <div className="flex flex-wrap gap-6">
               <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-bold text-gray-700 text-sm">{"Servers: All Systems Online"}</span>
               </div>
               <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center space-x-3">
                  <ShieldCheck className="text-blue-600" size={18} />
                  <span className="font-bold text-gray-700 text-sm">{"Verified Platform"}</span>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Security Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 transition-all">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Trust Line */}
        <div className="mt-20 pt-10 border-t border-gray-50 flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
           {/* এখানে আপনি কিছু সিকিউরিটি ব্যাজ বা লোগো দিতে পারেন */}
           <span className="font-black text-2xl">SSL SECURE</span>
           <span className="font-black text-2xl">TRUSTE</span>
           <span className="font-black text-2xl">PCI COMPLIANT</span>
           <span className="font-black text-2xl">2FA READY</span>
        </div>
      </div>
    </section>
  );
};

export default ExchangeSecurity;