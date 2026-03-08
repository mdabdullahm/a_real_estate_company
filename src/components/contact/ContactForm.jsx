"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  MessageSquare, 
  Send, 
  HelpCircle, 
  Info,
  CheckCircle2
} from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // এখানে আপনার API কল করতে পারেন
  };

  return (
    <section className="py-16">
      <div className="bg-white rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
        <div className="grid lg:grid-cols-12">
          
          {/* Left Side: The Form */}
          <div className="lg:col-span-7 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-50">
            <div className="max-w-full">
              <h2 className="text-3xl font-black text-gray-900 mb-2">{"Send Us a Message"}</h2>
              <p className="text-gray-500 mb-10">{"Fill out the form below and our team will get back to you within 15 minutes."}</p>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{"Full Name"}</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. John Doe"
                        className="w-full bg-gray-50 border border-transparent focus:border-blue-300 focus:bg-white rounded-2xl py-4 pl-12 pr-4 outline-none transition-all font-medium text-gray-700"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{"Email Address"}</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="email" 
                        required
                        placeholder="johndoe@example.com"
                        className="w-full bg-gray-50 border border-transparent focus:border-blue-300 focus:bg-white rounded-2xl py-4 pl-12 pr-4 outline-none transition-all font-medium text-gray-700"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{"Subject"}</label>
                    <select className="w-full bg-gray-50 border border-transparent focus:border-blue-300 focus:bg-white rounded-2xl py-4 px-4 outline-none transition-all font-bold text-gray-700 cursor-pointer appearance-none">
                      <option>{"Exchange Issue"}</option>
                      <option>{"Payment Verification"}</option>
                      <option>{"Account Support"}</option>
                      <option>{"Partnership"}</option>
                      <option>{"Other"}</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{"Your Message"}</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                      <textarea 
                        rows="4"
                        required
                        placeholder="How can we help you?"
                        className="w-full bg-gray-50 border border-transparent focus:border-blue-300 focus:bg-white rounded-2xl py-4 pl-12 pr-4 outline-none transition-all font-medium text-gray-700 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 group">
                    <span>{"Send Message"}</span>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-blue-50 p-10 rounded-[2.5rem] text-center border border-blue-100"
                >
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-200">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{"Message Sent!"}</h3>
                  <p className="text-blue-700/60 font-medium">{"Thank you for reaching out. Our team will contact you very soon."}</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-sm font-black text-blue-600 uppercase tracking-widest hover:underline"
                  >
                    {"Send another message"}
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Side: Quick Support Info */}
          <div className="lg:col-span-5 bg-gray-50/50 p-8 md:p-16 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">{"Quick Support Info"}</h3>
            
            <div className="space-y-8">
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-gray-100 shrink-0">
                     <HelpCircle size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-800">{"Check FAQ First"}</h4>
                     <p className="text-sm text-gray-500 leading-relaxed">
                       {"Your question might already be answered in our Frequently Asked Questions section."}
                     </p>
                  </div>
               </div>

               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm border border-gray-100 shrink-0">
                     <Info size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-800">{"Transaction ID"}</h4>
                     <p className="text-sm text-gray-500 leading-relaxed">
                       {"If you're asking about an exchange, please include your Transaction ID for faster help."}
                     </p>
                  </div>
               </div>
            </div>

            {/* Support Hours Card */}
            <div className="mt-12 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
               <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">{"Support Hours"}</p>
               <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-gray-500">{"Saturday - Thursday"}</span>
                     <span className="font-bold text-gray-800">{"09:00 AM - 12:00 AM"}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-gray-500">{"Friday"}</span>
                     <span className="font-bold text-gray-800">{"02:00 PM - 12:00 AM"}</span>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;