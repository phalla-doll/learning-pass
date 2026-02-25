"use client";

import { motion } from "motion/react";
import { BookOpen, GraduationCap, Zap, Compass, Layers, Sparkles } from "lucide-react";

export function MarqueeSection() {
  return (
    <section className="w-full bg-black pt-32 pb-16 overflow-hidden relative min-h-[800px] flex flex-col justify-between text-white">
      {/* Marquee */}
      <div className="w-full border-y border-gray-800 py-6 flex overflow-hidden whitespace-nowrap relative z-20 bg-black/50 backdrop-blur-sm">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex items-center gap-12 text-white text-4xl md:text-6xl font-black tracking-tighter uppercase"
        >
          <span>• SMART TOOLS FOR LEARNING</span>
          <span>• SMART TOOLS FOR LEARNING</span>
          <span>• SMART TOOLS FOR LEARNING</span>
          <span>• SMART TOOLS FOR LEARNING</span>
          <span>• SMART TOOLS FOR LEARNING</span>
          <span>• SMART TOOLS FOR LEARNING</span>
        </motion.div>
      </div>

      {/* Floating Icons Area */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[100px]" />
        
        {/* Floating Elements */}
        <div className="relative w-full max-w-5xl h-full">
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 15, 0], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-[20%] left-[10%] w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(250,204,21,0.4)] border-4 border-black"
          >
            <BookOpen className="w-10 h-10 text-black" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 40, 0], rotate: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[30%] left-[20%] w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(250,204,21,0.3)] border-4 border-black"
          >
            <GraduationCap className="w-14 h-14 text-black" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -25, 0], rotate: [0, 25, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
            className="absolute top-[30%] right-[15%] w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.5)] border-4 border-black"
          >
            <Zap className="w-8 h-8 text-black" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 35, 0], rotate: [0, -15, 0], scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[25%] right-[25%] w-28 h-28 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_45px_rgba(250,204,21,0.35)] border-4 border-black"
          >
            <Compass className="w-12 h-12 text-black" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-[45%] left-[40%] w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.4)] border-2 border-black"
          >
            <Layers className="w-6 h-6 text-black" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2.5 }}
            className="absolute top-[25%] right-[40%] w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.4)] border-2 border-black"
          >
            <Sparkles className="w-6 h-6 text-black" />
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full mt-auto pt-48 flex flex-col lg:flex-row justify-between items-start lg:items-end text-white z-10 relative">
        <div className="max-w-md mb-16 lg:mb-0 w-full">
          <h4 className="text-2xl font-black tracking-tight mb-4 uppercase">Simplify Your Learning</h4>
          <p className="text-gray-400 text-base leading-relaxed">
            Effortlessly manage your courses, make secure enrollments, and access content with ease — anywhere, anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24 text-sm w-full lg:w-auto">
          <div>
            <h5 className="font-bold mb-6 text-gray-500 tracking-widest uppercase text-xs">Navigation</h5>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Pass</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">App</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-gray-500 tracking-widest uppercase text-xs">About Us</h5>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h5 className="font-bold mb-6 text-gray-500 tracking-widest uppercase text-xs">Consent</h5>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

