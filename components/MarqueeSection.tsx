"use client";

import { motion } from "motion/react";
import { BookOpen, GraduationCap, Zap, Compass } from "lucide-react";

export function MarqueeSection() {
  return (
    <section className="w-full bg-black py-32 overflow-hidden relative min-h-[600px] flex flex-col justify-between text-white">
      {/* Marquee */}
      <div className="w-full border-y border-gray-800 py-4 flex overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex items-center gap-8 text-white text-3xl md:text-5xl font-black tracking-tighter uppercase"
        >
          <span>• SMART TOOLS FOR LEARNING</span>
          <span>• SMART TOOLS FOR LEARNING</span>
          <span>• SMART TOOLS FOR LEARNING</span>
          <span>• SMART TOOLS FOR LEARNING</span>
          <span>• SMART TOOLS FOR LEARNING</span>
          <span>• SMART TOOLS FOR LEARNING</span>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.3)]"
        >
          <BookOpen className="w-10 h-10 text-black" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.3)]"
        >
          <GraduationCap className="w-12 h-12 text-black" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -25, 0], rotate: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.3)]"
        >
          <Zap className="w-8 h-8 text-black" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.3)]"
        >
          <Compass className="w-16 h-16 text-black" />
        </motion.div>
      </div>

      {/* Footer-like content inside this section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full mt-auto pt-32 flex flex-col md:flex-row justify-between items-end text-white z-10 relative">
        <div className="max-w-sm mb-16 md:mb-0 w-full">
          <h4 className="font-bold mb-4">Simplify Your Learning</h4>
          <p className="text-gray-400 text-sm">
            Effortlessly manage your courses, make secure enrollments, and access content with ease — anywhere, anytime.
          </p>
        </div>
        <div className="flex gap-16 text-sm w-full md:w-auto justify-between md:justify-end">
          <div>
            <h5 className="font-bold mb-4 text-gray-500">Navigation</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">About</a></li>
              <li><a href="#" className="hover:text-yellow-400">Pass</a></li>
              <li><a href="#" className="hover:text-yellow-400">App</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4 text-gray-500">About Us</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
              <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4 text-gray-500">Consent</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Terms</a></li>
              <li><a href="#" className="hover:text-yellow-400">Privacy</a></li>
              <li><a href="#" className="hover:text-yellow-400">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
