// Basic form validation (optional)
document.getElementById('contact-form').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    event.preventDefault(); // Prevent form submission
  } else if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    event.preventDefault();
  } else {
      // You can add AJAX submission here instead of the alert
      alert('Thank you for your message!');
      document.getElementById('contact-form').reset();
      event.preventDefault();  // Prevent actual form submission
  }
});

function isValidEmail(email) {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//Smooth scrolling to sections (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop -50, //Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});
