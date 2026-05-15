'use client';
import Reveal from './Reveal';
import Link from 'next/link';
import Image from 'next/image';

export default function JoinNetwork() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="relative bg-primary rounded-[60px] overflow-hidden p-12 md:p-24 text-center text-white">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/farming_hero_image_1778760478639.png" alt="BG" fill className="object-cover" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <Reveal>
              <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-black text-[0.6rem] uppercase tracking-[4px] mb-8">Join the Movement</span>
              <h2 className="text-4xl md:text-6xl font-black font-playfair mb-8 leading-tight">Become a Member of India's <br />Smartest Farmer Network</h2>
              <p className="text-lg md:text-xl mb-12 opacity-80 leading-relaxed font-medium">
                Register today to get expert consultation, technical setup for your farm, and direct premium market access for your produce.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact" className="bg-secondary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl">Register My Farm</Link>
                <Link href="https://wa.me/919999999999" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all">Talk to Expert</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
