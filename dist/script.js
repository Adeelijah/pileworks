// Set the verified WhatsApp number in international format (digits only) after design approval.
const WHATSAPP_NUMBER = '';
const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
const enquiry = document.querySelector('#enquiry');
document.querySelector('#enquiry-open').addEventListener('click', () => enquiry.showModal());
const project = document.querySelector('#project-dialog');
document.querySelector('#project-open').addEventListener('click', () => project.showModal());
document.querySelectorAll('dialog').forEach(d => { d.querySelector('.close').addEventListener('click', () => d.close()); d.addEventListener('click', e => { if (e.target === d) { const r = d.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) d.close(); } }); });
document.querySelector('#enquiry-form').addEventListener('submit', e => {
 e.preventDefault(); const data = new FormData(e.target);
 const message = `Hello Pileworks, I would like to discuss my project.\nName: ${data.get('name')}\nLocation: ${data.get('location')}\nProject: ${data.get('type')}\nDetails: ${data.get('details') || 'To be discussed.'}`;
 if (WHATSAPP_NUMBER) { window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer'); return; }
 const prepared = document.querySelector('#prepared-message'); prepared.value = message; prepared.hidden = false;
 document.querySelector('#copy-message').hidden = false;
 document.querySelector('#form-status').textContent = 'Your message is ready. The company WhatsApp number will be connected after design approval; no enquiry has been sent.';
});
document.querySelector('#copy-message').addEventListener('click', async () => { const message = document.querySelector('#prepared-message'); try { await navigator.clipboard.writeText(message.value); document.querySelector('#form-status').textContent = 'Message copied. No enquiry has been sent.'; } catch { message.focus(); message.select(); document.querySelector('#form-status').textContent = 'Select and copy your prepared message.'; } });
document.querySelector('#year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const elements = document.querySelectorAll('.section-heading, .about-copy, .service-grid article, .value-list article, .process-grid article, .team-grid article');
 const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } }), {threshold: 0.08});
 elements.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}
const mobileEnquiry = document.querySelector('.mobile-enquiry');
if ('IntersectionObserver' in window) {
 const visibility = new IntersectionObserver(entries => { mobileEnquiry.classList.toggle('contact-visible', entries[0].isIntersecting); }, {threshold: 0.08});
 visibility.observe(document.querySelector('#contact'));
}
