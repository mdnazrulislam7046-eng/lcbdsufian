'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap, Code2 } from 'lucide-react';
import { SITE_METADATA, FREE_CLASS_FORM_URL } from '@/lib/config';

interface HeaderProps {
  onOpenFreeClassModal?: () => void;
  onSelectCourseForEnrollment?: (courseId: string) => void;
  onOpenSourceCode?: () => void;
}

export function Header({
  onOpenFreeClassModal,
  onSelectCourseForEnrollment,
  onOpenSourceCode,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Free Class', href: '#free-class' },
    { label: 'ভর্তি হতে চাই', href: '#courses' },
    { label: 'Support / Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single text element according to Top Bar Contract) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-slate-900 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-xs">
              <GraduationCap className="w-5 h-5 transition-transform group-hover:scale-105" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
              {SITE_METADATA.name}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-emerald-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenSourceCode && (
              <button
                type="button"
                onClick={onOpenSourceCode}
                className="px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                title="HTML, CSS ও JS কোড দেখুন"
              >
                <Code2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>HTML/CSS কোড</span>
              </button>
            )}
            <a
              href={FREE_CLASS_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs sm:text-sm font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 rounded-lg transition-colors whitespace-nowrap"
            >
              Free Class
            </a>
            <a
              href="#courses"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#courses');
              }}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>ভর্তি হতে চাই</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label={mobileMenuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            {onOpenSourceCode && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSourceCode();
                }}
                className="w-full text-center py-2.5 px-4 rounded-lg text-sm font-semibold text-slate-800 bg-slate-100 border border-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <Code2 className="w-4 h-4 text-emerald-600" />
                <span>HTML, CSS ও JS কোড দেখুন</span>
              </button>
            )}
            <a
              href={FREE_CLASS_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-lg text-sm font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 transition-colors"
            >
              Free Class ফরম
            </a>
            <a
              href="#courses"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#courses');
              }}
              className="w-full text-center py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
            >
              ভর্তি হতে চাই
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
