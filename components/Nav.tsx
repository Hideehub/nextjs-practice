'use client';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-[tomato] shadow px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-white">
        <Link href="/" className="text-black transition-colors">Hidee</Link>
      </div>
      <div className="space-x-4 text-black font-medium">
        <Link href="/about" className="hover:text-white transition-colors">About</Link>
        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
