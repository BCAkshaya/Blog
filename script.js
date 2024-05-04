// script.js

function fetchAndDisplayText(filePath) {
    const fileName = filePath.split('/').pop(); // Extract the file name from the file path
    const fileNumber = fileName.match(/\d+/)[0]; // Extract the number from the file name

    fetch(filePath)
        .then(response => response.text())
        .then(text => {
            const containerId = `text-container-${fileNumber}`;
            document.getElementById(containerId).innerText = text;
        })
        .catch(error => {
            console.error(`There was a problem fetching the text from ${filePath}:`, error);
        });
}

function goToHomePage() {
    // Add functionality to go to the home page
    alert("Redirecting to the home page!");
}

function toggleMenu() {
    // Add functionality to toggle the menu
    alert("Toggling the menu!");
}
