import { useEffect } from 'react';

// Fades and lifts every [data-reveal] element the first time it scrolls into view.
// index.html adds the `motion` class before first paint unless the visitor prefers reduced motion;
// without it the CSS leaves everything visible and still.
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('motion')) return;
    // Whatever is already on screen starts revealing straight away instead of waiting for the observer.
    const inView = (el) => el.getBoundingClientRect().top < window.innerHeight;
    const all = [...document.querySelectorAll('[data-reveal]')];
    all.filter(inView).forEach((el) => el.classList.add('is-in'));
    const els = all.filter((el) => !el.classList.contains('is-in'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
