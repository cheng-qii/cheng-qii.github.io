// Scroll reveal for [data-aos] elements
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('[data-aos]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('aos-visible'), i * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => observer.observe(el));

  // Navbar scroll effect
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.style.borderBottomColor = 'rgba(0,229,160,.15)';
    } else {
      nav.style.borderBottomColor = 'var(--border)';
    }
  });
});
