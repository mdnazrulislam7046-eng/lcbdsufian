'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Check, BookOpen, Clock } from 'lucide-react';
import { Course } from '@/lib/config';
import { COURSE_IMAGES } from '@/lib/assets';

interface CourseCardProps {
  course: Course;
  onEnroll: (course: Course) => void;
}

export function CourseCard({ course, onEnroll }: CourseCardProps) {
  const [imageError, setImageError] = useState(false);
  const imageSrc = COURSE_IMAGES[course.id];

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden hover:border-emerald-300">
      {/* Course Thumbnail */}
      <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
        {imageSrc && !imageError ? (
          <Image
            src={imageSrc}
            alt={course.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4 text-center">
            <BookOpen className="w-10 h-10 text-slate-400 mb-2" />
            <span className="text-sm font-semibold text-slate-700">{course.name}</span>
          </div>
        )}

        {/* Clean price watermark-free overlay */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-xs">
          <span className="text-xs font-bold text-emerald-700">{course.price}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata: englishTitle and duration - unboxed text per Zero-Pill rules */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span>{course.englishTitle}</span>
            <span aria-hidden="true">·</span>
            <span>প্র্যাকটিক্যাল ক্লাস</span>
          </div>

          {/* Course Name */}
          <h3 className="mt-2 text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
            {course.name}
          </h3>

          {/* Short description */}
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {course.shortDescription}
          </p>

          {/* Bullet syllabus highlights */}
          <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
            {course.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Footer: Price & CTA Button */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <span className="text-[11px] text-slate-500 block leading-tight">কোর্স ফি</span>
            <span className="text-xl font-bold text-slate-900 tracking-tight">{course.price}</span>
          </div>

          <button
            type="button"
            onClick={() => onEnroll(course)}
            className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap group-hover:shadow-md cursor-pointer"
          >
            <span>ভর্তি হতে চাই</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
