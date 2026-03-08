"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // স্ক্রল পজিশন চেক করার লজিক
  useEffect(() => {
    const toggleVisibility = () => {
      // যদি ইউজার ৩০০ পিক্সেলের বেশি নিচে যায়, তবে বাটন দেখাবে
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // উপরে স্ক্রল করার ফাংশন
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-4 rounded-full shadow-2xl shadow-blue-300 border border-white/20 hover:bg-blue-700 transition-colors group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          
          {/* Tooltip (ঐচ্ছিক) */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {"Back to Top"}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;