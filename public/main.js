// Typing effect
const roles = ['Software & Network Engineer', 'IT Support Officer', 'Node.js Web Developer'];
const el = document.getElementById('typed');
let r = 0, c = 0, del = false;
function tick() {
  const word = roles[r];
  el.textContent = word.slice(0, c);
  if (!del && c === word.length) { del = true; return setTimeout(tick, 1600); }
  if (del && c === 0) { del = false; r = (r + 1) % roles.length; }
  c += del ? -1 : 1;
  setTimeout(tick, del ? 35 : 70);
}
tick();

// Reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(n => io.observe(n));

document.getElementById('yr').textContent = new Date().getFullYear();
