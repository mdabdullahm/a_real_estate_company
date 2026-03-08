"use client";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock, ExternalLink } from "lucide-react";

const ContactMap = () => {
  // গুগল ম্যাপের এমবেড ইউআরএল (এখানে আপনার অফিসের সঠিক লোকেশন কোড বসাতে পারেন)
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.000000000000!2d90.4125!3d23.7925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70debef%3A0x11ad1b1111111111!2sGulshan%202%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1715000000000!5m2!1sen!2sbd";

  return (
    <section className="py-20">
      <div className="max-w-full mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div className="max-w-xl">
              <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">
                <Navigation size={18} />
                <span>{"Find Us On Map"}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                {"Visit Our "} <span className="text-blue-600">{"Physical Office"}</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                {"We are located at the heart of the city. Feel free to drop by for a cup of coffee and discuss your business needs."}
              </p>
           </div>
           <button className="bg-white border border-gray-100 px-8 py-4 rounded-2xl font-bold text-gray-700 shadow-sm hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2 group">
              <span>{"Get Directions"}</span>
              <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>

        {/* Map Container */}
        <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl shadow-gray-200 border border-white">
          
          {/* Google Map Iframe */}
          <div className="w-full h-[500px] grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Exonpay Office Location"
            ></iframe>
          </div>

          {/* Floating Address Card (Desktop Only) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute top-10 right-10 hidden lg:block bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/50 shadow-2xl w-96"
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-100">
                  <MapPin size={24} />
               </div>
               <h4 className="text-xl font-bold text-gray-900">{"Our Location"}</h4>
            </div>

            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="w-1 h-12 bg-blue-100 rounded-full"></div>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    {"Level 4, Financial Center,"} <br />
                    {"Gulshan-2, Dhaka 1212,"} <br />
                    {"Bangladesh"}
                  </p>
               </div>

               <div className="flex items-center gap-4 text-sm text-gray-500">
                  <Clock size={18} className="text-blue-500" />
                  <span className="font-bold">{"Sat - Thu: 09 AM - 12 AM"}</span>
               </div>

               <div className="flex items-center gap-4 text-sm text-gray-500">
                  <Phone size={18} className="text-blue-500" />
                  <span className="font-bold text-gray-800">{"09612-000000"}</span>
               </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">
                 {"Verified Business Address"}
               </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile Address Card (Shown below map) */}
        <div className="lg:hidden mt-8 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
           <div className="flex items-center gap-4 mb-6">
              <MapPin className="text-blue-600" />
              <h4 className="font-bold text-gray-900">{"Headquarters Address"}</h4>
           </div>
           <p className="text-gray-500 text-sm leading-relaxed mb-6">
             {"Level 4, Financial Center, Gulshan-2, Dhaka 1212, Bangladesh"}
           </p>
           <button className="w-full bg-gray-50 text-blue-600 py-4 rounded-2xl font-bold text-sm">
              {"Open in Google Maps"}
           </button>
        </div>

      </div>
    </section>
  );
};

export default ContactMap;