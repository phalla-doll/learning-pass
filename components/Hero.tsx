"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: App Mockup */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-[320px] bg-white rounded-[2rem] p-6 shadow-2xl text-black"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-xl">Passes</span>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                <span className="text-xl leading-none">&times;</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {/* Card 1 */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-12 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-yellow-400 font-black text-[10px]">LEARN</span>
                </div>
                <div>
                  <div className="font-bold text-sm">Workshop Pass</div>
                  <div className="text-xs text-gray-500">•• 3492, 12/26</div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-12 h-8 bg-yellow-400 rounded flex items-center justify-center">
                  <span className="text-black font-black text-[10px]">LEARN</span>
                </div>
                <div>
                  <div className="font-bold text-sm">Virtual Access</div>
                  <div className="text-xs text-gray-500">•• 5468, 03/27</div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-black font-black text-[10px]">LEARN</span>
                </div>
                <div>
                  <div className="font-bold text-sm">One-Time Entry</div>
                  <div className="text-xs text-gray-500">•• 4322, 09/25</div>
                </div>
              </div>
            </div>

            <button className="w-full bg-black text-white rounded-xl py-4 font-bold text-sm hover:bg-gray-900 transition-colors">
              Add New Pass
            </button>
          </motion.div>
        </div>

        {/* Right: Typography */}
        <div className="order-1 lg:order-2 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 uppercase"
          >
            One App<br />Full Access
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-md mb-10"
          >
            Stay connected to your education, unlock workshops, and manage access seamlessly with our user friendly mobile app.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">
              <Play className="w-5 h-5 fill-black" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase font-medium">GET IT ON</span>
                <span>Google Play</span>
              </div>
            </button>
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5 fill-black">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase font-medium">Download on the</span>
                <span>App Store</span>
              </div>
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

