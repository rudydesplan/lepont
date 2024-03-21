document.addEventListener("DOMContentLoaded", function() {
    // Mise à jour de la valeur initiale et dynamique de l'évaluation
    const ratingValueSpan = document.querySelector("#ratingvalue");
    const ratingInput = document.querySelector("#rating");
    ratingValueSpan.textContent = ratingInput.value;

    ratingInput.addEventListener("input", function(event) {
        ratingValueSpan.textContent = event.target.value;
    });

    document.getElementById('update-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const updateData = {
            feedbackId: document.getElementById("feedbackId").value,
            // Récupérez les autres valeurs du formulaire, en vérifiant si elles ont été modifiées
            formation: document.getElementById("formation").value || null,
            typeRetour: document.getElementById("typeRetour").value || null,
            date: document.getElementById("date").value || null,
            rating: document.getElementById("rating").value || null,
            comments: document.getElementById("comments").value || null,
            // Si vous voulez conserver la logique de consentement
            consentement: document.getElementById("consentement").checked,
        };

        // Filtrer les champs non modifiés (ex: null) avant l'envoi
        const filteredUpdateData = Object.fromEntries(Object.entries(updateData).filter(([_, v]) => v != null));

        console.log(filteredUpdateData);
        // Ici, ajoutez la logique pour envoyer 'filteredUpdateData' à votre backend
    });
});
