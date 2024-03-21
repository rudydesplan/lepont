document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('date').value = new Date().toLocaleDateString("fr");
    
    const value = document.querySelector("#ratingvalue");
    const input = document.querySelector("#rating");
    value.textContent = input.value;

    input.addEventListener("input", (event) => {
        value.textContent = event.target.value;
    });

    // Gestionnaire d'événement de soumission du formulaire
    document.getElementById('feedback-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher la soumission standard du formulaire

        // Récupérer les valeurs du formulaire
        const formData = {
            formation: document.getElementById("formation").value,
            typeRetour: document.getElementById("typeRetour").value,
            date: document.getElementById("date").value,
            rating: document.getElementById("rating").value,
            comments: document.getElementById("comments").value,
            consentement: document.getElementById("consentement").checked,
        };

        // URL de votre Azure Function
        const functionUrl = 'https://lepontapp.azurewebsites.net/MyHttpTrigger';

        // Envoi des données au backend via Fetch API
        fetch(functionUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('La soumission du formulaire a échoué.');
        })
        .then(data => {
            console.log(data);
            alert("Formulaire soumis avec succès !");
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert("Erreur lors de la soumission du formulaire.");
        });
    });
});