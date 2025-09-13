// Handle form submit
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Simulate a form submission
  document.getElementById('form-message').textContent = 'Thanks for reaching out!';
  this.reset();
});