  // Tema claro/oscuro con memoria en localStorage
  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if(saved){ root.setAttribute('data-theme', saved); themeBtn.textContent = saved==='dark' ? '☀️' : '🌙'; }
  themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  });

  // Menú móvil
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('nav-toggle');
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

  // Resaltado de sección activa al hacer scroll
  const links = document.querySelectorAll('#nav a');
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));

  // Rol rotativo estilo terminal
  const roles = [
    'Estudiante de Ingeniería en Sistemas',
    'Desarrollador Android (Java)',
    'Desarrollador de escritorio (C#)',
    'Entusiasta de microcontroladores (Arduino)'
  ];
  const roleLine = document.getElementById('role-line');
  let ri = 0;
  function showRole(){
    roleLine.innerHTML = roles[ri] + '<span class="cursor">_</span>';
    ri = (ri + 1) % roles.length;
  }
  showRole();
  setInterval(showRole, 2800);

  // Validación del formulario de contacto (sin librerías externas)
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
    nameErr.textContent = ''; emailErr.textContent = ''; msgErr.textContent = '';

    if(name.value.trim().length < 2){ nameErr.textContent = 'Escribe tu nombre.'; valid = false; }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email.value.trim())){ emailErr.textContent = 'Escribe un correo válido.'; valid = false; }
    if(message.value.trim().length < 10){ msgErr.textContent = 'El mensaje debe tener al menos 10 caracteres.'; valid = false; }

    if(valid){
      form.style.display = 'none';
      success.style.display = 'block';
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();