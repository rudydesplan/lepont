document.getElementById('delete-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent standard form submission

    const feedbackId = document.getElementById("feedbackId").value;

    // URL to your Azure Function for deletion
    const functionUrl = '';

    fetch(functionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: feedbackId }),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Failed to delete feedback.');
    })
    .then(data => {
        console.log(data);
        alert("Feedback deleted successfully!");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error during feedback deletion.");
    });
});
