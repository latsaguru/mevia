export function initForm() {
  document.getElementById('reservationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const success = document.getElementById('formSuccess');
    form.querySelector('.form-grid').style.display = 'none';
    form.querySelector('.form-submit').style.display = 'none';
    success.classList.add('active');
  });

  document.getElementById('langSwitch').addEventListener('click', (e) => {
    e.preventDefault();
    alert('ინგლისური ვერსია მალე იქნება ხელმისაწვდომი. English version coming soon.');
  });
}
