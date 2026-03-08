"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // এটি চেক করবে ইউজার কোন পেজে আছে

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Exchange", href: "/exchange" },
    { name: "Rates", href: "/rates" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // কমন ডিজাইন ক্লাস
  const activeClass = "bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition";
  const inactiveClass = "text-gray-600 font-medium hover:text-blue-600 px-5 py-2 transition";

  return (
    <nav className="bg-white/50 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50">
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

          {/* Login/Register Buttons (এখানেই ম্যাজিক) */}
          <div className="hidden md:flex items-center space-x-2">
            
            {/* Login Button */}
            <Link 
              href="/login" 
              className={pathname === "/login" ? activeClass : inactiveClass}
            >
              Login
            </Link>

            {/* Register Button */}
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

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="block text-gray-600">
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-2">
            <Link href="/login" className={pathname === "/login" ? "bg-blue-600 text-white p-2 text-center rounded" : "text-center p-2 border"}>Login</Link>
            <Link href="/register" className={pathname === "/register" ? "bg-blue-600 text-white p-2 text-center rounded" : "text-center p-2 border"}>Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;