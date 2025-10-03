// ضبط سنة الحقوق
document.getElementById('year').textContent = new Date().getFullYear();

// تبديل قائمة الهاتف
const toggleBtn = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggleBtn && navLinks) {
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// سكرول ناعم للروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks?.classList.remove('open');
    }
  });
});

// زر الإرسال (ديمو)
const proposalBtn = document.getElementById('proposalBtn');
if (proposalBtn) {
  proposalBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value.trim();
    if (!email) {
      alert('رجاءً أدخل بريدك.');
      return;
    }
    alert('شكراً! سنتواصل معك قريبًا.');
  });
}
