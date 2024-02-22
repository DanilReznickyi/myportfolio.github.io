function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll');
      observer.unobserve(entry.target);
    }
  });
}
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
const boxes = document.querySelectorAll('.section_title');
boxes.forEach(box => {
observer.observe(box);
});