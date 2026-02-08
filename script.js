// 1. Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// 2. Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// 3. Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Toggle Icon
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// 4. Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle hamburger icon between bars and times (X)
    const hamIcon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        hamIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        hamIcon.classList.replace('fa-times', 'fa-bars');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});

// 5. Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                setTimeout(() => card.classList.add('aos-animate'), 50); // Small delay to retrigger
            } else {
                card.style.display = 'none';
                card.classList.remove('aos-animate');
            }
        });
    });
});

// 6. Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// 7. Contact Form Handler (Google Sheets)
const scriptURL = 'https://script.google.com/macros/s/AKfycbyL_MwI09pLe4deOV9ltcWJ8m_L1Wy3Nmh7v5BDCVEyxn-5JcScAypBFIE_9Im2NMVn/exec';
const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Sending...';

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                alert('Message sent successfully! I will get back to you soon.');
                btn.disabled = false;
                btn.textContent = originalText;
                form.reset();
            })
            .catch(error => {
                alert('Error! ' + error.message);
                btn.disabled = false;
                btn.textContent = originalText;
            });
    });
}
