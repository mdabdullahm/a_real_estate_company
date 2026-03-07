"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, externalLink } from "lucide-react";

const recentTransactions = [
  { id: 1, send: "USDT", receive: "bKash", amount: "120.00", date: "2 mins ago", status: "Completed", iconS: "💎", iconR: "BK" },
  { id: 2, send: "Payeer", receive: "Nagad", amount: "50.00", date: "5 mins ago", status: "Processing", iconS: "🅿️", iconR: "NG" },
  { id: 3, send: "Binance", receive: "Rocket", amount: "200.00", date: "12 mins ago", status: "Completed", iconS: "BN", iconR: "RK" },
  { id: 4, send: "Perfect Money", receive: "bKash", amount: "75.00", date: "18 mins ago", status: "Completed", iconS: "PM", iconR: "BK" },
  { id: 5, send: "USDT", receive: "Nagad", amount: "310.00", date: "25 mins ago", status: "Completed", iconS: "💎", iconR: "NG" },
];

const RecentExchanges = () => {
  return (
    <section className="py-20">
      <div className="max-w-full mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">{"Live Activity"}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">{"Recent Exchanges"}</h2>
          </div>
          <p className="text-gray-500 text-sm italic">{"Showing last 5 successful transactions"}</p>
        </div>

        {/* Desktop Table View */}
        <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-xl shadow-gray-50">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">{"Send"}</th>
                  <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">{"Direction"}</th>
                  <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">{"Receive"}</th>
                  <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">{"Amount"}</th>
                  <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">{"Status"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentTransactions.map((tx, index) => (
                  <motion.tr 
                    key={tx.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-blue-50/20 transition-colors group"
                  >
                    {/* Send Currency */}
                    <td className="px-8 py-5">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-xs text-gray-500">
                          {tx.iconS}
                        </div>
                        <span className="font-bold text-gray-700">{tx.send}</span>
                      </div>
                    </td>

                    {/* Arrow */}
                    <td className="px-8 py-5 text-center">
                       <div className="flex justify-center">
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                             <ArrowRight size={14} />
                          </div>
                       </div>
                    </td>

                    {/* Receive Currency */}
                    <td className="px-8 py-5">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-xs text-gray-500">
                          {tx.iconR}
                        </div>
                        <span className="font-bold text-gray-700">{tx.receive}</span>
                      </div>
                    </td>

                    {/* Amount & Time */}
                    <td className="px-8 py-5">
                       <div className="flex flex-col">
                          <span className="font-black text-gray-900">{`$${tx.amount}`}</span>
                          <span className="text-[10px] text-gray-400 font-medium uppercase">{tx.date}</span>
                       </div>
                    </td>

                    {/* Status Badge */}
                    <td className="px-8 py-5 text-right">
                       <div className="flex justify-end">
                          <div className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                             tx.status === "Completed" 
                             ? "bg-green-100 text-green-600" 
                             : "bg-blue-100 text-blue-600 animate-pulse"
                          }`}>
                             {tx.status === "Completed" ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                             <span>{tx.status}</span>
                          </div>
                       </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View (Optional Card Style) */}
        <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-gray-400">
           <p>{"Transactions are updated in real-time • "} </p>
           <button className="text-blue-600 font-bold hover:underline">{"View History"}</button>
        </div>

      </div>
    </section>
  );
};

export default RecentExchanges;