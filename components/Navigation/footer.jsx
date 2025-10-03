'use client';
import Link from 'next/link';
import { createElement } from 'react';
import * as LucideIcons from 'lucide-react'; 
import { companyInfo, supportInfo, socialLinks } from '../data/footerLinks'; 


const DynamicLucideIcon = ({ iconName, ...props }) => {
  const Icon = LucideIcons[iconName];

  if (!Icon) {
    return createElement(LucideIcons.AlertTriangle, 
      
      { ...props, className: 'text-red-500' });
  }

  return createElement(Icon, props);
};


//  Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16 shadow-2xl">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Section: Logo, Navigation, Newsletter */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
          
          {/* Company Info & Socials (Col 1) */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-extrabold mb-3 text-indigo-400">{companyInfo.name}</h3>
            <p className="text-sm text-gray-400 mb-5">{companyInfo.slogan}</p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
                  aria-label={`Link to our ${link.name}`}
                >
                  <DynamicLucideIcon 
                    iconName={link.icon} 
                    size={24} 
                    strokeWidth={2} 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links: Company (Col 2) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-2 border-indigo-500 pl-2">Company</h4>
            <ul className="space-y-3">
              {companyInfo.links.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition duration-300">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links: Support (Col 3) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-2 border-indigo-500 pl-2">{supportInfo.title}</h4>
            <ul className="space-y-3">
              {supportInfo.links.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition duration-300">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section (Col 4 & 5) */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Stay Connected!</h4>
            <p className="text-sm text-gray-400 mb-4">Get the latest job updates straight to your inbox.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Add your email"
                aria-label="Email for newsletter subscription"
                required
                className="p-3 rounded-lg border border-purple-500 bg-gray-800 text-white w-full sm:flex-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="p-3 bg-purple-500 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="order-2 md:order-1 mt-4 md:mt-0">
            &copy; {currentYear} **{companyInfo.name}**. All rights reserved.
          </p>
          <div className="order-1 md:order-2 space-x-6">
            <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
            <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;