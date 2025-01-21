document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message, je vous répondrai bientôt !');
    this.reset();
});


