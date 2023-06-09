gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a');
const activeNav = document.querySelector('.active-nav');

links.forEach((link) => {
  link.addEventListener('click', () => {
    // Turn navs blue
    gsap.to(links, { color: '#252525' });

    if (document.activeElement === link) {
      gsap.to(link, { color: '#385ae0' });
    }

    // Move the line
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 1.15,
      absolute: true,
      ease: 'elastic.out(0.1, 0.5)',
    });
  });
});

// Cards
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    //Get State
    const state = Flip.getState(cards);

    //Add the active class to the clicked card and add inactive to others
    const isCardActive = card.classList.contains('active');
    cards.forEach((otherCard, otherIndex) => {
      otherCard.classList.remove('active');
      otherCard.classList.remove('is-inactive');
      if (!isCardActive && index !== otherIdx) {
        otherCard.classList.add('is-inactive');
      }
    });
    if (!isCardActive) card.classList.add('active');

    Flip.from(state, {
      duration: 1,
      ease: 'expo.out',
      absolute: true,
    });
  });
});
