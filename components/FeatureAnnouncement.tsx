"use client";

import { motion } from "motion/react";
import { Sparkles, ArrowRight, WifiOff } from "lucide-react";

export function FeatureAnnouncement() {
  return (
    <section className="w-full py-24 bg-black text-white border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-yellow-400 rounded-[2rem] p-10 md:p-16 text-black flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-50 pointer-events-none" />
          
          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-yellow-400 text-sm font-bold tracking-widest uppercase mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Coming Soon</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6 uppercase">
              Offline<br />Access
            </h2>
            <p className="text-gray-800 text-lg md:text-xl font-medium mb-8 max-w-md">
              Download workshops and course materials directly to your pass. Keep learning even when you&apos;re disconnected.
            </p>
            <button className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors">
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative z-10 w-full max-w-[300px] aspect-square bg-black rounded-3xl p-8 flex flex-col justify-between shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <WifiOff className="w-6 h-6 text-black" />
              </div>
              <span className="text-yellow-400 font-bold tracking-widest text-sm">BETA</span>
            </div>
            <div>
              <div className="w-full h-2 bg-gray-800 rounded-full mb-4 overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "68%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  className="h-full bg-yellow-400 rounded-full" 
                />
              </div>
              <div className="font-bold text-white text-xl">Syncing...</div>
              <div className="text-gray-500 text-sm">68% downloaded</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
