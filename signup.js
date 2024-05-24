document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.querySelector('.signup-register a');
    loginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the anchor tag
        window.location.href = 'login.html'; // Redirect to login page
    });
});