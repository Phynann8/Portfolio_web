// 1. Select the element where we want to put the year
const yearSpan = document.getElementById('year');

// 2. Get the current year from the computer
const currentYear = new Date().getFullYear();

// 3. Put that number into the HTML
yearSpan.textContent = currentYear;

// 4. Console log to check if it's working
console.log("Website loaded successfully! Current year is: " + currentYear);

// Contact Form Validation
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
    } else {
        // Here you would typically send the form data to a server
        alert("Thank you for your message! I will get back to you soon.");
        contactForm.reset(); // Clear the form fields
    }
});
