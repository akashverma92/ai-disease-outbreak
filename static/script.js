document.getElementById('predictionForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const country = document.getElementById('country').value;

    // Send the data to the backend to generate graphs
    fetch('generate_graphs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ month, year, country }),
    })
    .then(response => response.json())
    .then(data => {
        // Display links to the generated graphs
        const graphLinksDiv = document.getElementById('graphLinks');
        graphLinksDiv.innerHTML = `
            <h3>Generated Graphs:</h3>
            <a href="${data.graph3D}" target="_blank">3D Graph</a><br>
            <a href="${data.map}" target="_blank">Map</a>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
    });
};
