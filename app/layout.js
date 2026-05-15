import './globals.css';
import { Outfit, Playfair_Display } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'Gyanti Multiservices | Modern Sustainable Farming',
  description: 'Experience the future of agriculture with Gyanti Multiservices. We combine traditional wisdom with modern technology to deliver premium farming solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/images/gyanti_official_logo.png" />
        <link rel="apple-touch-icon" href="/images/gyanti_official_logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <style>{`
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #f0f7ef; }
          ::-webkit-scrollbar-thumb { background: #d4a373; border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: #bc6c25; }
          .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); }
          .blob { position: fixed; filter: blur(100px); opacity: 0.15; border-radius: 50%; z-index: -1; pointer-events: none; }
          @keyframes float { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(50px, 50px); } }
        `}</style>
      </head>
      <body>
        <div className="blob w-96 h-96 bg-primary top-[-10%] left-[-10%] animate-[float_15s_infinite]" />
        <div className="blob w-[500px] h-[500px] bg-secondary bottom-[-10%] right-[-10%] animate-[float_20s_infinite_reverse]" />

        <div className="w-full bg-[#1a2a1a] text-white py-4 overflow-hidden border-b-[3px] border-secondary fixed top-0 z-[1001] shadow-2xl h-[56px]">
          <div className="flex whitespace-nowrap animate-ticker">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-20 px-10 items-center font-black tracking-[0.2em] text-[0.65rem] uppercase">
                <span className="flex items-center gap-3"><span className="text-secondary">🌾</span> WHEAT: ₹2,450 <span className="text-green-400">▲ 1.2%</span></span>
                <span className="flex items-center gap-3"><span className="text-secondary">🍚</span> RICE: ₹3,120 <span className="text-red-400">▼ 0.5%</span></span>
                <span className="flex items-center gap-3"><span className="text-secondary">🌽</span> CORN: ₹1,890 <span className="text-green-400">▲ 2.1%</span></span>
                <span className="flex items-center gap-3"><span className="text-secondary">🥛</span> MILK: ₹62/L <span className="text-green-400">▲ 0.8%</span></span>
              </div>
            ))}
          </div>
        </div>
        <Navbar />
        <main className="pt-[56px]">{children}</main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/917311112659"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 z-[2000] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 hover:-translate-y-2 group"
        >
          <i className="fab fa-whatsapp" />
          <span className="absolute right-full mr-4 bg-white text-text-dark text-xs font-black py-2 px-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">Chat with Expert</span>
        </a>
      </body>
    </html>
  );
}
