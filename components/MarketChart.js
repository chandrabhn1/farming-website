'use client';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function MarketChart() {
  const data = [
    { month: 'Jan', wheat: 2100, rice: 2800 },
    { month: 'Feb', wheat: 2200, rice: 2850 },
    { month: 'Mar', wheat: 2450, rice: 3120 },
    { month: 'Apr', wheat: 2300, rice: 3000 },
    { month: 'May', wheat: 2500, rice: 3200 },
    { month: 'Jun', wheat: 2600, rice: 3300 },
  ];

  const maxVal = 3500;

  return (
    <div className="bg-white p-10 rounded-[50px] shadow-premium border border-gray-100 overflow-hidden relative group">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h4 className="text-2xl font-black font-playfair text-text-dark">Price Trends Analysis</h4>
          <p className="text-sm text-text-muted">6-Month market value simulation (₹/Quintal)</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-primary rounded-full" /><span className="text-[0.6rem] font-black uppercase tracking-widest">Wheat</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-secondary rounded-full" /><span className="text-[0.6rem] font-black uppercase tracking-widest">Rice</span></div>
        </div>
      </div>

      <div className="h-[300px] flex items-end justify-between gap-4 relative pt-10">
        {/* Horizontal Lines */}
        {[0, 1, 2, 3].map(i => (
          <div key={i} className="absolute left-0 w-full border-t border-gray-50 z-0" style={{ bottom: `${(i * 100) / 3}%` }} />
        ))}

        {data.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-4 relative z-10 h-full justify-end">
            <div className="flex gap-2 items-end h-[200px] w-full justify-center">
              <motion.div 
                initial={{ height: 0 }} 
                animate={{ height: `${(item.wheat / maxVal) * 100}%` }} 
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                className="w-4 md:w-8 bg-primary rounded-t-xl relative group/bar shadow-lg"
                style={{ minHeight: '2px' }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-text-dark text-white text-[0.6rem] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-50">₹{item.wheat}</div>
              </motion.div>
              <motion.div 
                initial={{ height: 0 }} 
                animate={{ height: `${(item.rice / maxVal) * 100}%` }} 
                transition={{ duration: 1, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                className="w-4 md:w-8 bg-secondary rounded-t-xl relative group/bar shadow-lg"
                style={{ minHeight: '2px' }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-text-dark text-white text-[0.6rem] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-50">₹{item.rice}</div>
              </motion.div>
            </div>
            <span className="text-[0.6rem] font-bold text-text-muted uppercase tracking-widest mt-2">{item.month}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 p-5 bg-bg-light rounded-2xl flex items-center gap-6">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm"><i className="fas fa-chart-line" /></div>
        <p className="text-sm font-medium leading-tight text-text-dark">
          <span className="text-primary font-black uppercase text-[0.6rem] block mb-1">Analyst Insight:</span>
          Market shows a <span className="text-green-600 font-bold">12% Bullish trend</span> for wheat due to export demand.
        </p>
      </div>
    </div>
  );
}
