// 1. Select the element where we want to put the year
const yearSpan = document.getElementById('year');

// 2. Get the current year from the computer
const currentYear = new Date().getFullYear();

// 3. Put that number into the HTML
yearSpan.textContent = currentYear;

// 4. Console log to check if it's working
console.log("Website loaded successfully! Current year is: " + currentYear);