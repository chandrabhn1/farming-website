'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Cow Farming', href: '/services/cow-farming' },
        { name: 'Goat Farming', href: '/services/goat-farming' },
        { name: 'Poultry Farming', href: '/services/poultry-farming' },
        { name: 'Beekeeping', href: '/services/beekeeping' },
        { name: 'Fish Farming', href: '/services/fish-farming' },
      ],
    },
    { name: 'Impact', href: '/impact' },
    { name: 'Schemes', href: '/schemes' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <>
      {/* Live News Ticker */}
      <div className="fixed top-0 left-0 w-full h-[56px] bg-text-dark text-white z-[1001] flex items-center overflow-hidden border-b border-white/5">
        <div className="bg-primary px-6 h-full flex items-center font-black text-[10px] uppercase tracking-widest relative z-20 shadow-xl">
          <span className="animate-pulse mr-2">●</span> Live Market
        </div>
        <div className="flex-1 whitespace-nowrap overflow-hidden relative">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 items-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              <i className="fas fa-sun text-secondary mr-2" /> Hamirpur: 32°C (Clear)
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              <i className="fas fa-chart-line text-secondary mr-2" /> Wheat: ₹2,450 <span className="text-green-400">▲ 1.2%</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              <i className="fas fa-chart-line text-secondary mr-2" /> Rice: ₹3,120 <span className="text-red-400">▼ 0.5%</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              <i className="fas fa-chart-line text-secondary mr-2" /> Corn: ₹1,890 <span className="text-green-400">▲ 2.1%</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              <i className="fas fa-tint text-secondary mr-2" /> Soil Moisture: 45% (Optimal)
            </span>
            {/* Duplicate for seamless loop */}
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              <i className="fas fa-sun text-secondary mr-2" /> Hamirpur: 32°C (Clear)
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              <i className="fas fa-chart-line text-secondary mr-2" /> Wheat: ₹2,450 <span className="text-green-400">▲ 1.2%</span>
            </span>
          </motion.div>
        </div>
      </div>

      <nav className={`fixed top-[56px] left-0 w-full z-[1000] transition-all duration-400 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-premium' : 'bg-black/10 backdrop-blur-[5px] py-4'
      }`}>
      <div className="container-fluid flex justify-between items-center px-6 md:px-16 max-w-[1400px] mx-auto">
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-white rounded-full p-1 border-2 border-secondary overflow-hidden transition-transform group-hover:scale-105 shadow-premium">
            <Image src="/images/gyanti_official_logo.png" alt="Logo" fill className="object-contain p-1" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`text-xl md:text-2xl font-black tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>GYANTI</span>
            <span className={`text-[0.6rem] md:text-[0.7rem] font-extrabold uppercase tracking-[3px] md:tracking-[4px] ${isScrolled ? 'text-text-dark/60' : 'text-white/70'}`}>Farming</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link href={link.href} className={`text-[0.85rem] font-black uppercase tracking-[1px] hover:text-secondary transition-all ${isScrolled ? 'text-text-dark' : 'text-white'}`}>
                {link.name} {link.dropdown && <i className="fas fa-chevron-down text-[10px] ml-1 opacity-50" />}
              </Link>
              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 hidden group-hover:block w-[260px]">
                  <div className="bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 animate-fadeIn overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary" />
                    {link.dropdown.map((sub) => (
                      <Link key={sub.name} href={sub.href} className="block py-3 px-4 text-[0.75rem] font-black text-text-dark hover:bg-bg-light hover:text-primary rounded-xl transition-all uppercase tracking-wider">{sub.name}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/contact" className="btn-primary py-3 px-8 text-[0.75rem] shadow-secondary/20">Get In Touch</Link>
          
          <div className="flex items-center gap-2 p-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 cursor-pointer hover:bg-white hover:border-gray-200 transition-all group">
            <div className="px-2 py-1 bg-primary rounded-lg text-[0.6rem] font-black text-white">EN</div>
            <div className="px-2 py-1 text-[0.6rem] font-black text-text-muted group-hover:text-text-dark transition-colors">HI</div>
          </div>
        </div>

        <button className={`md:hidden text-2xl ${isScrolled || isOpen ? 'text-primary' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 bg-white z-[9999] p-8 flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-white rounded-full p-1 border-2 border-secondary overflow-hidden">
                  <Image src="/images/gyanti_official_logo.png" alt="Logo" fill className="object-contain p-1" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-primary tracking-tight">GYANTI</span>
                  <span className="text-[0.5rem] font-bold uppercase tracking-[2px] text-text-dark/40">Farming</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-12 h-12 bg-bg-light rounded-full flex items-center justify-center text-primary text-xl">
                <i className="fas fa-times" />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-6 overflow-y-auto pb-10">
              {navLinks.map((link, i) => (
                <div key={link.name} className="border-b border-gray-50 pb-4">
                  <Link 
                    href={link.href} 
                    className="text-2xl font-black font-playfair text-text-dark flex justify-between items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <i className="fas fa-chevron-right text-xs text-secondary/40" />
                  </Link>
                  {link.dropdown && (
                    <div className="mt-4 grid grid-cols-1 gap-3 pl-4 border-l-2 border-bg-light">
                      {link.dropdown.map(sub => (
                        <Link 
                          key={sub.name} 
                          href={sub.href} 
                          className="text-xs font-bold text-text-muted uppercase tracking-wider"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Footer */}
            <div className="mt-auto pt-8 border-t border-gray-100">
              <Link href="/contact" className="btn-primary w-full py-4 text-center block text-xs" onClick={() => setIsOpen(false)}>Get In Touch</Link>
              <div className="flex justify-center gap-6 mt-8">
                {['facebook-f', 'twitter', 'instagram'].map(icon => (
                  <i key={icon} className={`fab fa-${icon} text-text-muted text-lg`} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
