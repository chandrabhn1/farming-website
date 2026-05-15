'use client';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';

export default function ContactPage() {
  return (
    <div className="bg-[#fdfdfd]">
      <PageHeader title="Connect With Our Experts" subtitle="We're here to help you grow." bgImage="/images/about_farming_image_1778760561226.png" />
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 -mt-32 relative z-10">
            <Reveal direction="left">
              <div className="bg-white p-12 rounded-[40px] shadow-premium h-full">
                <h3 className="text-3xl font-bold font-playfair mb-6">Contact Info</h3>
                <div className="space-y-10">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-[#f0f7ef] rounded-2xl flex items-center justify-center text-primary text-xl shrink-0"><i className="fas fa-map-marker-alt" /></div>
                    <div><h4 className="font-bold">Office</h4><p className="text-text-muted">Bharuwa Samerpur, Hamirpur, UP</p></div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-[#f0f7ef] rounded-2xl flex items-center justify-center text-primary text-xl shrink-0"><i className="fas fa-phone-alt" /></div>
                    <div><h4 className="font-bold">Call Us</h4><p className="text-text-muted">+91 73111 12659</p></div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="bg-white p-12 md:p-16 rounded-[40px] shadow-premium">
                <h3 className="text-3xl font-bold font-playfair mb-8">Send Us a Message</h3>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input type="text" placeholder="Name" className="w-full p-4 bg-gray-50 rounded-2xl outline-none" />
                    <input type="email" placeholder="Email" className="w-full p-4 bg-gray-50 rounded-2xl outline-none" />
                  </div>
                  <textarea rows="6" placeholder="Your Message" className="w-full p-4 bg-gray-50 rounded-2xl outline-none resize-none" />
                  <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-secondary transition-all">Send Inquiry</button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
