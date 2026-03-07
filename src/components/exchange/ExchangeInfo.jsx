"use client";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Clock, 
  HelpCircle, 
  BadgeCheck, 
  AlertTriangle,
  MessageCircle
} from "lucide-react";

const ExchangeInfo = () => {
  const infoCards = [
    {
      id: 1,
      title: "Transaction Rules",
      icon: <BadgeCheck className="text-blue-600" size={24} />,
      items: [
        "Minimum exchange amount is $10.",
        "Must use your own personal account.",
        "Third-party payments are strictly prohibited.",
        "Check current stock before large orders."
      ]
    },
    {
      id: 2,
      title: "Safety Warnings",
      icon: <ShieldAlert className="text-orange-600" size={24} />,
      items: [
        "Double check the wallet/account number.",
        "Don't share your transaction ID with others.",
        "Be aware of phishing sites and fake groups.",
        "Transactions are irreversible once sent."
      ]
    },
    {
      id: 3,
      title: "Support & Hours",
      icon: <Clock className="text-green-600" size={24} />,
      items: [
        "Our service is active 24/7.",
        "Live support available 09:00 AM - 12:00 AM.",
        "Average processing time is 5-15 mins.",
        "Contact us for any pending orders."
      ]
    }
  ];

  return (
    <section className="py-12 mx-4 lg:mx-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {infoCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800">{card.title}</h4>
            </div>

            <ul className="space-y-4">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <span className="text-gray-500 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Need Help CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 p-6 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center space-x-4">
          <div className="bg-blue-600 p-2 rounded-full text-white">
            <MessageCircle size={20} />
          </div>
          <p className="text-blue-900 font-medium">
            {"Need immediate help with your transaction?"}
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all">
          {"Chat with Support"}
        </button>
      </motion.div>
    </section>
  );
};

export default ExchangeInfo;