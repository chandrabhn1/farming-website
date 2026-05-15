'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function WeatherWidget() {
  const [weather, setWeather] = useState({
    temp: 32,
    condition: 'Sunny',
    icon: 'sun',
    humidity: 45,
    wind: 12,
    location: 'Samerpur, Hamirpur',
    tip: 'Ideal day for sowing mustard seeds.'
  });

  useEffect(() => {
    const updateWeather = () => {
      const hour = new Date().getHours();
      let condition = 'Sunny';
      let icon = 'sun';
      let baseTemp = 30;

      if (hour >= 18 || hour < 6) {
        condition = 'Clear Night';
        icon = 'moon';
        baseTemp = 22;
      } else if (hour >= 12 && hour < 16) {
        condition = 'Hot & Sunny';
        icon = 'sun';
        baseTemp = 38;
      } else {
        condition = 'Partly Cloudy';
        icon = 'cloud-sun';
        baseTemp = 28;
      }

      // Add a bit of randomness
      const randomTemp = baseTemp + Math.floor(Math.random() * 5);
      
      setWeather(prev => ({
        ...prev,
        temp: randomTemp,
        condition: condition,
        icon: icon,
        tip: hour > 18 ? 'Protect cattle from night chill.' : 'Ensure proper irrigation by noon.'
      }));
    };

    updateWeather();
    const interval = setInterval(updateWeather, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
        <i className={`fas fa-${weather.icon} text-9xl`} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <span className="text-xs font-black uppercase tracking-[3px] opacity-70">Live Weather Update</span>
        </div>

        <div className="flex justify-between items-end mb-10">
          <div>
            <h3 className="text-7xl font-black font-playfair mb-2">{weather.temp}°C</h3>
            <p className="text-xl font-bold text-secondary uppercase tracking-widest">{weather.condition}</p>
          </div>
          <div className="text-right">
            <p className="font-black text-lg">{weather.location}</p>
            <p className="text-sm opacity-60 italic">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-secondary"><i className="fas fa-tint" /></div>
            <div><p className="text-[0.6rem] uppercase opacity-50 font-bold">Humidity</p><p className="font-bold">{weather.humidity}%</p></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-secondary"><i className="fas fa-wind" /></div>
            <div><p className="text-[0.6rem] uppercase opacity-50 font-bold">Wind Speed</p><p className="font-bold">{weather.wind} km/h</p></div>
          </div>
        </div>

        <div className="bg-primary/40 p-5 rounded-2xl border border-white/10">
          <div className="flex gap-4 items-start">
            <i className="fas fa-lightbulb text-secondary mt-1" />
            <p className="text-sm font-medium leading-relaxed">
              <span className="text-secondary font-bold uppercase text-[0.6rem] block mb-1">Farmer Tip:</span>
              {weather.tip}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
