// ============================================================================
// Learning Computer BD - Central Configuration File
// 
// You can easily update all important URLs, form links, and contact numbers here.
// Change the placeholder values below with your real Google Form, WhatsApp,
// Facebook page, and phone number links.
// ============================================================================

/**
 * Free class registration Google Form or survey link.
 * Opens in a new tab when students click "Free Class".
 */
export const FREE_CLASS_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScd2gThDtqFym5qOIZQqJVoKCKzPYYn6oYMRwwAc5jeTxsTjw/viewform?usp=header";

/**
 * Paid course enrollment registration link (Google Form, Payment gateway, or registration page).
 * Used across all course cards and enrollment section.
 */
export const ENROLLMENT_LINK = "https://docs.google.com/forms/d/e/1FAIpQLScd2gThDtqFym5qOIZQqJVoKCKzPYYn6oYMRwwAc5jeTxsTjw/viewform?usp=header";

/**
 * Direct WhatsApp chat link (e.g., "https://wa.me/8801700000000")
 */
export const WHATSAPP_LINK = "YOUR_WHATSAPP_LINK_HERE";

/**
 * Official Facebook page or group link (e.g., "https://facebook.com/learningcomputerbd")
 */
export const FACEBOOK_LINK = "YOUR_FACEBOOK_LINK_HERE";

/**
 * Official contact phone number (e.g., "01700-000000" or "+8801700000000")
 */
export const PHONE_NUMBER = "YOUR_PHONE_NUMBER_HERE";

/**
 * Course details data structure
 */
export interface Course {
  id: string;
  name: string;
  englishTitle: string;
  price: string;
  priceNumber: number;
  shortDescription: string;
  highlights: string[];
  thumbnail: string;
  badge?: string;
  accentColor: string;
}

export const SITE_METADATA = {
  name: "Learning Computer BD",
  tagline: "কম্পিউটার ও AI শিখুন সহজভাবে",
  description: "Microsoft Word, Excel, PowerPoint এবং AI-এর ব্যবহার শিখুন সহজ ও ব্যবহারিকভাবে।",
  heroSubtitle: "বাংলাদেশি শিক্ষার্থীদের জন্য সহজ বাংলায় প্র্যাকটিক্যাল কম্পিউটার ও কৃত্রিম বুদ্ধিমত্তা (AI) স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম। ঘরে বসেই ক্যারিয়ার ও কাজের দক্ষতা বাড়ান।",
  copyrightYear: 2026,
};

export const COURSES: Course[] = [
  {
    id: "ms-word",
    name: "Microsoft Word",
    englishTitle: "Document Formatting & Typing",
    price: "১৯৯ টাকা",
    priceNumber: 199,
    shortDescription: "অফিসিয়াল ডকুমেন্ট তৈরি, সিভি (CV) রাইটিং, পেজ সেটআপ, ফন্ট স্টাইলিং ও প্রফেশনাল প্রিন্ট করার সম্পূর্ণ গাইড।",
    highlights: ["সিভি ও অফিশিয়াল লেটার তৈরি", "টেবিল ও পেজ লেআউট ফরম্যাটিং", "বাংলা ও ইংরেজি টাইপিং গাইডলাইন", "প্রিন্ট ও পিডিএফ এক্সপোর্ট"],
    thumbnail: "/images/course_ms_word.jpg",
    accentColor: "blue",
  },
  {
    id: "ms-excel",
    name: "Microsoft Excel",
    englishTitle: "Formulas, Data & Accounting",
    price: "১৯৯ টাকা",
    priceNumber: 199,
    shortDescription: "সহজ থেকে অ্যাডভান্সড ফর্মুলা, হিসাব-নিকাশ, বেতন শিট, বাজেট তৈরি ও চার্ট বিশ্লেষণের সম্পূর্ণ এক্সেল কোর্স।",
    highlights: ["বেসিক ও অ্যাডভান্সড ফর্মুলা (SUM, IF, VLOOKUP)", "দৈনন্দিন আয়-ব্যয় ও বাজেট হিসাব", "ডাটা ফিল্টারিং ও পিভট টেবিল", "আকর্ষণীয় বার ও পাই চার্ট তৈরি"],
    thumbnail: "/images/course_ms_excel.jpg",
    accentColor: "emerald",
  },
  {
    id: "ms-powerpoint",
    name: "Microsoft PowerPoint",
    englishTitle: "Visual Slides & Presentations",
    price: "১৯৯ টাকা",
    priceNumber: 199,
    shortDescription: "আকর্ষণীয় প্রেজেন্টেশন স্লাইড ডিজাইন, স্মুথ অ্যানিমেশন, ইনফোগ্রাফিক এবং স্কুল/অফিস প্রেজেন্টেশন তৈরির কৌশল।",
    highlights: ["মডার্ন ও ক্লিন স্লাইড ডিজাইন", "স্মার্ট ট্রানজিশন ও অ্যানিমেশন", "ইনফোগ্রাফিক ও আইকন প্লেসমেন্ট", "প্রফেশনাল প্রেজেন্টেশন ডেলিভারি"],
    thumbnail: "/images/course_ms_powerpoint.jpg",
    accentColor: "amber",
  },
  {
    id: "ai-skills",
    name: "AI-এর ব্যবহার",
    englishTitle: "ChatGPT, Gemini & Productivity AI",
    price: "১৯৯ টাকা",
    priceNumber: 199,
    shortDescription: "ChatGPT, Gemini ও আধুনিক AI টুলস ব্যবহার করে পড়ার টেবিলে ও অফিসের কাজে ১০ গুণ গতি বাড়ানোর কার্যকর ট্রিকস।",
    highlights: ["ChatGPT ও Gemini ব্যবহারের সঠিক নিয়ম", "অফিসিয়াল ইমেইল ও কনটেন্ট রাইটিং", "AI দিয়ে ডাটা সামারি ও রিসার্চ", "দৈনন্দিন জীবনে AI দিয়ে সময় বাঁচানো"],
    thumbnail: "/images/course_ai_skills.jpg",
    accentColor: "indigo",
  },
];
