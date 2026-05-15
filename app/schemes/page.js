'use client';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';

export default function SchemesPage() {
  const schemes = [
    {
      title: 'PM-Kisan Samman Nidhi',
      benefit: '₹6,000 per year',
      eligibility: 'All small and marginal farmers.',
      desc: 'Direct income support of ₹6,000 per year in three installments to all landholding farmer families.',
      icon: 'rupee-sign'
    },
    {
      title: 'Pradhan Mantri Fasal Bima Yojana',
      benefit: 'Crop Insurance',
      eligibility: 'Farmers growing notified crops.',
      desc: 'Financial support to farmers suffering crop loss/damage arising out of unforeseen events.',
      icon: 'shield-alt'
    },
    {
      title: 'Soil Health Card Scheme',
      benefit: 'Free Soil Testing',
      eligibility: 'All farmers across India.',
      desc: 'Information to farmers on nutrient status of their soil along with recommendations on appropriate dosage of nutrients.',
      icon: 'leaf'
    },
    {
      title: 'Kusum Yojana',
      benefit: 'Solar Pump Subsidy',
      eligibility: 'Individual farmers/Groups.',
      desc: 'Setting up grid-connected solar and other renewable energy plants in the agriculture sector.',
      icon: 'solar-panel'
    }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Government Schemes" 
        subtitle="Stay updated with the latest subsidies and support programs."
        bgImage="/images/farming_slider_2_1778761298662.png"
      />
      
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schemes.map((scheme, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-bg-light p-10 rounded-[40px] border border-transparent hover:border-secondary transition-all hover:bg-white hover:shadow-premium group h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-2xl mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <i className={`fas fa-${scheme.icon}`} />
                  </div>
                  <h3 className="text-2xl font-black font-playfair mb-4 text-text-dark">{scheme.title}</h3>
                  <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-black uppercase tracking-widest mb-6">
                    {scheme.benefit}
                  </div>
                  <p className="text-text-muted mb-8 leading-relaxed">{scheme.desc}</p>
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-sm font-bold text-text-dark">Eligibility: <span className="text-text-muted font-medium">{scheme.eligibility}</span></p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="container text-center">
          <Reveal>
            <h2 className="text-4xl font-black font-playfair mb-8">Need Help with Application?</h2>
            <p className="text-lg opacity-80 mb-12 max-w-2xl mx-auto">Our experts at Gyanti Multiservices help local farmers with documentation and registration for these schemes at our district hubs.</p>
            <button className="bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">Visit Our Hub</button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
