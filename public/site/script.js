/**
 * Learning Computer BD - Standalone JavaScript
 * Handles navigation, interactive tabs, form submissions, and smooth interactions.
 */

document.addEventListener('DOMContentLoaded', function () {
  // ==================== CONFIGURATION VARIABLES ====================
  // All editable links can be updated right here:
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScd2gThDtqFym5qOIZQqJVoKCKzPYYn6oYMRwwAc5jeTxsTjw/viewform?usp=header";
  const WHATSAPP_NUMBER = "8801700000000";

  // Course Data dictionary for interactive course selector
  const coursesData = {
    'ms-word': {
      title: 'Microsoft Word',
      price: '১৯৯ টাকা',
      desc: 'অফিসিয়াল ডকুমেন্ট তৈরি, সিভি (CV) রাইটিং, পেজ সেটআপ, ফন্ট স্টাইলিং ও প্রফেশনাল প্রিন্ট করার সম্পূর্ণ গাইড।',
      syllabus: [
        'সিভি ও অফিশিয়াল লেটার তৈরি',
        'টেবিল ও পেজ লেআউট ফরম্যাটিং',
        'বাংলা ও ইংরেজি টাইপিং গাইডলাইন',
        'প্রিন্ট ও পিডিএফ এক্সপোর্ট'
      ]
    },
    'ms-excel': {
      title: 'Microsoft Excel',
      price: '১৯৯ টাকা',
      desc: 'সহজ থেকে অ্যাডভান্সড ফর্মুলা, হিসাব-নিকাশ, বেতন শিট, বাজেট তৈরি ও চার্ট বিশ্লেষণের সম্পূর্ণ এক্সেল কোর্স।',
      syllabus: [
        'বেসিক ও অ্যাডভান্সড ফর্মুলা (SUM, IF, VLOOKUP)',
        'দৈনন্দিন আয়-ব্যয় ও বাজেট হিসাব',
        'ডাটা ফিল্টারিং ও পিভট টেবিল',
        'আকর্ষণীয় বার ও পাই চার্ট তৈরি'
      ]
    },
    'ms-powerpoint': {
      title: 'Microsoft PowerPoint',
      price: '১৯৯ টাকা',
      desc: 'আকর্ষণীয় প্রেজেন্টেশন স্লাইড ডিজাইন, স্মুথ অ্যানিমেশন, ইনফোগ্রাফিক এবং স্কুল/অফিস প্রেজেন্টেশন তৈরির কৌশল।',
      syllabus: [
        'মডার্ন ও ক্লিন স্লাইড ডিজাইন',
        'স্মার্ট ট্রানজিশন ও অ্যানিমেশন',
        'ইনফোগ্রাফিক ও আইকন প্লেসমেন্ট',
        'প্রফেশনাল প্রেজেন্টেশন ডেলিভারি'
      ]
    },
    'ai-skills': {
      title: 'AI-এর ব্যবহার',
      price: '১৯৯ টাকা',
      desc: 'ChatGPT, Gemini ও আধুনিক AI টুলস ব্যবহার করে পড়ার টেবিলে ও অফিসের কাজে ১০ গুণ গতি বাড়ানোর কার্যকর ট্রিকস।',
      syllabus: [
        'ChatGPT ও Gemini ব্যবহারের সঠিক নিয়ম',
        'অফিসিয়াল ইমেইল ও কনটেন্ট রাইটিং',
        'AI দিয়ে ডাটা সামারি ও রিসার্চ',
        'দৈনন্দিন জীবনে AI দিয়ে সময় বাঁচানো'
      ]
    }
  };

  // ==================== MOBILE MENU TOGGLE ====================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', function () {
      mobileDrawer.classList.toggle('open');
    });

    // Close mobile drawer when any link is clicked
    const mobileLinks = mobileDrawer.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // ==================== INTERACTIVE ENROLLMENT TABS ====================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const courseTitleEl = document.getElementById('selectedCourseTitle');
  const coursePriceEl = document.getElementById('selectedCoursePrice');
  const courseDescEl = document.getElementById('selectedCourseDesc');
  const courseSyllabusEl = document.getElementById('selectedCourseSyllabus');

  function updateSelectedCourse(courseId) {
    const course = coursesData[courseId];
    if (!course) return;

    // Update active tab styling
    tabButtons.forEach(function (btn) {
      if (btn.getAttribute('data-course-id') === courseId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update DOM content
    if (courseTitleEl) courseTitleEl.textContent = course.title;
    if (coursePriceEl) coursePriceEl.textContent = course.price;
    if (courseDescEl) courseDescEl.textContent = course.desc;

    if (courseSyllabusEl) {
      courseSyllabusEl.innerHTML = '';
      course.syllabus.forEach(function (item) {
        const li = document.createElement('li');
        li.innerHTML = '<svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' + item;
        courseSyllabusEl.appendChild(li);
      });
    }
  }

  // Tab click handler
  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const courseId = this.getAttribute('data-course-id');
      updateSelectedCourse(courseId);
    });
  });

  // Course card "ভর্তি হতে চাই" button clicks
  const enrollButtons = document.querySelectorAll('.enroll-btn');
  enrollButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const courseId = this.getAttribute('data-course-id');
      updateSelectedCourse(courseId);
      
      // Smooth scroll to enrollment section
      const enrollmentSection = document.getElementById('enrollment');
      if (enrollmentSection) {
        enrollmentSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ==================== INQUIRY FORM SUBMISSION ====================
  const inquiryForm = document.getElementById('inquiryForm');
  const formSuccess = document.getElementById('formSuccess');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('userName').value;
      const phone = document.getElementById('userPhone').value;
      const msg = document.getElementById('userMsg').value;

      // Show instant feedback
      inquiryForm.style.display = 'none';
      if (formSuccess) {
        formSuccess.style.display = 'block';
      }
    });
  }
});
