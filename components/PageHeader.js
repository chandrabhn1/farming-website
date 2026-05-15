import Image from 'next/image';

export default function PageHeader({ title, subtitle, bgImage }) {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center text-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image src={bgImage} alt={title} fill className="object-cover" priority />
      <div className="container relative z-20">
        <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
