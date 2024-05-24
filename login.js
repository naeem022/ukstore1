document.addEventListener("DOMContentLoaded", function() {
    const signupLink = document.querySelector('.login-register a');
    signupLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the anchor tag
        window.location.href = 'signup.html'; // Redirect to signup page
    });
});