'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function YieldCalculator() {
  const [crop, setCrop] = useState('wheat');
  const [land, setLand] = useState(5);
  const [livePrice, setLivePrice] = useState(2400);
  const [result, setResult] = useState({ yield: 0, profit: 0 });

  const crops = {
    wheat: { name: 'Wheat (Gehu)', yieldPerAcre: 15, basePrice: 2400, cost: 12000 },
    rice: { name: 'Rice (Chawal)', yieldPerAcre: 20, basePrice: 3100, cost: 18000 },
    mustard: { name: 'Mustard (Sarson)', yieldPerAcre: 8, basePrice: 5400, cost: 10000 },
    maize: { name: 'Maize (Makka)', yieldPerAcre: 25, basePrice: 1900, cost: 15000 }
  };

  useEffect(() => {
    setLivePrice(crops[crop].basePrice);
    const interval = setInterval(() => {
      setLivePrice(prev => prev + (Math.random() - 0.5) * 5);
    }, 3000);
    return () => clearInterval(interval);
  }, [crop]);

  useEffect(() => {
    const c = crops[crop];
    const totalYield = land * c.yieldPerAcre;
    const totalRevenue = totalYield * livePrice;
    const totalCost = land * c.cost;
    setResult({
      yield: Math.round(totalYield * 100) / 100,
      profit: Math.round(totalRevenue - totalCost)
    });
  }, [crop, land, livePrice]);

  return (
    <section className="py-24 bg-bg-light overflow-hidden">
      <div className="container">
        <div className="bg-white rounded-[60px] shadow-premium p-8 md:p-20 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <span className="section-badge">Smart Tools</span>
              <h2 className="text-4xl md:text-6xl font-black font-playfair mb-8 leading-tight">Interactive <br /><span className="text-primary italic">Profit Calculator</span></h2>
              <p className="text-lg text-text-muted mb-12">
                Estimate your seasonal earnings by selecting your crop and land size. Our calculator uses current market data from the Hamirpur region.
              </p>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-text-dark">Select Your Crop</label>
                  <div className="flex flex-wrap gap-4">
                    {Object.keys(crops).map(key => (
                      <button 
                        key={key}
                        onClick={() => setCrop(key)}
                        className={`px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${crop === key ? 'bg-primary text-white shadow-xl' : 'bg-white border border-gray-200 text-text-muted hover:border-primary'}`}
                      >
                        {crops[key].name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <label className="text-xs font-black uppercase tracking-widest text-text-dark">Land Size (Acres)</label>
                    <span className="font-black text-primary">{land} Acres</span>
                  </div>
                  <input 
                    type="range" min="1" max="50" value={land} 
                    onChange={(e) => setLand(e.target.value)}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="bg-primary p-12 rounded-[50px] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
                <div className="relative z-10 space-y-12">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[4px] opacity-60 mb-4">Estimated Total Yield</p>
                    <div className="flex items-end gap-3">
                      <span className="text-6xl font-black font-playfair">{result.yield}</span>
                      <span className="text-xl font-bold opacity-60 mb-2">Quintals</span>
                    </div>
                  </div>
                  <div className="pt-12 border-t border-white/10">
                    <p className="text-xs font-black uppercase tracking-[4px] opacity-60 mb-4">Net Profit Projection</p>
                    <div className="flex items-end gap-3 text-secondary">
                      <span className="text-xl font-bold mb-2">₹</span>
                      <span className="text-6xl font-black font-playfair">{result.profit.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-3xl border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[0.6rem] font-black uppercase tracking-widest opacity-60">Current Live Rate</span>
                      <motion.span 
                        key={livePrice}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-secondary font-black"
                      >
                        ₹{Math.round(livePrice)}/q
                      </motion.span>
                    </div>
                    <p className="text-[0.6rem] leading-relaxed opacity-50 italic">
                      *Earnings are calculated based on real-time simulated Mandi prices and estimated operational costs.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
