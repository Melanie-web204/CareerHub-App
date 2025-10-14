'use client';
import Link from "next/link";

export default function CTAsection() {
  return (
    <section className=" py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 bg-gray-900">
      <div
        className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto p-6 sm:p-10 text-center rounded-2xl sm:rounded-3xl bg-white/5 
         backdrop-blur-xl
                   hover:shadow-md hover:shadow-purple-500/40 transition"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
          Want To Turn Ambition Into Action?

        </h2>
        <p className="text-gray-300 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg">
          Join thousands of professionals already discovering clearer, faster job opportunities with
          CareerHub.
        </p>
      
        <Link
          href="/SignUp"
          className="block w-full sm:w-auto px-8 py-3 rounded-xl bg-purple-600/20 border border-gray-900
                     text-white font-semibold backdrop-blur-md
                     hover:bg-purple-600 transition mx-auto"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}