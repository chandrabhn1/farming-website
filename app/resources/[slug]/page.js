'use client';
import { useParams, notFound } from 'next/navigation';
import { resourcesData } from '../../../data/resources';
import PageHeader from '../../../components/PageHeader';
import Reveal from '../../../components/Reveal';
import WeatherWidget from '../../../components/WeatherWidget';
import Image from 'next/image';

export default function ResourceDetail() {
  const params = useParams();
  const data = resourcesData[params.slug];
  if (!data) return notFound();

  return (
    <div className="bg-white">
      <PageHeader title={data.title} subtitle={data.subtitle} bgImage={data.headerImage} />
      {data.sections.map((section, idx) => (
        <section key={idx} className={`py-24 ${section.type === 'grid' ? 'bg-bg-light' : 'bg-white'}`}>
          <div className="container">
            {section.type === 'intro' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <Reveal direction="left">
                  <span className="section-badge">{section.badge}</span>
                  <h2 className="text-4xl font-bold font-playfair mb-8">{section.title}</h2>
                  <p className="text-lg text-text-muted mb-10 leading-relaxed">{section.text}</p>
                  <div className="space-y-8">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-12 h-12 bg-[#f0f7ef] rounded-xl flex items-center justify-center text-primary shrink-0"><i className={`fas fa-${item.icon}`} /></div>
                        <div><h4 className="font-bold mb-1">{item.title}</h4><p className="text-sm text-text-muted">{item.desc}</p></div>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal direction="right">
                  <div className="rounded-[40px] overflow-hidden shadow-2xl"><Image src={section.image} alt="Resource" width={600} height={500} className="w-full object-cover" /></div>
                </Reveal>
              </div>
            )}
            {section.type === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.items.map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="bg-white p-10 rounded-[40px] shadow-premium h-full"><h3 className="text-2xl font-bold mb-4">{item.title}</h3><p className="text-text-muted">{item.desc}</p></div>
                  </Reveal>
                ))}
              </div>
            )}
            {section.type === 'table' && (
              <div className="overflow-x-auto rounded-[30px] shadow-premium border border-gray-100">
                <table className="w-full text-left">
                  <thead className="bg-primary text-white"><tr>{section.headers.map((h, i) => <th key={i} className="p-6 font-bold">{h}</th>)}</tr></thead>
                  <tbody>{section.rows.map((row, i) => <tr key={i} className="border-b border-gray-100">{row.map((cell, j) => <td key={j} className="p-6">{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            )}
            {section.type === 'timeline' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {section.items.map((item, i) => (
                  <div key={i} className="flex gap-8 items-start bg-white p-8 rounded-[40px] shadow-premium border-l-8 border-primary">
                    <div className="text-secondary font-black text-xl whitespace-nowrap">{item.month}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-text-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
