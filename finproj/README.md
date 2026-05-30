# Bright Horizon University — Student Project

A multi-page university website built with **only HTML, CSS, and JavaScript**.
No React, no Bootstrap, no Tailwind, no backend.

## 📁 Project Structure

```
university-website/
├── index.html         # Home
├── about.html         # About / mission / vision
├── courses.html       # All 12+ courses with details
├── placements.html    # Recruiters, stats, testimonials
├── events.html        # Upcoming events
├── contact.html       # Contact form + FAQ
├── apply.html         # Admission form + success popup
├── style.css          # All styling (variables, grid, flexbox, animations)
├── script.js          # All JavaScript (menu, dark mode, counters, slider…)
└── images/            # All images (hero, campuses, events, gallery, students)
```

## ▶️ How to Run in VS Code

1. Open the `university-website` folder in VS Code.
2. Install the **"Live Server"** extension.
3. Right-click `index.html` → **Open with Live Server**.
4. Done — the site opens at `http://127.0.0.1:5500`.

(Or just double-click `index.html` to open it in your browser.)

## 🎨 Design Concepts Used

- CSS Variables (`:root`) for the maroon + orange + gold theme
- CSS **Flexbox** for the navbar and rows
- CSS **Grid** for cards, gallery, footer, counters
- Responsive design with **media queries**
- Sticky navbar, gradient backgrounds, glassmorphism counter cards
- Smooth scrolling, soft shadows, hover effects

## ⚡ JavaScript Features

1. **Loading screen** — disappears after page load
2. **Hamburger menu** — mobile-friendly navigation
3. **Dark mode toggle** — saves choice in `localStorage`
4. **Active nav highlight** — based on current page URL
5. **Back-to-top button** — appears on scroll
6. **Scroll reveal animation** — using `IntersectionObserver`
7. **Counter animation** — animated numbers in achievements
8. **Testimonial slider** — auto-rotating + manual buttons
9. **FAQ accordion** — click to expand
10. **Form validation** — name, email, 10-digit phone
11. **Success popup** — confirmation modal after applying

## 🎓 Viva Q&A (Sample)

**Q: Why CSS variables?**
A: Centralizes colors and spacing — change once, applies everywhere.

**Q: Difference between Flexbox and Grid?**
A: Flexbox is 1-D (row or column). Grid is 2-D (rows & columns together).

**Q: How does the counter work?**
A: An `IntersectionObserver` detects when the section is visible, then `setInterval` increments numbers until reaching the target.

**Q: How is dark mode persisted?**
A: We toggle a `dark` class on `<body>` and save the choice in `localStorage`.

**Q: Why use `IntersectionObserver` for scroll reveal?**
A: It's more performant than listening to scroll events on every pixel.

**Q: What does `scroll-behavior: smooth` do?**
A: Makes anchor links scroll smoothly instead of jumping instantly.

**Q: How is the website responsive?**
A: CSS Grid with `auto-fit` + media queries that change layouts under 768px.

## 🧑‍🎓 Tips for Presentation

- Open `index.html` first, scroll through to show all sections.
- Resize the browser to show responsive layout.
- Click the moon icon to demo dark mode.
- Click "Apply Now" → fill the form → show the success popup.
- Open DevTools to show the simple, well-commented JS.

Enjoy! 🎉
