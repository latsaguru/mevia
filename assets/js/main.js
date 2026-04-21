// ============ FULLSCREEN MENU ============
const overlay = document.getElementById('menuOverlay');
document.getElementById('openMenu').addEventListener('click', () => {
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
});
document.getElementById('closeMenu').addEventListener('click', () => {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
});
document.querySelectorAll('[data-close]').forEach(link => {
  link.addEventListener('click', () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Reservation bell scrolls to form
document.getElementById('openReservation').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// ============ HERO CAROUSEL ============
const slides = document.querySelectorAll('.hero-slide');
let current = 0;
setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5500);

// ============ REVEAL ============
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ============ FORM ============
document.getElementById('reservationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const success = document.getElementById('formSuccess');
  form.querySelector('.form-grid').style.display = 'none';
  form.querySelector('.form-submit').style.display = 'none';
  success.classList.add('active');
});

// ============ LANGUAGE SWITCH (placeholder) ============
document.getElementById('langSwitch').addEventListener('click', (e) => {
  e.preventDefault();
  alert('ინგლისური ვერსია მალე იქნება ხელმისაწვდომი. English version coming soon.');
});
