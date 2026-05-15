'use client';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';

export default function PrivacyPolicy() {
  const sections = [
    { title: 'Data Collection', desc: 'We collect information that you provide directly to us, such as when you register your farm, join our network, or contact our support team.' },
    { title: 'Use of Information', desc: 'The information we collect is used to provide technical assistance, analyze market trends, and improve our high-tech farming services.' },
    { title: 'Data Security', desc: 'We implement industry-standard encryption and security protocols (AES-256) to ensure your agricultural and personal data is protected.' },
    { title: 'Third-Party Sharing', desc: 'Gyanti Multiservices does not sell your data. We only share information with certified partners (like mandis or logistics) to facilitate your operations.' },
    { title: 'Your Rights', desc: 'You have the right to access, correct, or delete your information at any time through our regional hubs or online portal.' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we protect your data and agricultural information at Gyanti Multiservices."
        bgImage="/images/farming_hero_image_1778760478639.png"
      />

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
            {/* Table of Contents / Sidebar */}
            <aside className="hidden lg:block sticky top-32 h-fit">
              <div className="bg-bg-light p-10 rounded-[40px] border border-gray-100">
                <h4 className="text-xl font-black font-playfair mb-8">Table of Contents</h4>
                <div className="space-y-6">
                  {sections.map((s, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[0.6rem] font-black group-hover:bg-primary group-hover:text-white transition-all shadow-sm">{i + 1}</span>
                      <span className="text-sm font-bold text-text-muted group-hover:text-primary transition-all">{s.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Content Area */}
            <div className="space-y-24">
              <Reveal>
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-4xl font-black font-playfair mb-8">Legal Framework & Commitment</h2>
                  <p className="text-text-muted leading-relaxed mb-8">
                    At Gyanti Multiservices, we understand that your data is as valuable as your harvest. This policy outlines our commitment to protecting the digital assets of our partner farmers across the Bundelkhand region and beyond.
                  </p>
                  <div className="p-8 bg-primary/5 border-l-4 border-primary rounded-r-3xl italic text-primary font-medium">
                    "Transparency and trust are the cornerstones of our relationship with every farmer in our network."
                  </div>
                </div>
              </Reveal>

              {sections.map((section, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="space-y-6 pb-12 border-b border-gray-50">
                    <h3 className="text-3xl font-black font-playfair text-text-dark">{section.title}</h3>
                    <p className="text-lg text-text-muted leading-relaxed">
                      {section.desc}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <span className="px-4 py-2 bg-bg-light rounded-full text-[0.6rem] font-black uppercase tracking-widest text-text-muted border border-gray-100">GDPR Compliant</span>
                      <span className="px-4 py-2 bg-bg-light rounded-full text-[0.6rem] font-black uppercase tracking-widest text-text-muted border border-gray-100">IT Act 2000</span>
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal>
                <div className="bg-text-dark p-12 rounded-[50px] text-white">
                  <h4 className="text-2xl font-black font-playfair mb-6">Contact Legal Department</h4>
                  <p className="text-white/60 mb-8 leading-relaxed">
                    If you have any questions regarding this policy or how we handle your data, please contact our regional legal office in Hamirpur.
                  </p>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div>
                      <p className="text-[0.6rem] font-black uppercase tracking-widest text-white/40 mb-2">Email Support</p>
                      <p className="font-bold text-secondary">legal@gyantimultiservices.com</p>
                    </div>
                    <div>
                      <p className="text-[0.6rem] font-black uppercase tracking-widest text-white/40 mb-2">Policy Version</p>
                      <p className="font-bold">v2.4 (May 2024)</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
