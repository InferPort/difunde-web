import { animate, scroll, inView } from 'motion';

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const marqueeWrappers = document.querySelectorAll('.animate-marquee');
marqueeWrappers.forEach((wrapper) => {
  wrapper.addEventListener('mouseenter', () => {
    wrapper.style.animationPlayState = 'paused';
  });
  wrapper.addEventListener('mouseleave', () => {
    wrapper.style.animationPlayState = 'running';
  });
});

const heroOrbs = document.querySelectorAll('.hero-orb');
heroOrbs.forEach((orb, i) => {
  const xDrift = [80, -100, 140, -60][i] || 50;
  const yDrift = [-50, 80, -40, 100][i] || 0;
  const dur = 8 + i * 2;
  animate(orb, {
    x: [0, xDrift, 0, -xDrift * 0.5, 0],
    y: [0, yDrift, -yDrift * 0.6, yDrift * 0.4, 0],
    scale: [1, 1.12, 0.9, 1.06, 1],
  }, {
    duration: dur,
    repeat: Infinity,
    ease: 'ease-in-out',
  });
});

const heroParallax = document.querySelector('.hero-parallax');
if (heroParallax) {
  scroll(
    animate(heroParallax, {
      transform: ['none', 'translateY(12vh) scale(0.94)'],
    }),
    { target: heroParallax, offset: ['start start', 'end start'] }
  );
}

const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach((stat) => {
  inView(stat, () => {
    const el = stat;
    const target = parseInt(el.dataset.target, 10);
    if (!target || el.dataset.animated) return;
    el.dataset.animated = 'true';
    const duration = 2000;
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;
    const increment = target / steps;

    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(counter);
      } else {
        el.textContent = Math.round(current).toLocaleString();
      }
    }, stepTime);
  }, { amount: 0.5 });
});

document.querySelectorAll('.pricing-card').forEach((card, i) => {
  const delay = i * 0.1;
  animate(card, {
    opacity: [0, 1],
    y: [24, 0],
    filter: ['blur(4px)', 'blur(0px)'],
  }, {
    duration: 0.6,
    delay,
    easing: [0.16, 1, 0.3, 1],
  });
});
