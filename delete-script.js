document.getElementById('delete-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent standard form submission

    const feedbackId = document.getElementById("feedbackId").value;

    // URL to your Azure Function for deletion - replace this with your actual Azure Function URL
    const functionUrl = 'https://lepontapp.azurewebsites.net/MyHttpTrigger2';

    fetch(functionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // Make sure the key matches the expected parameter in your Azure Function ('id_to_delete')
        body: JSON.stringify({ id_to_delete: feedbackId }),
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
