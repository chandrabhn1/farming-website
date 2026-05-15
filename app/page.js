'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../components/Reveal';
import WeatherWidget from '../components/WeatherWidget';
import MarketChart from '../components/MarketChart';
import LiveMarketPrices from '../components/LiveMarketPrices';
import YieldCalculator from '../components/YieldCalculator';
import JoinForm from '../components/JoinForm';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: '/images/farming_hero_image_1778760478639.png', title: 'Modernizing Agriculture', subtitle: 'Empowering farmers with data-driven technology.' },
    { image: '/images/farming_slider_1_1778761271168.png', title: 'Sustainable Livestock', subtitle: 'Next-gen cattle and poultry management.' },
    { image: '/images/farming_slider_2_1778761298662.png', title: 'Organic Future', subtitle: 'Purity in every drop and every grain.' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Partner Farmers' },
    { number: '150+', label: 'Regional Hubs' },
    { number: '100%', label: 'Quality Assured' },
  ];

  const services = [
    {
      title: 'Dairy & Cattle',
      desc: 'Advancing A2 dairy production through precision livestock monitoring and genetic excellence.',
      icon: 'cow',
      href: '/services/cow-farming',
    },
    {
      title: 'Livestock Management',
      desc: 'Scientific breeding and sustainable management of high-yield small ruminants for regional markets.',
      icon: 'hippo',
      href: '/services/goat-farming',
    },
    {
      title: 'Smart Poultry',
      desc: 'Implementing IoT-controlled environments for biosecure and high-efficiency poultry production.',
      icon: 'egg',
      href: '/services/poultry-farming',
    },
    {
      title: 'Industrial Apiculture',
      desc: 'Commercial beekeeping systems focused on pure, export-quality organic honey production.',
      icon: 'bee',
      href: '/services/beekeeping',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Slider Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image src={slides[currentSlide].image} alt="Slider" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-text-dark/80 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="container relative h-full flex flex-col justify-center z-10 pt-20 pb-20">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl"
          >
            <span className="text-secondary font-black uppercase tracking-[5px] text-[10px] md:text-xs mb-4 block drop-shadow-md">Industry Leaders in Bundelkhand</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-playfair text-white mb-6 leading-[1.1] tracking-tight">
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className={`${i === 1 ? 'text-secondary italic' : ''}`}>{word} </span>
              ))}
            </h1>
            <p className="text-base md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed font-medium">{slides[currentSlide].subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary !px-8 !py-4 !text-xs">Explore Services</Link>
              <Link href="/about" className="px-8 py-4 border border-white/20 text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-text-dark transition-all backdrop-blur-md">Learn More</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative z-30 -mt-20 rounded-t-[40px] shadow-2xl">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <h2 className="text-5xl font-bold text-primary mb-2 font-playfair">{stat.number}</h2>
                <p className="text-text-muted font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div className="relative pr-8 pb-8">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-b-[10px] border-secondary">
                  <Image
                    src="/images/about_farming_image_1778760561226.png"
                    alt="Our Mission"
                    width={600}
                    height={700}
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-primary text-white p-8 rounded-3xl shadow-2xl text-center">
                  <h3 className="text-4xl font-bold mb-1">15</h3>
                  <p className="font-bold text-xs uppercase tracking-widest opacity-80">Years in Agriculture</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <span className="text-secondary font-extrabold uppercase tracking-[4px] block mb-4">Who We Are</span>
              <h2 className="text-4xl md:text-5xl mb-8 font-bold leading-tight">
                Modern Technology Meets <br />Traditional Wisdom
              </h2>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Gyanti Multiservices is at the forefront of the agricultural revolution. We believe that by integrating smart IoT systems and sustainable organic practices, we can create a future where farming is both profitable and eco-friendly.
              </p>
              <Link href="/about" className="text-primary font-extrabold flex items-center gap-3 group">
                Learn More About Us
                <i className="fas fa-arrow-right transition-transform group-hover:translate-x-2" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Market Intelligence */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
            <Reveal direction="left">
              <MarketChart />
            </Reveal>
            <Reveal direction="right">
              <span className="section-badge">Market Intelligence</span>
              <h2 className="text-4xl md:text-6xl font-black font-playfair mb-8 leading-tight">Data-Driven <br /><span className="text-primary italic">Price Prediction</span></h2>
              <p className="text-lg text-text-muted mb-12 max-w-lg">
                We analyze daily market arrivals and historical data from 50+ local mandis to provide you with the most accurate price predictions in the Bundelkhand region.
              </p>
              <LiveMarketPrices />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Interactive Yield Calculator */}
      <YieldCalculator />

      {/* Founder's Message */}
      <section className="py-32 bg-bg-light">
        <div className="container">
          <div className="bg-white rounded-[60px] overflow-hidden shadow-premium flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-1/2 relative min-h-[400px]">
              <Image src="/images/iStock-1429073633.jpg" alt="Founder" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <Reveal>
                <span className="text-secondary font-black uppercase tracking-[5px] text-xs mb-6 block">Visionary Leadership</span>
                <h2 className="text-4xl md:text-5xl font-black font-playfair mb-8 leading-tight">"Empowering the Global <span className="text-primary italic">Agricultural Value Chain.</span>"</h2>
                <p className="text-lg text-text-muted mb-10 leading-relaxed italic">
                  "At Gyanti Multiservices, we are re-engineering traditional farming into a high-efficiency industrial ecosystem. Our objective is to ensure that precision technology and scientific expertise are accessible to every regional stakeholder."
                </p>
                <div>
                  <h4 className="text-2xl font-black font-playfair">Chandbhan Pratap Singh</h4>
                  <p className="text-secondary font-bold uppercase tracking-widest text-xs">Founder & Managing Director</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-24">
            <Reveal>
              <span className="section-badge">Strategic Workflow</span>
              <h2 className="text-4xl md:text-6xl font-black font-playfair mb-8">End-to-End <span className="text-primary">Operations</span></h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">Our standardized 4-phase framework ensures consistent quality and optimized resource utilization across all farm units.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gray-100 z-0" />
            {[
              { step: '01', title: 'Consultation', desc: 'Expert site analysis and feasibility mapping.', icon: 'comments' },
              { step: '02', title: 'Deployment', desc: 'Implementing high-tech farming infrastructure.', icon: 'tools' },
              { step: '03', title: 'Monitoring', desc: 'Real-time health and yield tracking via IoT.', icon: 'desktop' },
              { step: '04', title: 'Market Link', desc: 'Direct enterprise procurement and branding.', icon: 'store' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative z-10 bg-white group h-full">
                  <div className="w-24 h-24 bg-bg-light rounded-[30px] flex items-center justify-center text-3xl text-primary mb-8 border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-premium">
                    <i className={`fas fa-${item.icon}`} />
                  </div>
                  <span className="text-5xl font-black text-gray-100 absolute -top-4 right-0 group-hover:text-secondary/20 transition-colors">{item.step}</span>
                  <h3 className="text-2xl font-black font-playfair mb-4 text-text-dark">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-[#f0f7ef]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal>
              <span className="text-secondary font-extrabold uppercase tracking-[4px] block mb-4">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Innovative Farming Solutions</h2>
              <p className="text-text-muted font-medium">We provide a wide range of agricultural services designed to maximize yield and quality.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[40px] transition-all duration-400 border border-transparent hover:border-secondary hover:-translate-y-4 hover:shadow-2xl group h-full">
                  <div className="w-20 h-20 bg-[#f0f7ef] rounded-2xl flex items-center justify-center text-3xl text-primary mb-8 transition-colors group-hover:bg-primary group-hover:text-white">
                    <i className={`fas fa-${service.icon}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-text-muted mb-8">{service.desc}</p>
                  <Link href={service.href} className="font-bold text-secondary flex items-center gap-2">
                    View Details <i className="fas fa-arrow-right text-sm" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Join Form Section */}
      <JoinForm />
    </div>
  );
}
