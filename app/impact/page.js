'use client';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import Counter from '../../components/Counter';

export default function ImpactPage() {
  const stats = [
    { label: 'Farmers Empowered', value: 5000 },
    { label: 'District Hubs', value: 150 },
    { label: 'Tons of Yield', value: 25000 },
  ];

  return (
    <div className="bg-white">
      <PageHeader title="Our Impact" subtitle="Measuring success by positive community change." bgImage="/images/farming_hero_image_1778760478639.png" />
      <section className="py-24 bg-text-dark text-white">
        <div className="container text-center">
          <Reveal><h2 className="text-4xl md:text-5xl font-bold font-playfair mb-16">Agriculture at Scale</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 p-12 rounded-[40px] hover:bg-white/10 transition-colors">
                  <div className="text-5xl md:text-6xl font-bold text-secondary mb-4 font-playfair"><Counter value={stat.value} />+</div>
                  <p className="text-white/60 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-bg-light">
        <div className="container text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-bold font-playfair mb-8">Creating Shared Prosperity</h2>
            <p className="text-lg text-text-muted">Over 40% of our partners are women entrepreneurs leading local agricultural units.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
