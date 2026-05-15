'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveMarketPrices() {
  const [commodities, setCommodities] = useState([
    { name: 'Wheat (Gehu)', price: 2450, change: 1.2, trend: 'up' },
    { name: 'Rice (Chawal)', price: 3120, change: -0.5, trend: 'down' },
    { name: 'Corn (Makka)', price: 1890, change: 2.1, trend: 'up' },
    { name: 'Milk (A2)', price: 82, change: 0.8, trend: 'up' },
    { name: 'Mustard (Sarson)', price: 5400, change: -1.1, trend: 'down' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCommodities(current => current.map(c => {
        const fluctuation = (Math.random() - 0.5) * 10;
        const newPrice = Math.max(10, Math.round((c.price + fluctuation) * 100) / 100);
        const newChange = Math.round((Math.random() * 3) * 10) / 10;
        return {
          ...c,
          price: newPrice,
          change: newChange,
          trend: fluctuation > 0 ? 'up' : 'down'
        };
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-text-dark p-8 rounded-[40px] shadow-2xl border border-white/10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
        <span className="text-[0.6rem] font-black uppercase tracking-[3px] text-white/70">Live API Feed: Bundelkhand Mandi</span>
      </div>

      <div className="space-y-4">
        {commodities.map((c, i) => (
          <div key={c.name} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all group">
            <div className="flex items-center gap-4">
              <div className={`w-2 h-10 rounded-full ${c.trend === 'up' ? 'bg-green-500' : 'bg-red-500'} opacity-50`} />
              <div>
                <p className="text-white font-bold text-sm">{c.name}</p>
                <p className="text-[0.6rem] text-white/40 uppercase tracking-widest">Base Rate: ₹{Math.round(c.price * 0.95)}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-3 justify-end">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={c.price}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    className="text-xl font-black text-white"
                  >
                    ₹{c.price}
                  </motion.span>
                </AnimatePresence>
                <i className={`fas fa-caret-${c.trend === 'up' ? 'up text-green-500' : 'down text-red-500'} text-lg`} />
              </div>
              <p className={`text-[0.6rem] font-black ${c.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {c.trend === 'up' ? '+' : '-'}{c.change}% Today
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
        <p className="text-[0.6rem] text-white/30 uppercase tracking-widest font-bold">Next Update in 5s</p>
        <button className="text-[0.6rem] text-secondary font-black uppercase tracking-widest hover:underline">View All Mandis</button>
      </div>
    </div>
  );
}
