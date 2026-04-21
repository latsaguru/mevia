export function initMenu() {
  const overlay = document.getElementById('menuOverlay');

  const close = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.getElementById('openMenu').addEventListener('click', () => {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  document.getElementById('closeMenu').addEventListener('click', close);

  document.querySelectorAll('[data-close]').forEach(link => {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });

  document.getElementById('openReservation').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
}
