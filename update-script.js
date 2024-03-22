document.getElementById('update-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent standard form submission

    // Construct the data object with potential null values for optional fields
    const updateData = {
        feedbackId: document.getElementById("feedbackId").value,
        formation: document.getElementById("formation").value || null,
        typeRetour: document.getElementById("typeRetour").value || null,
        date: document.getElementById("date").value || null,
        rating: document.getElementById("rating").value || null,
        comments: document.getElementById("comments").value || null,
        consentement: document.getElementById("consentement").checked,
    };

    // Filter out fields that have not been modified (i.e., null values except for 'consentement')
    const filteredUpdateData = Object.fromEntries(
        Object.entries(updateData).filter(([key, value]) => value !== null || key === 'consentement')
    );

    // URL to your Azure Function for updating feedback
    const functionUrl = 'https://lepontapp.azurewebsites.net/MyHttpTrigger3';

    fetch(functionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filteredUpdateData),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Failed to update feedback.');
    })
    .then(data => {
        console.log(data);
        alert("Feedback updated successfully!");
        // Optionally, reset the form or handle the UI response here
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error during feedback update.");
    });
});
