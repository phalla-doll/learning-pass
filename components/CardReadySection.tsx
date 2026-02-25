"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

export function CardReadySection() {
  return (
    <section className="w-full py-32 bg-[#f5f5f5] flex items-center justify-center overflow-hidden text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
        
        {/* Left: Card Ready UI */}
        <motion.div 
          initial={{ opacity: 0, rotate: -5, y: 50 }}
          whileInView={{ opacity: 1, rotate: -5, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] p-10 shadow-xl max-w-sm w-full text-center relative z-10"
        >
          <div className="w-24 h-24 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-black stroke-[3]" />
            </div>
          </div>
          <h3 className="text-3xl font-black tracking-tight mb-4">Pass Ready for Use</h3>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">
            Congratulations! Your pass is now fully verified and ready to use. Start enjoying seamless access today!
          </p>
          <button className="w-full bg-black text-white rounded-xl py-4 font-bold hover:bg-gray-900 transition-colors">
            Go to Pass
          </button>
        </motion.div>

        {/* Right: Abstract Cards */}
        <div className="relative w-full max-w-sm h-[400px] hidden md:block">
          <motion.div 
            initial={{ opacity: 0, rotate: 10, x: 50 }}
            whileInView={{ opacity: 1, rotate: 15, x: 0 }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-white rounded-[2rem] shadow-xl flex flex-col justify-between p-8"
          >
            <div className="flex justify-end">
              <span className="font-bold text-gray-300 tracking-widest">PASS</span>
            </div>
            <div className="space-y-[-1rem]">
              <h2 className="text-6xl font-black tracking-tighter uppercase">LEARN</h2>
              <h2 className="text-6xl font-black tracking-tighter uppercase text-yellow-400">LEARN</h2>
              <h2 
                className="text-6xl font-black tracking-tighter uppercase text-transparent"
                style={{ WebkitTextStroke: "2px #facc15" }}
              >
                LEARN
              </h2>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
