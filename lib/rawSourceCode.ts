/**
 * Raw standalone HTML, CSS, and JS code strings for direct 1-click copy or download.
 */

export const RAW_HTML_CODE = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Learning Computer BD - কম্পিউটার ও AI শিখুন সহজভাবে</title>
  <meta name="description" content="Microsoft Word, Excel, PowerPoint এবং AI-এর ব্যবহার শিখুন সহজ ও ব্যবহারিকভাবে। মাত্র ১৯৯ টাকায় মানসম্মত কম্পিউটার কোর্স।">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- HEADER -->
  <header class="header" id="mainHeader">
    <div class="container header-container">
      <a href="#home" class="brand">
        <div class="brand-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.42 10.922a1 1 0 0 0-.019-.838L12.83 2.18a2 2 0 0 0-1.66 0L2.6 10.084a1 1 0 0 0 0 1.832l8.57 7.908a2 2 0 0 0 1.66 0l8.57-7.9a1 1 0 0 0 .02-.002z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <span class="brand-name">Learning Computer BD</span>
      </a>

      <nav class="nav-menu" id="navMenu">
        <a href="#home" class="nav-link">Home</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScd2gThDtqFym5qOIZQqJVoKCKzPYYn6oYMRwwAc5jeTxsTjw/viewform?usp=header" target="_blank" rel="noopener noreferrer" class="nav-link">Free Class</a>
        <a href="#courses" class="nav-link">ভর্তি হতে চাই</a>
        <a href="#contact" class="nav-link">Support / Contact</a>
      </nav>

      <div class="header-actions">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScd2gThDtqFym5qOIZQqJVoKCKzPYYn6oYMRwwAc5jeTxsTjw/viewform?usp=header" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Free Class</a>
        <a href="#courses" class="btn btn-primary btn-sm">ভর্তি হতে চাই</a>
      </div>

      <button type="button" class="hamburger-btn" id="hamburgerBtn" aria-label="মেনু খুলুন">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>

    <div class="mobile-drawer" id="mobileDrawer">
      <nav class="mobile-nav">
        <a href="#home" class="mobile-nav-link">Home</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScd2gThDtqFym5qOIZQqJVoKCKzPYYn6oYMRwwAc5jeTxsTjw/viewform?usp=header" target="_blank" rel="noopener noreferrer" class="mobile-nav-link">Free Class</a>
        <a href="#courses" class="mobile-nav-link">ভর্তি হতে চাই</a>
        <a href="#contact" class="mobile-nav-link">Support / Contact</a>
      </nav>
      <div class="mobile-actions">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScd2gThDtqFym5qOIZQqJVoKCKzPYYn6oYMRwwAc5jeTxsTjw/viewform?usp=header" target="_blank" rel="noopener noreferrer" class="btn btn-secondary w-full">Free Class ফরম</a>
        <a href="#courses" class="btn btn-primary w-full">ভর্তি হতে চাই</a>
      </div>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero-section" id="home">
    <div class="container hero-container">
      <div class="hero-content">
        <div class="kicker">
          <span class="kicker-dot"></span>
          <span>Learning Computer BD</span>
          <span class="kicker-sep">·</span>
          <span>অনলাইন কোর্স</span>
        </div>
        <h1 class="hero-headline">কম্পিউটার ও AI শিখুন সহজভাবে</h1>
        <p class="hero-description">Microsoft Word, Excel, PowerPoint এবং AI-এর ব্যবহার শিখুন সহজ ও ব্যবহারিকভাবে।</p>
        <p class="hero-subtext">বাংলাদেশি শিক্ষার্থীদের জন্য সহজ বাংলায় প্র্যাকটিক্যাল কম্পিউটার ও কৃত্রিম বুদ্ধিমত্তা (AI) স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</p>
        
        <div class="hero-buttons">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScd2gThDtqFym5qOIZQqJVoKCKzPYYn6oYMRwwAc5jeTxsTjw/viewform?usp=header" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg">Free Class রেজিস্ট্রেশন</a>
          <a href="#courses" class="btn btn-primary btn-lg">ভর্তি হতে চাই</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-image-wrapper">
          <img src="hero.jpg" alt="Learning Computer BD" class="hero-img">
        </div>
      </div>
    </div>
  </section>

  <!-- COURSES -->
  <section class="courses-section" id="courses">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">ভর্তি হতে চাই - কোর্স তালিকা</h2>
        <p class="section-desc">প্রতিটি কোর্স মাত্র ১৯৯ টাকায় শুরু করুন।</p>
      </div>
      <div class="courses-grid">
        <!-- Word -->
        <div class="course-card">
          <div class="card-thumb"><img src="word.jpg" alt="Microsoft Word" class="card-img"><div class="card-price-pill">১৯৯ টাকা</div></div>
          <div class="card-body">
            <h3 class="card-title">Microsoft Word</h3>
            <p class="card-desc">অফিসিয়াল ডকুমেন্ট তৈরি, সিভি (CV) রাইটিং ও প্রিন্ট করার সম্পূর্ণ গাইড।</p>
            <div class="card-footer"><span class="fee-amount">১৯৯ টাকা</span><button class="btn btn-primary btn-sm enroll-btn" data-course-id="ms-word">ভর্তি হতে চাই</button></div>
          </div>
        </div>
        <!-- Excel -->
        <div class="course-card">
          <div class="card-thumb"><img src="excel.jpg" alt="Microsoft Excel" class="card-img"><div class="card-price-pill">১৯৯ টাকা</div></div>
          <div class="card-body">
            <h3 class="card-title">Microsoft Excel</h3>
            <p class="card-desc">হিসাব-নিকাশ, বাজেট তৈরি ও চার্ট বিশ্লেষণের সম্পূর্ণ এক্সেল কোর্স।</p>
            <div class="card-footer"><span class="fee-amount">১৯৯ টাকা</span><button class="btn btn-primary btn-sm enroll-btn" data-course-id="ms-excel">ভর্তি হতে চাই</button></div>
          </div>
        </div>
        <!-- PowerPoint -->
        <div class="course-card">
          <div class="card-thumb"><img src="powerpoint.jpg" alt="Microsoft PowerPoint" class="card-img"><div class="card-price-pill">১৯৯ টাকা</div></div>
          <div class="card-body">
            <h3 class="card-title">Microsoft PowerPoint</h3>
            <p class="card-desc">আকর্ষণীয় প্রেজেন্টেশন স্লাইড ডিজাইন ও অ্যানিমেশন তৈরির কৌশল।</p>
            <div class="card-footer"><span class="fee-amount">১৯৯ টাকা</span><button class="btn btn-primary btn-sm enroll-btn" data-course-id="ms-powerpoint">ভর্তি হতে চাই</button></div>
          </div>
        </div>
        <!-- AI -->
        <div class="course-card">
          <div class="card-thumb"><img src="ai.jpg" alt="AI-এর ব্যবহার" class="card-img"><div class="card-price-pill">১৯৯ টাকা</div></div>
          <div class="card-body">
            <h3 class="card-title">AI-এর ব্যবহার</h3>
            <p class="card-desc">ChatGPT ও Gemini ব্যবহার করে কাজে ১০ গুণ গতি বাড়ানোর কার্যকর ট্রিকস।</p>
            <div class="card-footer"><span class="fee-amount">১৯৯ টাকা</span><button class="btn btn-primary btn-sm enroll-btn" data-course-id="ai-skills">ভর্তি হতে চাই</button></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FREE CLASS -->
  <section class="freeclass-section" id="free-class">
    <div class="container text-center">
      <h2 class="section-title">ফ্রি ক্লাসে যুক্ত হয়ে যাচাই করুন</h2>
      <p class="section-desc">কোনো ধরনের অগ্রিম ফি ছাড়াই অংশ নিন আমাদের ফ্রি ক্লাসে।</p>
      <div style="margin-top: 24px;">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScd2gThDtqFym5qOIZQqJVoKCKzPYYn6oYMRwwAc5jeTxsTjw/viewform?usp=header" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
          Free Class রেজিস্ট্রেশন ফরম পূরণ করুন
        </a>
      </div>
    </div>
  </section>

  <!-- ENROLLMENT -->
  <section class="enrollment-section" id="enrollment">
    <div class="container text-center">
      <h2 class="section-title">ভর্তি হতে চাই - সরাসরি অ্যাডমিশন</h2>
      <div class="course-tabs" id="courseTabs" style="margin-top: 24px;">
        <button class="tab-btn active" data-course-id="ms-word">Microsoft Word</button>
        <button class="tab-btn" data-course-id="ms-excel">Microsoft Excel</button>
        <button class="tab-btn" data-course-id="ms-powerpoint">Microsoft PowerPoint</button>
        <button class="tab-btn" data-course-id="ai-skills">AI-এর ব্যবহার</button>
      </div>
      <div style="margin-top: 24px;">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScd2gThDtqFym5qOIZQqJVoKCKzPYYn6oYMRwwAc5jeTxsTjw/viewform?usp=header" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
          ভর্তি ফরম পূরণ করুন
        </a>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact-section" id="contact">
    <div class="container text-center">
      <h2 class="section-title">Support / Contact</h2>
      <p class="section-desc">যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন।</p>
      <div class="contact-channels" style="margin-top: 32px;">
        <a href="https://wa.me/8801700000000" target="_blank" rel="noopener noreferrer" class="channel-card">
          <h3 class="channel-title">WhatsApp Support</h3>
          <span class="channel-btn">হোয়াটসঅ্যাপে লিখুন</span>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="channel-card">
          <h3 class="channel-title">Facebook Page</h3>
          <span class="channel-btn">পেজে ভিজিট করুন</span>
        </a>
        <a href="tel:+8801700000000" class="channel-card">
          <h3 class="channel-title">Direct Call</h3>
          <span class="channel-btn">সরাসরি কল দিন</span>
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container text-center">
      <h3>Learning Computer BD</h3>
      <p>কম্পিউটার ও AI শিক্ষা সহজভাবে</p>
      <p style="margin-top: 16px; font-size: 13px;">© 2026 Learning Computer BD. All rights reserved.</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;

export const RAW_CSS_CODE = `/* Learning Computer BD - style.css */
:root {
  --primary: #059669;
  --primary-hover: #047857;
  --primary-light: #ecfdf5;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --bg-page: #f8fafc;
  --font-family: 'Hind Siliguri', sans-serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: var(--font-family); background: var(--bg-page); color: var(--text-main); line-height: 1.6; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.text-center { text-align: center; }

.header { position: fixed; top: 0; left: 0; right: 0; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); border-bottom: 1px solid #e2e8f0; padding: 14px 0; z-index: 100; }
.header-container { display: flex; align-items: center; justify-content: space-between; }
.brand { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 18px; text-decoration: none; color: inherit; }
.nav-menu { display: flex; gap: 24px; }
.nav-link { text-decoration: none; color: var(--text-muted); font-weight: 500; }
.nav-link:hover { color: var(--primary); }

.btn { display: inline-flex; align-items: center; justify-content: center; padding: 10px 20px; border-radius: 10px; font-weight: 600; text-decoration: none; cursor: pointer; border: none; font-family: inherit; }
.btn-primary { background: var(--primary); color: #fff; }
.btn-primary:hover { background: var(--primary-hover); }
.btn-secondary { background: var(--primary-light); color: #065f46; border: 1px solid #a7f3d0; }
.btn-sm { padding: 6px 14px; font-size: 13px; }
.btn-lg { padding: 14px 28px; font-size: 16px; border-radius: 12px; }

.hero-section { padding: 120px 0 60px; }
.hero-headline { font-size: 42px; font-weight: 700; line-height: 1.25; margin-top: 10px; }
.hero-description { font-size: 18px; color: #334155; margin-top: 14px; }
.hero-buttons { display: flex; gap: 14px; margin-top: 28px; }

.courses-section { padding: 70px 0; background: #fff; }
.courses-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-top: 36px; }
.course-card { border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.04); }
.card-img { width: 100%; height: 180px; object-fit: cover; }
.card-body { padding: 20px; }
.card-title { font-size: 18px; margin-bottom: 6px; }
.card-desc { font-size: 14px; color: var(--text-muted); margin-bottom: 14px; }
.card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 14px; }
.fee-amount { font-size: 18px; font-weight: 700; color: var(--primary); }

.freeclass-section, .enrollment-section, .contact-section { padding: 70px 0; border-top: 1px solid #e2e8f0; }
.contact-channels { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
.channel-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 24px; text-decoration: none; color: inherit; }
.channel-btn { display: inline-block; margin-top: 12px; background: #f1f5f9; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; }
.footer { background: #0f172a; color: #94a3b8; padding: 48px 0; }

@media(max-width: 768px) {
  .nav-menu { display: none; }
  .hero-headline { font-size: 30px; }
  .hero-buttons { flex-direction: column; }
}`;

export const RAW_JS_CODE = `// Learning Computer BD - script.js
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', function () {
      mobileDrawer.classList.toggle('open');
    });
  }

  // Course card enrollment scroll
  const enrollButtons = document.querySelectorAll('.enroll-btn');
  enrollButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const section = document.getElementById('enrollment');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  });
});`;
