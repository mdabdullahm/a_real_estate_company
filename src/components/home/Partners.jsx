"use client";
import { motion } from "framer-motion";

// লোগো ডেটাবেজ
const gatewayPartners = [
  { name: "Skrill", logo: "https://i.ibb.co.com/BV5Bnm5D/skrill-logo-png-seeklogo-511551.png", label: "Skrill" },
  { name: "Neteller", logo: "https://i.ibb.co.com/YFpLRDrn/neteller-logo-png-seeklogo-220684.png", label: "Neteller" },
  { name: "Perfect Money", logo: "https://i.ibb.co.com/nMZMKBDg/perfect-day-at-cococay-logo-png-seeklogo-352344.png", label: "Perfect Money" },
  { name: "Payeer", logo: "https://i.ibb.co.com/spdbN9wM/payeer-logo-png-seeklogo-347899.png", label: "Payeer" },
];

const connectionPartners = [
  { name: "1XBET", logo: "https://i.ibb.co.com/YFc3RP3Y/1xbet-logo-png-seeklogo-355459.png", label: "1XBET" },
  { name: "MELBET", logo: "https://i.ibb.co.com/DgtKbk7y/melbet-logo-png-seeklogo-373961.png", label: "MELBET", dark: true },
  { name: "BETWINNER", logo: "https://i.ibb.co.com/mV0S5XQY/image-260nw-2519219227.webp", label: "BETWINNER", dark: true },
  { name: "LineBet", logo: "https://seeklogo.com/images/L/linebet-logo-509A6D28A2-seeklogo.com.png", label: "LineBet" },
];

const localPartners = [
  { name: "bKash", logo: "https://www.logo.wine/a/logo/BKash/BKash-Logo.wine.svg", label: "bKash" },
  { name: "Nagad", logo: "https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg", label: "Nagad" },
  { name: "Rocket", logo: "https://i.ibb.co.com/LXghwFMx/dutch-bangla-rocket-logo-png-seeklogo-317692.png", label: "Rocket" },
  { name: "Upay", logo: "https://www.logo.wine/a/logo/Upay/Upay-Logo.wine.svg", label: "Upay" },
];

const Partners = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 space-y-20">
        
        {/* --- Category 1: Payment Gateways --- */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px bg-gray-100 flex-1"></div>
            <h3 className="text-xl font-bold text-gray-800">
              Payment <span className="text-blue-600">Gateways</span> We Accept
            </h3>
            <div className="h-px bg-gray-100 flex-1"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {gatewayPartners.map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white border border-gray-100 rounded-[2rem] p-6 flex flex-col items-center shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group">
                <div className="h-12 w-full flex items-center justify-center mb-4">
                  <img src={item.logo} alt={item.name} className="h-full object-contain group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Category 2: Connections --- */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <h3 className="text-xl font-bold text-gray-800">We are connected with</h3>
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {connectionPartners.map((item, i) => (
              <motion.div key={i} variants={itemVariants} 
                className={`${item.dark ? 'bg-[#f2f2fa]' : 'bg-white'} border border-gray-100 rounded-2xl p-6 flex items-center justify-center shadow-sm h-20 hover:shadow-lg transition-all`}
              >
                <img src={item.logo} alt={item.name} className="h-8 object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Category 3: Local Payment --- */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px border-t-2 border-dashed border-gray-200 flex-1"></div>
            <h3 className="text-xl font-bold text-gray-800">
              Local <span className="text-green-600">Payment</span> We Accept
            </h3>
            <div className="h-px border-t-2 border-dashed border-gray-200 flex-1"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {localPartners.map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white border border-gray-100 rounded-[2rem] p-6 flex flex-col items-center shadow-sm hover:shadow-xl hover:border-green-100 transition-all group">
                <div className="h-14 w-full flex items-center justify-center mb-2">
                  <img src={item.logo} alt={item.name} className="h-full object-contain group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Partners;