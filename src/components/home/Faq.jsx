"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "How long does a typical exchange take?",
    answer: "Most of our exchange orders are completed within 5 to 15 minutes. However, during high traffic or manual verification, it may take up to 30 minutes. If it takes longer, please contact our 24/7 support."
  },
  {
    id: 2,
    question: "What are the minimum and maximum exchange limits?",
    answer: "The minimum exchange limit starts from $10 or 1,000 BDT, depending on the currency pair. The maximum limit varies based on our current stock availability, which you can check in the Live Rates section."
  },
  {
    id: 3,
    question: "Are there any hidden fees or extra charges?",
    answer: "No, we believe in complete transparency. The rate you see on our calculator during the exchange process is the final rate. There are no hidden service fees or extra commissions."
  },
  {
    id: 4,
    question: "Do I need to verify my identity to use Exonpay?",
    answer: "For small transactions, basic account details are enough. However, for larger amounts or certain currency pairs, we may require KYC (Know Your Customer) verification to ensure maximum security and prevent fraud."
  },
  {
    id: 5,
    question: "Is my personal and financial information secure?",
    answer: "Absolutely. We use industry-standard SSL encryption and multi-layer security protocols. We never store your sensitive financial passwords, and your data is never shared with third parties."
  },
  {
    id: 6,
    question: "What should I do if I send money to the wrong account?",
    answer: "If you have made a mistake in the transaction details, please contact our live support immediately with your transaction ID. We will do our best to assist you, although blockchain transactions cannot be reversed once confirmed."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Header & Support Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
                <HelpCircle size={20} />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Any Questions? <br />
                <span className="text-blue-600">We’ve Got Answers.</span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                If you can't find the answer you're looking for, feel free to reach out to our support team anytime.
              </p>
              
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <HelpCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Still have questions?</h4>
                  <p className="text-sm text-gray-500">Our team is ready to help you 24/7.</p>
                  <button className="text-blue-600 font-bold text-sm hover:underline mt-1">Contact Support →</button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-white border-blue-200 shadow-lg shadow-blue-50" 
                    : "bg-white/50 border-gray-100 hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg transition-colors ${activeIndex === index ? "text-blue-600" : "text-gray-800"}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 p-1 rounded-full transition-colors ${activeIndex === index ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"}`}>
                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                        <div className="h-px w-full bg-gray-50 mb-4"></div>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;