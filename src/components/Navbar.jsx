"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"; // এনিমেশনের জন্য ইমপোর্ট

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Exchange", href: "/exchange" },
    { name: "Rates", href: "/rates" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const activeClass = "bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition shadow-md";
  const inactiveClass = "text-gray-600 font-medium hover:text-blue-600 px-5 py-2 transition";

  return (
    <nav className="bg-white/70 backdrop-blur-xl sticky top-0 z-50 relative">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Exonpay
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition ${
                  pathname === link.href ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Login/Register Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              href="/login" 
              className={pathname === "/login" ? activeClass : inactiveClass}
            >
              Login
            </Link>
            <Link
              href="/register"
              className={pathname === "/register" ? activeClass : inactiveClass}
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- এনিমেটেড ৪ রঙের বর্ডার (নিচে) --- */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-blue-500 via-cyan-400 via-indigo-500 to-purple-500"
          style={{ width: "200%" }} // মসৃণ লুপের জন্য ডাবল উইডথ
        />
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="block text-gray-600 font-medium">
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 border-t pt-4">
            <Link href="/login" className={pathname === "/login" ? "bg-blue-600 text-white p-2 text-center rounded" : "text-center p-2 border"}>Login</Link>
            <Link href="/register" className={pathname === "/register" ? "bg-blue-600 text-white p-2 text-center rounded" : "text-center p-2 border"}>Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;