'use client';

import React from 'react';
import { GraduationCap, ArrowUp } from 'lucide-react';
import { SITE_METADATA, FREE_CLASS_FORM_URL } from '@/lib/config';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Bengali Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {SITE_METADATA.name}
              </span>
            </div>
            <p className="text-sm text-slate-400">
              কম্পিউটার ও AI শিক্ষা সহজভাবে
            </p>
          </div>

          {/* Requested Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-medium">
            <a
              href={FREE_CLASS_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Free Class ফরম
            </a>
            <a
              href="#courses"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#courses');
              }}
              className="text-slate-300 hover:text-white transition-colors"
            >
              ভর্তি হতে চাই
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Support / Contact
            </a>
          </nav>

          {/* Scroll to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors focus:outline-none cursor-pointer"
            aria-label="উপরে যান"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom row: Copyright Notice as requested */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Learning Computer BD. All rights reserved.</p>
          <p className="text-slate-400">
            দক্ষতা অর্জন করুন · স্বাবলম্বী হোন
          </p>
        </div>
      </div>
    </footer>
  );
}
