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
