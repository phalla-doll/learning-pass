"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <nav className="bg-white text-black rounded-full px-6 py-3 flex items-center gap-8 shadow-lg">
        <Link href="/" className="font-black text-xl tracking-tighter">
          LEARN<span className="text-yellow-400">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#about" className="hover:text-gray-600">About</Link>
          <Link href="#app" className="hover:text-gray-600">Learning App</Link>
          <Link href="#start" className="hover:text-gray-600">Start</Link>
          <Link href="#faqs" className="hover:text-gray-600">FAQs</Link>
        </div>
      </nav>
    </div>
  );
}

