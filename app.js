gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a');
const activeNav = document.querySelector('.active-nav');

links.forEach((link) => {
  link.addEventListener('click', (e) => {});

  if (document.activeElement === e.target) {
    gsap.to(link, { color: '#385ae0' });
  }
});
