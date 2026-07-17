const contactStyles = document.createElement('style');
contactStyles.textContent = `
  footer { align-items: center; }
  .social-wrap { display: flex; align-items: center; gap: 18px; }
  .social-label { color: #607066; font: 700 10px 'DM Mono', monospace; letter-spacing: .08em; }
  .social-links { display: flex; gap: 10px; }
  .social-links a { background: #e5eadf; border: 1px solid #ccd6c8; border-radius: 999px; color: #15291e; font: 700 14px Manrope, Arial, sans-serif; padding: 10px 14px; text-decoration: none; transition: transform .2s ease, background .2s ease, box-shadow .2s ease; }
  .social-links a:hover, .social-links a:focus-visible { background: #c6f458; box-shadow: 3px 4px 0 #a7bb91; transform: translateY(-2px); outline: none; }
  .social-links span { margin-left: 6px; }
  @media (max-width: 760px) { footer, .social-wrap { align-items: flex-start; flex-direction: column; } .social-links { flex-wrap: wrap; } }
`;
document.head.append(contactStyles);

document.querySelectorAll('.detail-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    button.innerHTML = expanded ? 'See contributions <span>+</span>' : 'Hide contributions <span>−</span>';
    details.hidden = expanded;
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('filled'); });
}, { threshold: 0.45 });
document.querySelectorAll('.progress-item').forEach((item) => observer.observe(item));
