'use client';
import { useState } from 'react';
import Reveal from './Reveal';

export default function JoinForm() {
  const [formData, setFormData] = useState({
    name: '',
    district: '',
    service: 'Dairy & Cattle'
  });

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const message = `Hello Gyanti Multiservices Team,\n\nI want to join your network.\n\n*Name:* ${formData.name}\n*District:* ${formData.district}\n*Service Interested:* ${formData.service}\n\nPlease contact me for further details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917311112659?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto glass-card rounded-[60px] p-12 md:p-20 shadow-premium border border-white/40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <span className="section-badge">Network Expansion</span>
              <h2 className="text-4xl md:text-6xl font-black font-playfair mb-8 leading-tight">Become a <span className="text-primary italic">Certified Partner</span></h2>
              <p className="text-lg text-text-muted mb-10 leading-relaxed">
                Join 5000+ farmers who are revolutionizing their yield with our tech-enabled solutions. Submit your details to start your journey with Gyanti Multiservices.
              </p>
              <div className="flex items-center gap-6 p-6 bg-bg-light rounded-3xl border border-gray-100">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white text-xl">
                  <i className="fab fa-whatsapp" />
                </div>
                <div>
                  <p className="text-[0.6rem] font-black uppercase tracking-widest text-text-muted">Direct Support</p>
                  <p className="font-bold text-text-dark">+91 73111 12659</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
                <div>
                  <label className="block text-[0.65rem] font-black uppercase tracking-[3px] text-text-dark mb-3 ml-2">Your Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter name"
                    className="w-full bg-bg-light border-none rounded-3xl px-8 py-5 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[0.65rem] font-black uppercase tracking-[3px] text-text-dark mb-3 ml-2">District</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Hamirpur"
                      className="w-full bg-bg-light border-none rounded-3xl px-8 py-5 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all"
                      onChange={(e) => setFormData({...formData, district: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] font-black uppercase tracking-[3px] text-text-dark mb-3 ml-2">Service</label>
                    <select 
                      className="w-full bg-bg-light border-none rounded-3xl px-8 py-5 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>Dairy & Cattle</option>
                      <option>Scientific Goat Farming</option>
                      <option>Industrial Poultry</option>
                      <option>Apiculture (Beekeeping)</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full btn-primary py-6 rounded-3xl text-sm shadow-xl shadow-primary/20 group">
                  Submit to WhatsApp <i className="fab fa-whatsapp ml-3 group-hover:scale-125 transition-transform" />
                </button>
                <p className="text-center text-[0.6rem] text-text-muted font-bold uppercase tracking-widest">Powered by Gyanti Secure Connect</p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
