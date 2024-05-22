document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('toggle-password');

    togglePasswordButton.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordButton.textContent = 'Cacher';
        } else {
            passwordInput.type = 'password';
            togglePasswordButton.textContent = 'Afficher';
        }
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_gifigm6'; // Remplacez par votre service ID
        const templateID = 'template_rp3hllb'; // Remplacez par votre template ID

        const templateParams = {
            first_name: document.getElementById('first-name').value,
            last_name: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            phone: document.getElementById('phone').value
        };

        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                document.getElementById('contact-form').reset(); // Réinitialise le formulaire
                document.getElementById('confirmation-message').classList.remove('hidden'); // Affiche le message de confirmation
            }, function(error) {
                alert('Erreur lors de l\'envoi du message : ' + JSON.stringify(error));
            });
    });
});
