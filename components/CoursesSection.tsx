'use client';

import React from 'react';
import { COURSES, Course } from '@/lib/config';
import { CourseCard } from './CourseCard';
import { Sparkles } from 'lucide-react';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
}

export function CoursesSection({ onSelectCourse }: CoursesSectionProps) {
  return (
    <section id="courses" className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>মানসম্মত কম্পিউটার ও AI কোর্সসমূহ</span>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            ভর্তি হতে চাই - কোর্স তালিকা
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            শুরু থেকে বাস্তব কাজের উপযোগী করে সাজানো প্রতিটি কোর্স। মাত্র ১৯৯ টাকায় যেকোনো কোর্সে আজই ভর্তি হতে পারেন।
          </p>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnroll={(selected) => onSelectCourse(selected)}
            />
          ))}
        </div>

        {/* Value banner below cards */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">সবগুলো কোর্স একসাথে নিতে চান?</h4>
              <p className="text-xs text-slate-600">একসাথে ভর্তি হতে আমাদের সাথে সরাসরি WhatsApp-এ যোগাযোগ করতে পারেন।</p>
            </div>
          </div>
          <a
            href="#enrollment"
            className="py-2.5 px-5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap"
          >
            ভর্তি প্রক্রিয়া দেখুন
          </a>
        </div>

      </div>
    </section>
  );
}
