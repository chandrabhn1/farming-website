'use client';
import { useParams, notFound } from 'next/navigation';
import { servicesData } from '../../../data/services';
import PageHeader from '../../../components/PageHeader';
import Reveal from '../../../components/Reveal';
import Image from 'next/image';

export default function ServiceDetail() {
  const params = useParams();
  const data = servicesData[params.slug];
  if (!data) return <div>Service not found</div>;

  const themeStyle = {
    '--theme-primary': data.themeColor || '#2d5a27',
    '--theme-accent': data.accentColor || '#d4a373'
  };

  return (
    <div className="bg-white min-h-screen" style={themeStyle}>
      <PageHeader 
        title={data.title} 
        subtitle={data.subtitle}
        bgImage={data.headerImage}
      />

      {/* Live Operation Status Bar */}
      <div className="bg-bg-light border-b border-gray-100 py-3 overflow-hidden">
        <div className="container flex items-center gap-6 whitespace-nowrap">
          <div className="flex items-center gap-2 px-4 py-1 bg-white rounded-full border border-gray-200 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
            <span className="text-[0.6rem] font-black uppercase tracking-widest text-text-dark">Live Unit Tracking</span>
          </div>
          <div className="flex gap-12 animate-scroll-slow">
            <span className="text-[0.6rem] font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
              <i className="fas fa-clock text-secondary" /> Next Cycle: 14:00 PM
            </span>
            <span className="text-[0.6rem] font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
              <i className="fas fa-microscope text-secondary" /> Quality Check: <span className="text-green-600">PASSED</span>
            </span>
            <span className="text-[0.6rem] font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
              <i className="fas fa-users text-secondary" /> Experts On-Site: 04
            </span>
            <span className="text-[0.6rem] font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
              <i className="fas fa-wifi text-secondary" /> IoT Signal: Strong
            </span>
          </div>
        </div>
      </div>
      
      {/* Dynamic Layout Rendering */}
      {data.layoutType === 'industrial' ? (
        <section className="py-32 bg-text-dark text-white">
          <div className="container">
            <div className="text-center mb-24">
              <Reveal>
                <span className="text-[var(--theme-accent)] font-black uppercase tracking-[5px] text-xs mb-6 block">Industrial Process</span>
                <h2 className="text-5xl md:text-7xl font-black font-playfair mb-8">{data.mainTitle}</h2>
                <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">{data.mainText}</p>
              </Reveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {data.features.map((f, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-10 bg-white/5 border border-white/10 rounded-[50px] hover:bg-[var(--theme-primary)] transition-all group">
                    <h4 className="text-2xl font-black font-playfair mb-4 group-hover:text-white">{f.title}</h4>
                    <p className="text-white/40 group-hover:text-white/70 leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : data.layoutType === 'modern' ? (
        <section className="py-24 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-bg-light -z-0" />
          <div className="container relative z-10">
            <div className="bg-white p-12 md:p-24 rounded-[80px] shadow-2xl border border-gray-50">
              <Reveal><h2 className="text-4xl md:text-6xl font-black font-playfair mb-12 text-center">{data.mainTitle}</h2></Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="space-y-10">
                  <p className="text-xl text-text-muted leading-relaxed">{data.mainText}</p>
                  <div className="space-y-6">
                    {data.features.map((f, i) => (
                      <div key={i} className="flex gap-6 items-center p-6 bg-bg-light rounded-3xl">
                        <div className="w-4 h-4 rounded-full bg-[var(--theme-primary)]" />
                        <h4 className="font-black text-lg">{f.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[40px] overflow-hidden shadow-2xl rotate-3">
                  <Image src={data.headerImage} alt="Modern" width={600} height={400} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
              <Reveal direction="left">
                <span className="text-[var(--theme-accent)] font-black uppercase tracking-[5px] text-xs mb-6 block">Our Expertise</span>
                <h2 className="text-4xl md:text-6xl font-black font-playfair mb-8 leading-tight text-text-dark">{data.mainTitle}</h2>
                <p className="text-xl text-text-muted mb-12 leading-relaxed">{data.mainText}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {data.features.map((f, i) => (
                    <div key={i} className="flex gap-4 items-start p-6 bg-bg-light rounded-3xl border-l-4 border-[var(--theme-primary)]">
                      <div><h4 className="font-black mb-1">{f.title}</h4><p className="text-xs text-text-muted leading-relaxed">{f.desc}</p></div>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal direction="right">
                <div className="space-y-8">
                  {data.stats.map((s, i) => (
                    <div key={i} className="bg-white p-10 rounded-[30px] shadow-premium text-center border border-gray-50">
                      <div className="w-16 h-16 bg-bg-light rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 text-[var(--theme-primary)]"><i className={`fas fa-${s.icon}`} /></div>
                      <h4 className="text-xl font-bold mb-2">{s.title}</h4><p className="text-text-muted">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {data.showcase && (
        <section className="py-24 bg-bg-light">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <Reveal direction="left">
                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                  <Image src={data.showcase.image} alt="Showcase" width={600} height={450} className="w-full object-cover" />
                </div>
              </Reveal>
              <Reveal direction="right">
                <span className="section-badge !text-[var(--theme-primary)]">{data.showcase.badge}</span>
                <h2 className="text-4xl font-bold font-playfair mb-6">{data.showcase.title}</h2>
                <p className="text-lg text-text-muted mb-10">{data.showcase.desc}</p>
                <div className="space-y-6">
                  {data.showcase.items.map((item, i) => (
                    <div key={i} className="flex gap-6 items-start bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center text-[var(--theme-primary)] text-xl shrink-0"><i className={`fas fa-${item.icon}`} /></div>
                      <div><h4 className="font-bold mb-1">{item.title}</h4><p className="text-sm text-text-muted">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {data.equipment && (
        <section className="py-24 bg-white">
          <div className="container">
            <Reveal><h2 className="text-4xl font-black font-playfair mb-16 text-text-dark underline decoration-secondary decoration-8 underline-offset-8">Equipment & Infrastructure</h2></Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.equipment.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-8 bg-bg-light rounded-[40px] border border-gray-100 group hover:bg-primary transition-all duration-500">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform"><i className={`fas fa-${item.icon}`} /></div>
                    <h4 className="text-xl font-black font-playfair mb-2 group-hover:text-white">{item.title}</h4>
                    <p className="text-sm text-text-muted group-hover:text-white/60">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.profit && (
        <section className="py-24 bg-text-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-20" />
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <Reveal direction="left">
                <span className="section-badge !text-white/40">Financial Planning</span>
                <h2 className="text-4xl md:text-5xl font-black font-playfair mb-8">Profit Potential & <br /><span className="text-secondary italic">ROI Analysis</span></h2>
                <p className="text-lg text-white/60 mb-10">Our expert analysts have calculated the average return on investment based on current market trends and local operational costs.</p>
                <div className="space-y-6">
                  {data.profit.metrics.map((m, i) => (
                    <div key={i} className="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/10">
                      <span className="font-bold text-white/80">{m.label}</span>
                      <span className="text-2xl font-black text-secondary">{m.value}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            <Reveal direction="right">
              <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[50px] border border-white/20 shadow-2xl">
                <h4 className="text-2xl font-black font-playfair mb-8 text-center text-[var(--theme-accent)]">Investment Recovery</h4>
                <div className="flex justify-center mb-10">
                  <div className="w-48 h-48 rounded-full border-[10px] border-white/10 flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border-[10px] border-[var(--theme-accent)] border-t-transparent -rotate-45" />
                    <span className="text-4xl font-black">{data.profit.recovery}</span>
                    <span className="text-[0.6rem] uppercase font-bold opacity-60">Months</span>
                  </div>
                </div>
                <p className="text-sm text-center text-white/60 leading-relaxed italic">"Calculated for a standard unit size with 90% operational efficiency."</p>
              </div>
            </Reveal>
            </div>
          </div>
        </section>
      )}

      {data.breeds && (
        <section className="py-24 bg-bg-light">
          <div className="container">
            <div className="text-center mb-16">
              <Reveal>
                <span className="section-badge">Indigenous Excellence</span>
                <h2 className="text-4xl font-black font-playfair">Premium Cattle <span className="text-primary italic">Breeds</span></h2>
                <p className="text-text-muted mt-4">We specialize in the breeding and management of high-yield Indian cow breeds.</p>
              </Reveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {data.breeds.map((breed, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-[40px] overflow-hidden shadow-premium group border border-gray-100 h-full">
                    <div className="h-64 relative overflow-hidden">
                      <Image src={breed.image} alt={breed.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-6 right-6 bg-primary text-white px-4 py-1 rounded-full text-[0.6rem] font-black uppercase tracking-widest">{breed.yield}</div>
                    </div>
                    <div className="p-10">
                      <h4 className="text-2xl font-black font-playfair mb-4">{breed.name}</h4>
                      <p className="text-sm text-text-muted leading-relaxed mb-6">{breed.desc}</p>
                      <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
                        <span className="text-[0.6rem] font-black uppercase tracking-widest text-secondary">Fat Content</span>
                        <span className="font-bold text-text-dark">{breed.fat}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.successStory && (
        <section className="py-24 bg-white">
          <div className="container">
            <div className="bg-text-dark rounded-[60px] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl">
              <div className="lg:w-1/2 p-12 md:p-20 text-white">
                <Reveal>
                  <i className="fas fa-quote-left text-5xl text-secondary mb-8 opacity-50" />
                  <h3 className="text-3xl md:text-4xl font-black font-playfair mb-8 leading-tight">{data.successStory.title}</h3>
                  <p className="text-lg text-white/70 mb-10 leading-relaxed italic">{data.successStory.quote}</p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-2xl font-black">
                      {data.successStory.author[0]}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{data.successStory.author}</h4>
                      <p className="text-xs text-secondary font-black uppercase tracking-widest">{data.successStory.location}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
              <div className="lg:w-1/2 relative min-h-[400px]">
                <Image src={data.successStory.image} alt="Success" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-text-dark/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MNC-Level Operations Monitor */}
      <section className="py-24 bg-bg-light">
        <div className="container">
          <div className="flex justify-between items-end mb-16">
            <Reveal>
              <span className="text-[var(--theme-primary)] font-black uppercase tracking-widest text-[0.6rem]">Enterprise Resource Planning</span>
              <h2 className="text-3xl md:text-5xl font-black font-playfair mt-4">Micro-Operations <span className="text-secondary">Monitor</span></h2>
            </Reveal>
            <div className="hidden md:block">
              <div className="flex gap-4 items-center bg-white p-3 px-6 rounded-full shadow-sm border border-gray-100">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[0.6rem] font-black uppercase tracking-widest text-text-muted">Live IoT Feed Active</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.microDetails && data.microDetails.map((detail, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[40px] shadow-premium border border-gray-50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-bg-light rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center text-xl text-[var(--theme-primary)] mb-6"><i className={`fas fa-${detail.icon}`} /></div>
                    <p className="text-[0.6rem] font-black uppercase tracking-widest text-text-muted mb-2">{detail.label}</p>
                    <h4 className="text-2xl font-black text-text-dark mb-4">{detail.value}</h4>
                    <div className="flex items-center gap-2 text-[0.6rem] font-bold text-green-600">
                      <i className="fas fa-check-circle" /> {detail.status}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-3"><i className="fas fa-certificate text-3xl" /> <span className="font-black text-sm uppercase tracking-widest">ISO 9001:2015</span></div>
            <div className="flex items-center gap-3"><i className="fas fa-leaf text-3xl" /> <span className="font-black text-sm uppercase tracking-widest">Organic Certified</span></div>
            <div className="flex items-center gap-3"><i className="fas fa-flask text-3xl" /> <span className="font-black text-sm uppercase tracking-widest">Lab Tested Q3</span></div>
            <div className="flex items-center gap-3"><i className="fas fa-globe text-3xl" /> <span className="font-black text-sm uppercase tracking-widest">ESG Compliant</span></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-text-dark text-white">
        <div className="container text-center">
          <Reveal><h2 className="text-4xl font-bold font-playfair mb-16 text-white text-left">Operations Dashboard</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.dashboard.map((d, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left">
                  <div className="flex items-center gap-4 mb-6"><div className="text-2xl text-secondary"><i className={`fas fa-${d.icon}`} /></div><h4 className="text-xl font-bold">{d.title}</h4></div>
                  <p className="text-white/60">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-20"><Reveal><h2 className="text-4xl font-bold font-playfair">Our Farming Process</h2></Reveal></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[40px] shadow-premium hover:-translate-y-4 transition-all duration-400 h-full border border-gray-50 text-center">
                  <span className="text-5xl font-black text-primary/10 block mb-6">0{i + 1}</span>
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3><p className="text-text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
