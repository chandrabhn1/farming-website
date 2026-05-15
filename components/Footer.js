import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_repeat(4,1fr)] gap-12 mb-20">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="relative w-[50px] h-[50px] bg-white rounded-full p-1 border-2 border-secondary overflow-hidden">
                <Image src="/images/gyanti_official_logo.png" alt="Logo" fill className="object-contain p-1" />
              </div>
              <div className="flex flex-col leading-none font-bold">
                <span className="text-xl">Gyanti</span>
                <span className="text-[0.6rem] uppercase tracking-widest text-white/50">Farming</span>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed max-w-sm">
              Gyanti Multiservices Pvt. Ltd. - Leading the way in sustainable and smart agriculture solutions for a better tomorrow.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 font-playfair">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/" className="hover:text-secondary">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary">About Us</Link></li>
              <li><a href="/services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="/impact" className="hover:text-secondary transition-colors">Impact</a></li>
              <li><a href="/gallery" className="hover:text-secondary transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 font-playfair">Services</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/services/cow-farming" className="hover:text-secondary">Cow Farming</Link></li>
              <li><Link href="/services/goat-farming" className="hover:text-secondary">Goat Farming</Link></li>
              <li><Link href="/services/beekeeping" className="hover:text-secondary">Beekeeping</Link></li>
              <li><Link href="/services/fish-farming" className="hover:text-secondary">Fish Farming</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 font-playfair">Resources</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/resources/farmers-guide" className="hover:text-secondary">Farmer's Guide</Link></li>
              <li><Link href="/resources/market-prices" className="hover:text-secondary">Market Prices</Link></li>
              <li><Link href="/resources/weather-forecast" className="hover:text-secondary">Weather Forecast</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-secondary">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 font-playfair">Contact</h4>
            <ul className="space-y-6 text-white/60">
              <li className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-secondary mt-1" />
                <span>Bharuwa Samerpur, Hamirpur, UP</span>
              </li>
              <li className="flex items-center gap-4">
                <i className="fas fa-phone-alt text-secondary" />
                <span>+91 73111 12659</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Gyanti Multiservices Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
