'use client';

import services from '../data/services';

export default function Whychooseus() {
  return (
    <section className="relative py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 bg-gray-900 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-14">
        Why Choose <span className="text-purple-500">CareerHub</span>?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {services.map(({ title, description, icon: Icon }, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md
                       hover:shadow-lg hover:shadow-purple-500/30 transition text-center"
          >
            <div
              className="flex items-center justify-center w-16 h-16 mx-auto mb-6 
                           rounded-full bg-[#1E90FF]/10 text-white"
            >
              <Icon size={32} />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
