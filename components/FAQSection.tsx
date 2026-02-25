"use client";

export function FAQSection() {
  const faqs = [
    "What's the process for obtaining the pass?",
    "Are there any restrictions on where I can use the pass?",
    "Can I track my learning progress in the app?",
    "How can I monitor and manage my enrollments within the app?"
  ];

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
          {faqs.map((faq, i) => (
            <div key={i} className="flex items-center justify-between py-8 border-b border-gray-200 group cursor-pointer">
              <h3 className="text-xl font-medium group-hover:text-yellow-500 transition-colors pr-8">{faq}</h3>
              <div className="w-3 h-3 bg-black group-hover:bg-yellow-500 transition-colors shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
