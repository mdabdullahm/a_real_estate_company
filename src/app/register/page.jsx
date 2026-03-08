import Link from "next/link";
import { ShieldCheck, Zap, Star, ChevronLeft } from "lucide-react";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col lg:flex-row">
      
      {/* --- Left Side: Branding & Trust Info (Hidden on Mobile) --- */}
      <section className="hidden lg:flex lg:w-1/2 bg-blue-600 relative overflow-hidden flex-col justify-between p-16 text-white">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-0">
           <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px] opacity-40"></div>
           <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[100px] opacity-40"></div>
        </div>

        {/* Navigation */}
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all">
              <ChevronLeft size={20} />
            </div>
            <span className="font-bold">{"Back to Home"}</span>
          </Link>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-lg">
          <h1 className="text-5xl font-black mb-6 leading-tight">
            {"Join the Best "} <br />
            <span className="text-blue-200">{"Exchange Network."}</span>
          </h1>
          <p className="text-blue-100 text-lg mb-12 leading-relaxed">
            {"Create your account today and start trading with low fees, high speed, and 24/7 dedicated customer support."}
          </p>

          {/* Testimonial / Small Feature Box */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] space-y-6">
             <div className="flex gap-1 text-yellow-300">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
             </div>
             <p className="text-lg font-medium italic">
               {"\"Exonpay has completely changed how I receive my freelance payments. It's fast, secure, and the rates are unbeatable!\""}
             </p>
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-400 rounded-full border-2 border-white/20"></div>
                <div>
                   <p className="font-bold text-sm">{"Ariful Islam"}</p>
                   <p className="text-blue-200 text-xs">{"Verified User since 2023"}</p>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="relative z-10 flex items-center gap-8 opacity-60">
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck size={16} /> {"Verified Safe"}
           </div>
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <Zap size={16} /> {"Instant Activation"}
           </div>
        </div>
      </section>

      {/* --- Right Side: Register Form --- */}
      <section className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-white">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-12">
           <Link href="/" className="text-2xl font-black text-blue-600">{"Exonpay"}</Link>
        </div>

        {/* The Form Component */}
        <RegisterForm />
      </section>

    </main>
  );
}