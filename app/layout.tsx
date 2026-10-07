import type { Metadata } from 'next';
import { Hind_Siliguri } from 'next/font/google';
import './globals.css';

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Learning Computer BD - কম্পিউটার ও AI শিখুন সহজভাবে',
  description: 'Microsoft Word, Excel, PowerPoint এবং AI-এর ব্যবহার শিখুন সহজ ও ব্যবহারিকভাবে। মাত্র ১৯৯ টাকায় মানসম্মত কম্পিউটার কোর্স।',
  openGraph: {
    title: 'Learning Computer BD - কম্পিউটার ও AI শিখুন সহজভাবে',
    description: 'Microsoft Word, Excel, PowerPoint এবং AI-এর ব্যবহার শিখুন সহজ ও ব্যবহারিকভাবে। মাত্র ১৯৯ টাকায় মানসম্মত কোর্স।',
    type: 'website',
    locale: 'bn_BD',
    siteName: 'Learning Computer BD',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learning Computer BD - কম্পিউটার ও AI শিখুন সহজভাবে',
    description: 'Microsoft Word, Excel, PowerPoint এবং AI-এর ব্যবহার শিখুন সহজ ও ব্যবহারিকভাবে।',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body className={`${hindSiliguri.className} min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-emerald-600 selection:text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
