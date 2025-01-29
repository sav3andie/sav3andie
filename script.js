document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const message = event.target.querySelector('textarea').value;
    
    if (name && email && message) {
        alert(`Спасибо за запись, ${name}! Я скоро с вами свяжусь по email: ${email}`);
        event.target.reset();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});
