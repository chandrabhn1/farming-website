'use client';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    { title: 'Farmer First', desc: 'Every decision we make starts with the welfare of our farming community.', icon: 'hand-holding-heart' },
    { title: 'Modern Tech', desc: 'Integrating IoT and AI to solve age-old agricultural problems.', icon: 'microchip' },
    { title: 'Pure Organic', desc: 'Commitment to 100% organic and sustainable practices.', icon: 'leaf' },
    { title: 'Trust & Transparency', desc: 'Open and honest communication with our partners and consumers.', icon: 'handshake' }
  ];

  const hubs = [
    { district: 'Hamirpur', area: 'Bharuwa Samerpur', role: 'Main Processing Hub' },
    { district: 'Mahoba', area: 'Charkhari', role: 'Dairy & Livestock Unit' },
    { district: 'Jalaun', area: 'Orai', role: 'Beekeeping & Honey Export' },
    { district: 'Banda', area: 'Atarra', role: 'Organic Fertilizer Production' }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="About Gyanti Multiservices" 
        subtitle="Bridging the gap between tradition and technology since 2010."
        bgImage="/images/about_farming_image_1778760561226.png"
      />
      
      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div className="relative">
                <div className="rounded-[60px] overflow-hidden shadow-2xl">
                  <Image src="/images/farming_hero_image_1778760478639.png" alt="Mission" width={600} height={700} className="w-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-secondary p-12 rounded-[40px] text-white shadow-2xl hidden md:block">
                  <p className="text-5xl font-black mb-2">14+</p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Growth</p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <span className="section-badge">Our Purpose</span>
              <h2 className="text-4xl md:text-5xl font-black font-playfair mb-8 leading-tight">Empowering Rural India Through <span className="text-primary italic">Innovation</span></h2>
              <p className="text-lg text-text-muted mb-10 leading-relaxed">
                Gyanti Multiservices was founded with a vision to transform the agricultural landscape of Bundelkhand. We believe that by providing farmers with the right tools, knowledge, and market access, we can create a sustainable ecosystem that benefits both producers and consumers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-bg-light rounded-3xl border-l-4 border-primary">
                  <h4 className="font-black text-xl mb-3">Our Mission</h4>
                  <p className="text-sm text-text-muted">To democratize technology for every small-scale farmer in India.</p>
                </div>
                <div className="p-8 bg-bg-light rounded-3xl border-l-4 border-secondary">
                  <h4 className="font-black text-xl mb-3">Our Vision</h4>
                  <p className="text-sm text-text-muted">To become the national leader in sustainable and smart farming solutions.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-text-dark text-white overflow-hidden relative">
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <Reveal>
              <span className="section-badge !text-white/40">Our DNA</span>
              <h2 className="text-4xl md:text-5xl font-black font-playfair">The Values That <span className="text-secondary">Drive Us</span></h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform"><i className={`fas fa-${v.icon}`} /></div>
                  <h4 className="text-xl font-black font-playfair mb-4">{v.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-24 bg-bg-light">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <Reveal direction="left">
              <span className="section-badge">National Footprint</span>
              <h2 className="text-4xl md:text-5xl font-black font-playfair leading-tight">Our Regional <br /><span className="text-primary italic">Centers of Excellence</span></h2>
            </Reveal>
            <Reveal direction="right">
              <p className="text-lg text-text-muted max-w-md">We have established specialized hubs across Bundelkhand to provide localized support and processing facilities.</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hubs.map((hub, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[40px] shadow-premium hover:-translate-y-2 transition-transform text-center group">
                  <div className="text-primary font-black text-sm uppercase tracking-widest mb-4 group-hover:text-secondary">{hub.district}</div>
                  <h4 className="text-2xl font-black font-playfair mb-4">{hub.area}</h4>
                  <div className="w-10 h-1 bg-primary/20 mx-auto mb-6" />
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest">{hub.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container text-center">
          <Reveal>
            <h2 className="text-4xl font-black font-playfair mb-12">Why Thousands of Farmers <br /><span className="text-primary">Trust Gyanti Multiservices</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-10">
                <i className="fas fa-headset text-5xl text-secondary mb-8" />
                <h4 className="text-2xl font-black mb-4">24/7 Expert Support</h4>
                <p className="text-text-muted">Direct access to veterinary and agricultural experts anytime.</p>
              </div>
              <div className="p-10">
                <i className="fas fa-chart-line text-5xl text-secondary mb-8" />
                <h4 className="text-2xl font-black mb-4">Direct Market Access</h4>
                <p className="text-text-muted">Higher margins by eliminating middlemen from the supply chain.</p>
              </div>
              <div className="p-10">
                <i className="fas fa-shield-alt text-5xl text-secondary mb-8" />
                <h4 className="text-2xl font-black mb-4">Quality Guaranteed</h4>
                <p className="text-text-muted">ISO certified processes and A2 certified indigenous livestock.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
