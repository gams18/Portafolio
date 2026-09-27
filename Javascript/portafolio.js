
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const links = document.querySelectorAll('#nav a');
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));

const form = document.getElementById('contact-form');
const success = document.getElementById('form-success');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const nameErr = document.getElementById('name-error');
  const emailErr = document.getElementById('email-error');
  const msgErr = document.getElementById('message-error');
  nameErr.textContent = '';
  emailErr.textContent = '';
  msgErr.textContent = '';

  if (name.value.trim().length < 2) { nameErr.textContent = 'Escribe tu nombre.'; valid = false; }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) { emailErr.textContent = 'Escribe un correo válido.'; valid = false; }
  if (message.value.trim().length < 10) { msgErr.textContent = 'El mensaje debe tener al menos 10 caracteres.'; valid = false; }

  if (valid) {
    form.style.display = 'none';
    success.style.display = 'block';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();