'use client';

import React, { useState } from 'react';
import { Check, ArrowRight, ExternalLink, MessageCircle, Phone, Sparkles, CreditCard, ShieldCheck } from 'lucide-react';
import { ENROLLMENT_LINK, COURSES, WHATSAPP_LINK, PHONE_NUMBER, Course } from '@/lib/config';
import { isPlaceholderLink, openExternalLink } from '@/lib/linkHelper';
import { PlaceholderNoticeModal } from './PlaceholderNoticeModal';

interface EnrollmentProps {
  selectedCourseId: string;
  onSelectCourse: (courseId: string) => void;
}

export function Enrollment({ selectedCourseId, onSelectCourse }: EnrollmentProps) {
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const activeCourseId = selectedCourseId || COURSES[0].id;
  const currentCourse = COURSES.find((c) => c.id === activeCourseId) || COURSES[0];

  const handleEnrollLinkClick = () => {
    if (isPlaceholderLink(ENROLLMENT_LINK)) {
      setShowNoticeModal(true);
    } else {
      openExternalLink(ENROLLMENT_LINK);
    }
  };

  const handleWhatsAppClick = () => {
    if (isPlaceholderLink(WHATSAPP_LINK)) {
      setShowNoticeModal(true);
    } else {
      const msg = encodeURIComponent(`হ্যালো! আমি Learning Computer BD-এর "${currentCourse.name}" কোর্সে ভর্তি হতে আগ্রহী।`);
      const link = WHATSAPP_LINK.includes('wa.me') || WHATSAPP_LINK.startsWith('http')
        ? `${WHATSAPP_LINK}?text=${msg}`
        : `https://wa.me/${WHATSAPP_LINK.replace(/[^0-9]/g, '')}?text=${msg}`;
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="enrollment" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>সহজ ভর্তি প্রক্রিয়া</span>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            ভর্তি হতে চাই - সরাসরি অ্যাডমিশন
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            পছন্দের কোর্স সিলেক্ট করুন এবং সরাসরি ভর্তির ফর্ম পূরণ করে ক্লাসের এক্সেস বুঝে নিন।
          </p>
        </div>

        {/* Course Tabs Selector (Interactive Filter / Selector Buttons) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
          {COURSES.map((course) => {
            const isSelected = course.id === activeCourseId;
            return (
              <button
                key={course.id}
                type="button"
                onClick={() => onSelectCourse(course.id)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {course.name}
              </button>
            );
          })}
        </div>

        {/* Enrollment Card & Instructions Grid */}
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selected Course Overview */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs text-slate-500 font-medium">নির্বাচিত কোর্স</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  {currentCourse.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500">কোর্স ফি</span>
                <div className="text-2xl font-black text-emerald-700">{currentCourse.price}</div>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              {currentCourse.shortDescription}
            </p>

            <div className="mt-5">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                এই কোর্সে যা যা শিখবেন:
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                {currentCourse.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust markers */}
            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>লাইফটাইম এক্সেস ও সাপোর্ট</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-emerald-600" />
                <span>বিকাশ / নগদ / কার্ডের মাধ্যমে ফি প্রদান</span>
              </div>
            </div>
          </div>

          {/* Right Column: Admission Actions */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-emerald-300 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>

              <h4 className="text-lg font-bold text-slate-900">
                ভর্তি হওয়ার সহজ ৩ ধাপ
              </h4>

              <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">১</span>
                  <span>নিচের <strong>&ldquo;ভর্তি ফরম পূরণ করুন&rdquo;</strong> বাটনে ক্লিক করুন।</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">২</span>
                  <span>আপনার নাম, মোবাইল নম্বর দিয়ে মাত্র ১৯৯ টাকা ফি প্রদান করুন।</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">৩</span>
                  <span>তাৎক্ষণিক ক্লাসের গ্রুপ ও ম্যাটেরিয়াল লিঙ্ক পেয়ে যাবেন।</span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {/* Main Enrollment Link Button (Uses ENROLLMENT_LINK) */}
              <a
                href={ENROLLMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>ভর্তি ফরম পূরণ করুন</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Direct WhatsApp enrollment button */}
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp-এ সরাসরি ভর্তি হোন</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Notice Modal if user hasn't replaced ENROLLMENT_LINK placeholder yet */}
      <PlaceholderNoticeModal
        isOpen={showNoticeModal}
        onClose={() => setShowNoticeModal(false)}
        title="ভর্তি লিঙ্ক কনফিগারেশন"
        variableName="ENROLLMENT_LINK"
        currentValue={ENROLLMENT_LINK}
        description="এখনও ভর্তির আসল লিঙ্ক সেট করা হয়নি। আপনি lib/config.ts ফাইলে ENROLLMENT_LINK ভ্যারিয়েবলে আপনার পেমেন্ট বা ভর্তি ফরমের লিঙ্কটি বসিয়ে দিতে পারেন।"
        onProceedAnyway={() => {
          window.open(ENROLLMENT_LINK, '_blank', 'noopener,noreferrer');
        }}
      />
    </section>
  );
}
