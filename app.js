gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a');
const activeNav = document.querySelector('.active-nav');

links.forEach((link) => {
  link.addEventListener('click', () => {
    gsap.to(links, { color: '#252525' });
  });

  if(document.activeElement)
});
