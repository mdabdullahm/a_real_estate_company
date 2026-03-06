"use client";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ariful Islam",
    role: "Regular Exchanger",
    comment: "Exonpay is the fastest exchange service I've ever used. My USDT to bKash exchange was completed in just 5 minutes!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=1",
    location: "Dhaka, BD"
  },
  {
    id: 2,
    name: "Samantha Reed",
    role: "Freelancer",
    comment: "As a freelancer, I need to convert my Payeer USD frequently. Their rates are always better than other platforms. Highly recommended!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=2",
    location: "USA"
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    role: "Crypto Trader",
    comment: "Very reliable and secure. The 24/7 support team is very helpful. They helped me through my first transaction smoothly.",
    rating: 4,
    image: "https://i.pravatar.cc/150?u=3",
    location: "Chittagong, BD"
  },
  {
    id: 4,
    name: "Mehedi Hasan",
    role: "Business Owner",
    comment: "I've been using this platform for 6 months now. Never faced any issues with my large transactions. Solid service!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=4",
    location: "Sylhet, BD"
  },
  {
    id: 5,
    name: "Emily Watson",
    role: "Digital Nomad",
    comment: "Quick, easy, and transparent. No hidden fees. The interface is also very user-friendly even for beginners.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=5",
    location: "UK"
  },
  {
    id: 6,
    name: "Rashed Khan",
    role: "Online Learner",
    comment: "Perfect for buying Perfect Money or Advcash. Their automated system makes everything so much easier.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=6",
    location: "Rajshahi, BD"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-60 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">User Feedback</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-gray-500 text-lg">
              Join thousands of satisfied users who trust Exonpay for their daily currency exchanges.
            </p>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-blue-50/50 group-hover:text-blue-100 transition-colors">
                <Quote size={60} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={`${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} 
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 mb-8 leading-relaxed italic relative z-10">
                "{review.comment}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-4 border-t border-gray-50 pt-6">
                <div className="relative">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full">
                    <CheckCircle2 size={18} className="text-blue-600 fill-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-blue-600 font-semibold mb-1 uppercase tracking-wide">{review.role}</p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stat */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center justify-center space-y-4"
        >
          <div className="flex -space-x-3">
             {[1,2,3,4,5].map(i => (
               <img key={i} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" src={`https://i.pravatar.cc/150?u=${i+10}`} alt="user" />
             ))}
             <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
               10k+
             </div>
          </div>
          <p className="text-gray-500 font-medium">Trusted by more than <span className="text-blue-600 font-bold">10,000+ users</span> globally</p>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;