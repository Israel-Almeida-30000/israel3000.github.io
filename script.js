document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por entrar em contato, em breve responderemos sua mensagem.');
    this.reset();
});
