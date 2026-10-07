'use client';

import React from 'react';
import { ExternalLink, CheckCircle, Info, X } from 'lucide-react';

interface PlaceholderNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  variableName: string;
  currentValue: string;
  description: string;
  actionLabel?: string;
  onProceedAnyway?: () => void;
}

export function PlaceholderNoticeModal({
  isOpen,
  onClose,
  title,
  variableName,
  currentValue,
  description,
  actionLabel = "বুঝতে পেরেছি",
  onProceedAnyway,
}: PlaceholderNoticeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h3 id="modal-title" className="mt-4 text-lg font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {description}
          </p>

          <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 space-y-1">
            <div className="text-slate-500 font-sans font-medium">কনফিগারেশন ফাইল: <span className="text-emerald-700 font-mono">lib/config.ts</span></div>
            <div className="text-slate-900 font-semibold">{variableName} = <span className="text-amber-700">&quot;{currentValue}&quot;</span></div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
            >
              {actionLabel}
            </button>
            {onProceedAnyway && (
              <button
                onClick={() => {
                  onProceedAnyway();
                  onClose();
                }}
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>লিঙ্ক ওপেন করুন</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
