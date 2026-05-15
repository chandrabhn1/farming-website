'use client';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import Image from 'next/image';

export default function GalleryPage() {
  const images = [
    { src: '/images/farming_hero_image_1778760478639.png', title: 'Modern Field' },
    { src: '/images/cow_farming_image_177876073845.png', title: 'Dairy Farm' },
    { src: '/images/poultry_farming_image_1778760757596.png', title: 'Poultry Unit' },
    { src: '/images/beekeeping_image_1778760780903.png', title: 'Bee Box Management' },
    { src: '/images/goat.png', title: 'Goat Breeding' },
    { src: '/images/fish_farming.png', title: 'Fish Ponds' },
    { src: '/images/about_farming_image_1778760561226.png', title: 'Training Session' },
    { src: '/images/cta_farming_image_1778760579493.png', title: 'Harvest Season' },
    { src: '/images/farming_slider_2_1778761298662.png', title: 'Market Logistics' },
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Our Farming Gallery" 
        subtitle="Visualizing our commitment to agricultural excellence."
        bgImage="/images/farming_hero_image_1778760478639.png"
      />
      
      <section className="py-24">
        <div className="container">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((img, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative group overflow-hidden rounded-[40px] shadow-premium cursor-zoom-in break-inside-avoid">
                  <Image 
                    src={img.src} 
                    alt={img.title} 
                    width={500} 
                    height={600} 
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                    <div>
                      <span className="text-secondary font-black uppercase tracking-widest text-xs mb-2 block">Gyanti Farming</span>
                      <h3 className="text-white text-2xl font-black font-playfair">{img.title}</h3>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-light">
        <div className="container text-center">
          <Reveal>
            <h2 className="text-4xl font-black font-playfair mb-8 text-text-dark underline decoration-secondary decoration-8 underline-offset-8">Want to See Our Farms in Person?</h2>
            <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">We organize monthly farm visits for investors and fellow farmers. Register today to join our next tour.</p>
            <button className="btn-primary">Book a Farm Visit</button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
