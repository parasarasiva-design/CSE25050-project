/* ---------- 1. LOADING SCREEN ---------- */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hide'), 600);
  }
});

/* ---------- 2. MOBILE HAMBURGER MENU ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

/* ---------- 3. DARK MODE TOGGLE ---------- */
const modeBtn = document.getElementById('modeToggle');
if (modeBtn) {
  // Load saved mode
  if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark');
    modeBtn.textContent = '☀';
  }
  modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    modeBtn.textContent = isDark ? '☀' : '🌙';
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
  });
}

/* ---------- 4. ACTIVE NAV LINK HIGHLIGHT ---------- */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) link.classList.add('active');
});

/* ---------- 5. BACK TO TOP BUTTON ---------- */
const topBtn = document.getElementById('topBtn');
if (topBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) topBtn.classList.add('show');
    else topBtn.classList.remove('show');
  });
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- 6. SCROLL REVEAL ANIMATION ---------- */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });
reveals.forEach(el => revealObserver.observe(el));

/* ---------- 7. COUNTER ANIMATION ---------- */
const counters = document.querySelectorAll('.counter');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.dataset.target;
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 80));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target.toLocaleString() + '+';
          clearInterval(timer);
        } else {
          el.textContent = current.toLocaleString();
        }
      }, 25);
      countObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });
counters.forEach(c => countObserver.observe(c));

/* ---------- 8. TESTIMONIAL SLIDER ---------- */
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  if (slides[i]) slides[i].classList.add('active');
}
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}
if (slides.length) {
  showSlide(0);
  setInterval(nextSlide, 5000); // auto change
}

/* ---------- 9. FAQ TOGGLE ---------- */
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => item.classList.toggle('open'));
});

/* ---------- 10. APPLY FORM VALIDATION + POPUP ---------- */
const applyForm = document.getElementById('applyForm');
const popup = document.getElementById('popup');
if (applyForm) {
  applyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = applyForm.name.value.trim();
    const email = applyForm.email.value.trim();
    const phone = applyForm.phone.value.trim();
    const course = applyForm.course.value;

    if (!name || !email || !phone || !course) {
      alert('Please fill in all required fields.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email.');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    popup.classList.add('show');
    applyForm.reset();
  });
}
function closePopup() { popup.classList.remove('show'); }

/* ---------- 11. CONTACT FORM ---------- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Thank you! Your message has been sent.');
    contactForm.reset();
  });
}
