'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FreeClass } from '@/components/FreeClass';
import { CoursesSection } from '@/components/CoursesSection';
import { Enrollment } from '@/components/Enrollment';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { SourceCodeModal } from '@/components/SourceCodeModal';
import { Course, COURSES, FREE_CLASS_FORM_URL } from '@/lib/config';
import { Code2, ExternalLink } from 'lucide-react';

export default function HomePage() {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(COURSES[0].id);
  const [sourceCodeModalOpen, setSourceCodeModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroFreeClass = () => {
    window.open(FREE_CLASS_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  const handleHeroEnrollment = () => {
    scrollToSection('courses');
  };

  const handleCourseEnroll = (course: Course) => {
    setSelectedCourseId(course.id);
    scrollToSection('enrollment');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-emerald-500 selection:text-white">
      {/* Responsive Header */}
      <Header
        onOpenFreeClassModal={() => scrollToSection('free-class')}
        onSelectCourseForEnrollment={(id) => {
          setSelectedCourseId(id);
          scrollToSection('enrollment');
        }}
        onOpenSourceCode={() => setSourceCodeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Floating Quick Banner for Pure HTML/CSS/JS */}
        <div className="pt-20 sm:pt-24 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-3 sm:p-3.5 bg-emerald-50/90 border border-emerald-200/90 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-emerald-950 shadow-xs">
            <div className="flex items-center gap-2.5 text-center sm:text-left">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
              <span><strong>HTML, CSS ও JavaScript ভার্সন তৈরি সম্পন্ন!</strong> আপনি সরাসরি কোড ডাউনলোড বা দেখতে পারেন:</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="/site/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-xs"
              >
                <span>সরাসরি HTML সাইট দেখুন</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setSourceCodeModalOpen(true)}
                className="py-1.5 px-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-medium rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <Code2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>কোড ডাউনলোড / কপি</span>
              </button>
            </div>
          </div>
        </div>

        {/* 1. Hero Section */}
        <Hero
          onFreeClassClick={handleHeroFreeClass}
          onEnrollmentClick={handleHeroEnrollment}
        />

        {/* 2. Paid Courses Section */}
        <CoursesSection
          onSelectCourse={handleCourseEnroll}
        />

        {/* 3. Free Class Section */}
        <FreeClass />

        {/* 4. Enrollment Section */}
        <Enrollment
          selectedCourseId={selectedCourseId}
          onSelectCourse={(id) => setSelectedCourseId(id)}
        />

        {/* 5. Support / Contact Section */}
        <Contact />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* 7. HTML/CSS/JS Source Code & Download Modal */}
      <SourceCodeModal
        isOpen={sourceCodeModalOpen}
        onClose={() => setSourceCodeModalOpen(false)}
      />
    </div>
  );
}
