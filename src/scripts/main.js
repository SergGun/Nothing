'use strict';

if ('IntersectionObserver' in window) {
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      target.classList.toggle('show', isIntersecting);
    });
  });

  document
    .querySelectorAll('.categories, .recommended')
    .forEach((el) => observer.observe(el));
} else {
  document
    .querySelectorAll('.categories, .recommended')
    .forEach((el) => el.classList.add('show'));
}

function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const subject = `Message from ${name}`;

  const body = `From: ${name}

Contact email:
${email}

Message:
${message}`;

  window.location.href
    = `mailto:hello@nothing.com?subject=${encodeURIComponent(subject)}`
    + `&body=${encodeURIComponent(body)}`;

  document.querySelector('.contacts__wrapper').reset();
}

window.sendEmail = sendEmail;
