(() => {
    'use strict';
    // Optional: paste a Formspree URL (https://formspree.io/f/xxxx) to receive messages by email without opening a mail app.
    const FORM_ENDPOINT = '';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    // 2. Typing effect (skipped for reduced-motion users; static text stays in the HTML)
    const typingText = document.getElementById('typing-text');
    const roles = ['IT Support Specialist', 'Network & Systems Administrator', 'Computer Science Student', 'Automation Developer'];
    let roleIndex = 0, charIndex = roles[0].length, isDeleting = true;

    function typeEffect() {
        const role = roles[roleIndex];
        charIndex += isDeleting ? -1 : 1;
        typingText.textContent = role.slice(0, charIndex);
        let delay = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === role.length) { isDeleting = true; delay = 2000; }
        else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 500; }
        setTimeout(typeEffect, delay);
    }
    if (!reduceMotion) setTimeout(typeEffect, 2000);

    // 3. Scroll reveal + active nav link
    const links = document.querySelectorAll('.nav-links a');
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(s => navObserver.observe(s));

    // 4. Mobile menu
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.getElementById('nav-links');
    const setMenu = open => { menu.classList.toggle('open', open); toggle.setAttribute('aria-expanded', open); };
    toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
    links.forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

    // 5. Theme toggle
    const themeBtn = document.querySelector('.theme-toggle');
    const applyTheme = t => { document.documentElement.dataset.theme = t; themeBtn.textContent = t === 'dark' ? '☀️' : '🌙'; };
    applyTheme(document.documentElement.dataset.theme || 'light');
    themeBtn.addEventListener('click', () => {
        const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        applyTheme(t);
        try { localStorage.setItem('theme', t); } catch (e) {}
    });

    // 6. Contact form: opens the visitor's mail client with the message prefilled
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const { name, email, message } = Object.fromEntries(new FormData(form));
        if (FORM_ENDPOINT) {
            fetch(FORM_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
                .then(r => { if (!r.ok) throw new Error(); status.textContent = 'Thanks! Your message was sent.'; form.reset(); })
                .catch(() => { status.textContent = 'Sorry, something went wrong. Please email me directly.'; });
            return;
        }
        const subject = encodeURIComponent(`Portfolio message from ${name.trim()}`);
        const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()} (${email.trim()})`);
        window.location.href = `mailto:phynann8@gmail.com?subject=${subject}&body=${body}`;
        status.textContent = 'Opening your email app… if nothing happens, email me directly at the address above.';
        form.reset();
    });
})();
