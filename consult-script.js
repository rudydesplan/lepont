document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('consult-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const feedbackId = document.getElementById("feedbackId").value;
        const formation = document.getElementById("formation").value;
        const typeRetour = document.getElementById("typeRetour").value;
        const date = document.getElementById("date").value;
        const rating = document.getElementById("rating").value;

        // Construire l'URL de la requête avec les paramètres de recherche
        let queryParams = new URLSearchParams({
            feedbackId,
            formation,
            typeRetour,
            date,
            rating
        }).toString();

        const apiUrl = ``;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                
				
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    });
});
