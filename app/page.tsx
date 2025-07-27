'use client';
import Link from 'next/link';
import Counter from '@/components/Counter';

export default function HomePage() {
  return (
    <main
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/Wallpaper.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/40 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-black text-center px-4">
        {/* 
        <Image
          src="/assets/image.png"
          alt="My Picture"
          width={200}
          height={200}
          className="mx-auto rounded-full border-4 border-white shadow-xl mb-6"
        /> 
        */}

        <h1 className="text-4xl font-bold mb-2">Hi, I&#39;m Rukayat</h1>
        <p className="text-lg text-black mb-4">
          Software developer, building my future one line of code at a time.
        </p>

        <Link
          href="/about"
          className="inline-block bg-[tomato] text-black font-semibold px-6 py-2 rounded hover:text-white transition"
        >
          Learn more About Me →
        </Link>
      </div>

      <Counter />
    </main>
  );
}
