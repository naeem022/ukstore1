document.addEventListener("DOMContentLoaded", function() {
    const signupLink = document.querySelector('.signup-register a');
    const loginLink = document.querySelector('.login-register a');

    signupLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the anchor tag
        window.location.href = 'signup.html'; // Redirect to signup page
    });

    loginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the anchor tag
        window.location.href = 'login.html'; // Redirect to login page
    });
});

// JavaScript code to toggle the .active class
const container = document.querySelector('.container');

// Function to toggle the active class
function toggleActive() {
    container.classList.toggle('active');
}

// Example: Trigger the toggleActive function on button click
const toggleButton = document.querySelector('.toggle-button'); // Change this selector to match your button
toggleButton.addEventListener('click', toggleActive);