"use client";
import { motion } from "framer-motion";
import { UserPlus, Calculator, Send, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Create Account",
    desc: "Sign up for a free account in minutes and verify your identity for secure transactions.",
    icon: <UserPlus size={32} className="text-blue-600" />,
    color: "bg-blue-100",
  },
  {
    id: 2,
    title: "Select Currencies",
    desc: "Choose the currency you want to send and the currency you want to receive from our calculator.",
    icon: <Calculator size={32} className="text-purple-600" />,
    color: "bg-purple-100",
  },
  {
    id: 3,
    title: "Confirm & Pay",
    desc: "Verify the exchange rate and send your funds to our provided wallet or account details.",
    icon: <Send size={32} className="text-orange-600" />,
    color: "bg-orange-100",
  },
  {
    id: 4,
    title: "Receive Money",
    desc: "Once payment is confirmed, your exchanged currency will be sent to your account instantly.",
    icon: <CheckCircle size={32} className="text-green-600" />,
    color: "bg-green-100",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Simple Process</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">How to Exchange in 4 Easy Steps</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Exchanging your digital assets has never been easier. Just follow these simple steps to complete your transaction securely.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -right-2 bg-white shadow-md border border-gray-100 w-8 h-8 rounded-full flex items-center justify-center font-bold text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA (Call to Action) */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all"
          >
            Start Your First Exchange
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;