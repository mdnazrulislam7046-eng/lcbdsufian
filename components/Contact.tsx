'use client';

import React, { useState } from 'react';
import { MessageCircle, Phone, Facebook, Send, Clock, HelpCircle, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK, FACEBOOK_LINK, PHONE_NUMBER } from '@/lib/config';
import { isPlaceholderLink, openExternalLink } from '@/lib/linkHelper';
import { PlaceholderNoticeModal } from './PlaceholderNoticeModal';

export function Contact() {
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    variableName: string;
    currentValue: string;
    description: string;
  }>({
    isOpen: false,
    title: '',
    variableName: '',
    currentValue: '',
    description: '',
  });

  // Quick inquiry form state
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    question: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppClick = () => {
    if (isPlaceholderLink(WHATSAPP_LINK)) {
      setModalConfig({
        isOpen: true,
        title: 'WhatsApp লিঙ্ক কনফিগারেশন',
        variableName: 'WHATSAPP_LINK',
        currentValue: WHATSAPP_LINK,
        description: 'আপনার আসল WhatsApp লিঙ্ক বা নম্বর যুক্ত করতে lib/config.ts ফাইলে WHATSAPP_LINK ভ্যারিয়েবলটি পরিবর্তন করুন।',
      });
    } else {
      openExternalLink(WHATSAPP_LINK);
    }
  };

  const handleFacebookClick = () => {
    if (isPlaceholderLink(FACEBOOK_LINK)) {
      setModalConfig({
        isOpen: true,
        title: 'Facebook পেজ লিঙ্ক কনফিগারেশন',
        variableName: 'FACEBOOK_LINK',
        currentValue: FACEBOOK_LINK,
        description: 'আপনার ফেসবুক পেজ বা গ্রুপের লিঙ্ক যুক্ত করতে lib/config.ts ফাইলে FACEBOOK_LINK ভ্যারিয়েবলটি পরিবর্তন করুন।',
      });
    } else {
      openExternalLink(FACEBOOK_LINK);
    }
  };

  const handlePhoneClick = () => {
    if (isPlaceholderLink(PHONE_NUMBER)) {
      setModalConfig({
        isOpen: true,
        title: 'ফোন নম্বর কনফিগারেশন',
        variableName: 'PHONE_NUMBER',
        currentValue: PHONE_NUMBER,
        description: 'আপনার অফিশিয়াল হেল্পলাইন ফোন নম্বর যুক্ত করতে lib/config.ts ফাইলে PHONE_NUMBER ভ্যারিয়েবলটি পরিবর্তন করুন।',
      });
    } else {
      openExternalLink(PHONE_NUMBER);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Heading & Short Bengali Message as requested */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>সরাসরি সহায়তা</span>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Support / Contact
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            কোর্স সংক্রান্ত যেকোনো প্রশ্ন, ফ্রি ক্লাসের শিডিউল বা যেকোনো সহায়তার জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন।
          </p>
        </div>

        {/* 3 Main Action Buttons as requested: WhatsApp, Facebook, Phone */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          
          {/* 1. WhatsApp Button */}
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col items-center text-center cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-base font-bold text-slate-900">WhatsApp Support</span>
            <span className="mt-1 text-xs text-slate-500">তাৎক্ষণিক চ্যাট ও প্রশ্নোত্তর</span>
            <span className="mt-4 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              হোয়াটসঅ্যাপে লিখুন
            </span>
          </button>

          {/* 2. Facebook Button */}
          <button
            type="button"
            onClick={handleFacebookClick}
            className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all flex flex-col items-center text-center cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Facebook className="w-6 h-6" />
            </div>
            <span className="text-base font-bold text-slate-900">Facebook Page</span>
            <span className="mt-1 text-xs text-slate-500">আপডেট ও নোটিশ জানতে</span>
            <span className="mt-4 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 text-xs font-semibold group-hover:bg-blue-600 group-hover:text-white transition-colors">
              পেজে ভিজিট করুন
            </span>
          </button>

          {/* 3. Phone/Contact Button */}
          <button
            type="button"
            onClick={handlePhoneClick}
            className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-teal-500 hover:shadow-md transition-all flex flex-col items-center text-center cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-base font-bold text-slate-900">Direct Call</span>
            <span className="mt-1 text-xs text-slate-500">সকাল ১০টা - রাত ১০টা</span>
            <span className="mt-4 px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 text-xs font-semibold group-hover:bg-teal-600 group-hover:text-white transition-colors">
              সরাসরি কল দিন
            </span>
          </button>

        </div>

        {/* Quick Question Inquiry Form */}
        <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <span>কোনো জিজ্ঞাসা আছে? আমাদের মেসেজ দিন</span>
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            আপনার নাম এবং নম্বর লিখে প্রশ্নটি পাঠান, আমরা খুব দ্রুত যোগাযোগ করব।
          </p>

          {submitted ? (
            <div className="mt-6 p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center animate-in fade-in duration-200">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">ধন্যবাদ {formState.name}!</h4>
              <p className="mt-1 text-sm text-slate-600">
                আপনার বার্তাটি গ্রহণ করা হয়েছে। শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormState({ name: '', phone: '', question: '' });
                }}
                className="mt-4 px-4 py-2 text-xs font-medium text-emerald-800 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                আরেকটি বার্তা পাঠান
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    আপনার নাম *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="যেমন: সাকিব হাসান"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    মোবাইল নম্বর *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="017XXXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-question" className="block text-xs font-semibold text-slate-700 mb-1">
                  আপনার প্রশ্ন বা মতামত
                </label>
                <textarea
                  id="contact-question"
                  rows={3}
                  value={formState.question}
                  onChange={(e) => setFormState({ ...formState, question: e.target.value })}
                  placeholder="কোন কোর্সটি আপনার জন্য উপযুক্ত বা অন্য যেকোনো তথ্য..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto py-2.5 px-6 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>বার্তা পাঠান</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>

      {/* Notice modal if user hasn't configured links */}
      <PlaceholderNoticeModal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        variableName={modalConfig.variableName}
        currentValue={modalConfig.currentValue}
        description={modalConfig.description}
      />
    </section>
  );
}
