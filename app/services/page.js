'use client';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import JoinNetwork from '../../components/JoinNetwork';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    { title: 'Cow & Dairy Farming', badge: 'Dairy Excellence', desc: 'Focusing on A2 certified milk and modern cattle management.', image: '/images/cow_farming_image_177876073845.png', href: '/services/cow-farming', reverse: false },
    { title: 'Smart Poultry Farming', badge: 'Poultry Tech', desc: 'IoT-based environment control for healthy bird welfare.', image: '/images/poultry_farming_image_1778760757596.png', href: '/services/poultry-farming', reverse: true },
    { title: 'Goat Farming', badge: 'Livestock', desc: 'Specialized breeding for high-quality meat and milk.', image: '/images/goat.png', href: '/services/goat-farming', reverse: false },
    { title: 'Industrial Beekeeping', badge: 'Apiculture', desc: 'Producing raw, unprocessed organic honey.', image: '/images/beekeeping_image_1778760780903.png', href: '/services/beekeeping', reverse: true },
    { title: 'Organic Fertilizer', badge: 'Soil Health', desc: 'Premium vermicompost for sustainable agriculture.', image: '/images/organic.webp', href: '/services/organic-fertilizer', reverse: false },
    { title: 'Mushroom Farming', badge: 'Smart Crop', desc: 'Climate-controlled high-value mushroom production.', image: '/images/farming_slider_2_1778761298662.png', href: '/services/mushroom-farming', reverse: true },
    { title: 'Hydroponics', badge: 'High-Tech', desc: 'Future-ready soil-less farming solutions.', image: '/images/farming_slider_3_1778761321793.png', href: '/services/hydroponics', reverse: false },
  ];

  return (
    <div className="bg-white">
      <PageHeader title="Our Farming Services" subtitle="Comprehensive agricultural solutions for the modern age." bgImage="/images/farming_hero_image_1778760478639.png" />
      {services.map((service, i) => (
        <section key={i} className={`py-24 ${service.reverse ? 'bg-bg-light' : 'bg-white'}`}>
          <div className="container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <Reveal direction={service.reverse ? 'right' : 'left'}>
                <div className="rounded-[40px] overflow-hidden shadow-2xl"><Image src={service.image} alt={service.title} width={600} height={450} className="w-full object-cover" /></div>
              </Reveal>
              <Reveal direction={service.reverse ? 'left' : 'right'}>
                <div className="p-10 glass-card rounded-[50px] shadow-premium border border-white/40">
                  <span className="section-badge">{service.badge}</span>
                  <h2 className="text-4xl font-bold font-playfair mb-6">{service.title}</h2>
                  <p className="text-lg text-text-muted mb-8">{service.desc}</p>
                  <Link href={service.href} className="btn-primary">Explore Details <i className="fas fa-arrow-right ml-2" /></Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
      <JoinNetwork />
    </div>
  );
}
