'use client';

import React, { useState } from 'react';
import { Video, Calendar, Sparkles, ExternalLink, CheckCircle2, Users, Clock } from 'lucide-react';
import { FREE_CLASS_FORM_URL } from '@/lib/config';
import { isPlaceholderLink, openExternalLink } from '@/lib/linkHelper';
import { PlaceholderNoticeModal } from './PlaceholderNoticeModal';

export function FreeClass() {
  const [showNoticeModal, setShowNoticeModal] = useState(false);

  const handleFreeClassClick = () => {
    if (isPlaceholderLink(FREE_CLASS_FORM_URL)) {
      setShowNoticeModal(true);
    } else {
      openExternalLink(FREE_CLASS_FORM_URL);
    }
  };

  return (
    <section id="free-class" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-emerald-50/40 border-t border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center">
          {/* Unboxed editorial kicker */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>১০০% ফ্রি ওরিয়েন্টেশন ক্লাস</span>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            ফ্রি ক্লাসে যুক্ত হয়ে যাচাই করুন
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            কোনো ধরনের অগ্রিম ফি ছাড়াই অংশ নিন আমাদের ফ্রি ওরিয়েন্টেশন ক্লাসে। জেনে নিন কম্পিউটার ও AI কীভাবে আপনার দৈনন্দিন কাজ এবং ক্যারিয়ারের মান বদলে দিতে পারে।
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">লাইভ ওরিয়েন্টেশন</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              সরাসরি শিক্ষকের সাথে যুক্ত হয়ে ক্লাসের পদ্ধতি ও সিলেবাস বিস্তারিত বুঝুন।
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">AI ও কম্পিউটার ডেমো</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Microsoft Office এর ট্রিকস এবং ChatGPT ও Gemini-এর লাইভ ব্যবহার দেখুন।
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">সরাসরি প্রশ্নোত্তর</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              আপনার কম্পিউটার শেখা সংক্রান্ত যেকোনো প্রশ্ন করে তাৎক্ষণিক উত্তর নিন।
            </p>
          </div>

        </div>

        {/* Free Class Registration CTA Block */}
        <div className="mt-10 max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-md text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>আগামী ফ্রি ক্লাসের আসন সংখ্যা সীমিত</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            আজই আপনার নাম তালিকাভুক্ত করুন
          </h3>

          <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
            নিচের বাটনে ক্লিক করে ছোট্ট একটি ফর্ম পূরণ করলেই ক্লাসের সময় ও লিংক আপনার সাথে শেয়ার করা হবে।
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Main Free Class Button (Opens FREE_CLASS_FORM_URL in a new tab) */}
            <a
              href={FREE_CLASS_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Video className="w-5 h-5" />
              <span>Free Class রেজিস্ট্রেশন ফরম</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            * বাটনে ক্লিক করলে গুগল ফর্মটি একটি নতুন ট্যাবে ওপেন হবে।
          </p>
        </div>

      </div>

      {/* Notice Modal if user hasn't replaced the placeholder URL yet */}
      <PlaceholderNoticeModal
        isOpen={showNoticeModal}
        onClose={() => setShowNoticeModal(false)}
        title="ফ্রি ক্লাস ফর্ম কনফিগারেশন"
        variableName="FREE_CLASS_FORM_URL"
        currentValue={FREE_CLASS_FORM_URL}
        description="এখনও গুগল ফর্মের আসল লিঙ্ক সেট করা হয়নি। আপনি সহজেই আপনার ফ্রি ক্লাস রেজিস্ট্রেশন ফর্ম লিঙ্কটি lib/config.ts ফাইলে যুক্ত করতে পারেন।"
        onProceedAnyway={() => {
          window.open(FREE_CLASS_FORM_URL, '_blank', 'noopener,noreferrer');
        }}
      />
    </section>
  );
}
