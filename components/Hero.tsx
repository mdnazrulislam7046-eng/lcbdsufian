'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, Video, CheckCircle2 } from 'lucide-react';
import { SITE_METADATA, FREE_CLASS_FORM_URL } from '@/lib/config';
import { HERO_IMAGE } from '@/lib/assets';

interface HeroProps {
  onFreeClassClick?: () => void;
  onEnrollmentClick: () => void;
}

export function Hero({ onFreeClassClick, onEnrollmentClick }: HeroProps) {
  return (
    <section id="home" className="pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Editorial Kicker (No Pill Enclosure per anti-slop rules) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>{SITE_METADATA.name}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600 font-normal normal-case">অনলাইন কোর্স</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.2] text-balance">
              {SITE_METADATA.tagline}
            </h1>

            {/* Short Description as requested */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal max-w-2xl">
              {SITE_METADATA.description}
            </p>

            <p className="mt-2 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl">
              {SITE_METADATA.heroSubtitle}
            </p>

            {/* Key Value Points (Clean unboxed inline metadata) */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>হাতে-কলমে প্র্যাকটিস</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>সহজ বাংলা ভাষায় ব্যাখ্যা</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>প্রতিটি কোর্স মাত্র ১৯৯ টাকা</span>
              </div>
            </div>

            {/* Two Main Requested Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Button 1: Free Class (Direct Google Form Link) */}
              <a
                href={FREE_CLASS_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl font-semibold text-sm sm:text-base text-emerald-900 bg-emerald-100/90 hover:bg-emerald-200/90 border border-emerald-300/80 transition-all shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Video className="w-4 h-4 text-emerald-700 transition-transform group-hover:scale-110" />
                <span>Free Class রেজিস্ট্রেশন</span>
              </a>

              {/* Button 2: ভর্তি হতে চাই */}
              <button
                type="button"
                onClick={onEnrollmentClick}
                className="py-3.5 px-7 rounded-xl font-semibold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>ভর্তি হতে চাই</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Subtle note below CTA */}
            <div className="mt-4 text-xs text-slate-500">
              * সীমিত সময়ের জন্য স্পেশাল অফার। যেকোনো ডিভাইস থেকে ক্লাস করার সুযোগ।
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-xl aspect-16/10 sm:aspect-16/11">
              <Image
                src={HERO_IMAGE}
                alt="Learning Computer BD - কম্পিউটার ও AI শিক্ষা"
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-102"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Overlay Label */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-900">শুরু করুন আজই</p>
                  <p className="text-[11px] text-slate-600">বেসিক থেকে প্রফেশনাল স্কিল</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-700">১৯৯ ৳</span>
                  <p className="text-[10px] text-slate-500">প্রতি কোর্স</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
