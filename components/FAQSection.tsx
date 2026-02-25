"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's the process for obtaining the pass?",
      answer: "Simply download the app, verify your identity using a government-issued ID, and your virtual pass will be generated instantly. You can start using it right away."
    },
    {
      question: "Are there any restrictions on where I can use the pass?",
      answer: "The Learning Pass is accepted at all partner institutions, both online and at physical locations. Look for the 'Learning Pass Accepted' badge when enrolling."
    },
    {
      question: "Can I track my learning progress in the app?",
      answer: "Yes, the app provides a comprehensive dashboard showing your active enrollments, completed courses, and upcoming workshops all in one place."
    },
    {
      question: "How can I monitor and manage my enrollments within the app?",
      answer: "Navigate to the 'My Passes' section in the app. From there, you can view details of all your current enrollments, cancel upcoming classes, or renew expiring passes."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-32 text-black" id="faqs">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex justify-center mb-16">
          <div className="bg-black text-white rounded-full px-6 py-2 flex items-center gap-6 shadow-lg">
            <span className="font-black tracking-tighter">LEARN<span className="text-yellow-400">.</span></span>
            <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-gray-300">
              <a href="#" className="hover:text-white">About</a>
              <a href="#" className="hover:text-white">Learning App</a>
              <a href="#" className="hover:text-white">Start</a>
              <a href="#" className="hover:text-white">FAQs</a>
            </div>
          </div>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between py-8 group cursor-pointer text-left focus:outline-none"
                >
                  <h3 className={`text-xl font-medium transition-colors pr-8 ${isOpen ? 'text-yellow-500' : 'group-hover:text-yellow-500'}`}>
                    {faq.question}
                  </h3>
                  <motion.div 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`w-3 h-3 shrink-0 transition-colors ${isOpen ? 'bg-yellow-500' : 'bg-black group-hover:bg-yellow-500'}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-gray-600 leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

