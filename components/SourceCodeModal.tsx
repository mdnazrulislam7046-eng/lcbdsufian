'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Code2, FileCode, CheckCircle2 } from 'lucide-react';
import { RAW_HTML_CODE, RAW_CSS_CODE, RAW_JS_CODE } from '@/lib/rawSourceCode';

interface SourceCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SourceCodeModal({ isOpen, onClose }: SourceCodeModalProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentCode =
    activeTab === 'html'
      ? RAW_HTML_CODE
      : activeTab === 'css'
      ? RAW_CSS_CODE
      : RAW_JS_CODE;

  const currentFilename =
    activeTab === 'html'
      ? 'index.html'
      : activeTab === 'css'
      ? 'style.css'
      : 'script.js';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs">
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                HTML, CSS ও JavaScript সোর্স কোড
              </h3>
              <p className="text-xs text-slate-500">
                এই কোডগুলো সরাসরি যেকোনো সার্ভার, সিপ্যানেল বা কম্পিউটারে রান করতে পারেন।
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab & Action Bar */}
        <div className="px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-white">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'html'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              index.html
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'css'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              style.css
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'js'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              script.js
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <a
              href="/site/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>সরাসরি HTML সাইট ওপেন করুন</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">কপি হয়েছে!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>কোড কপি করুন</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => handleDownload(currentFilename, currentCode)}
              className="py-1.5 px-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ডাউনলোড ({currentFilename})</span>
            </button>
          </div>
        </div>

        {/* Code Content Area */}
        <div className="flex-1 overflow-auto p-4 bg-slate-950 text-slate-100 font-mono text-xs leading-relaxed">
          <pre className="whitespace-pre">{currentCode}</pre>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            📁 ফাইলসমূহ সেভ করা আছে: <code className="text-slate-800 font-bold">/public/site/index.html</code>, <code className="text-slate-800 font-bold">style.css</code>, <code className="text-slate-800 font-bold">script.js</code>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="py-1.5 px-4 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium rounded-lg transition-colors"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
}
