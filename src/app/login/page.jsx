import Link from "next/link";
import { ShieldCheck, Zap, TrendingUp, ChevronLeft } from "lucide-react";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col lg:flex-row">
      
      {/* --- Left Side: Branding & Info (Hidden on Mobile) --- */}
      <section className="hidden lg:flex lg:w-1/2 bg-blue-600 relative overflow-hidden flex-col justify-between p-16">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-0">
           <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-400 rounded-full blur-[100px] opacity-50"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-50"></div>
        </div>

        {/* Logo / Back to Home */}
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 text-white group">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all">
              <ChevronLeft size={20} />
            </div>
            <span className="font-bold">{"Back to Home"}</span>
          </Link>
        </div>

        {/* Branding Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-black text-white mb-6 leading-tight">
            {"Exchange Money "} <br />
            <span className="text-blue-200">{"Easier & Safer."}</span>
          </h1>
          <p className="text-blue-100 text-lg mb-12 max-w-md leading-relaxed">
            {"Join thousands of users who trade digital currencies with instant processing and bank-grade security."}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-8">
             <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold">
                   <ShieldCheck size={20} className="text-blue-300" />
                   <span>{"Secure"}</span>
                </div>
                <p className="text-blue-200 text-xs">{"Fully encrypted transactions and data protection."}</p>
             </div>
             <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold">
                   <Zap size={20} className="text-yellow-300" />
                   <span>{"Instant"}</span>
                </div>
                <p className="text-blue-200 text-xs">{"Average processing time of 5 to 15 minutes."}</p>
             </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10">
          <p className="text-blue-300 text-xs font-medium uppercase tracking-[0.2em]">
            {"© 2024 Exonpay Exchange Service"}
          </p>
        </div>
      </section>

      {/* --- Right Side: Login Form --- */}
      <section className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-white">
        {/* Mobile Header (Shown only on small screens) */}
        <div className="lg:hidden mb-12 flex items-center justify-between">
           <Link href="/" className="text-2xl font-black text-blue-600">{"Exonpay"}</Link>
           <Link href="/" className="text-sm font-bold text-gray-400">{"Back"}</Link>
        </div>

        {/* The Form Component */}
        <LoginForm />
      </section>

    </main>
  );
}