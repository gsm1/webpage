// script.js

// Function to display information with sliding animation
function showInfo(buttonNumber) {
    var infoContainer = document.getElementById('infoContainer');

    // Remove the previous infoDisplay if it exists
    var previousInfoDisplay = document.querySelector('.infoDisplay');
    if (previousInfoDisplay) {
        previousInfoDisplay.remove();
    }

    // Create a new infoDisplay element
    var infoDisplay = document.createElement('div');
    infoDisplay.classList.add('infoDisplay');

    // Display information based on the button clicked
    switch (buttonNumber) {
        case 1:
            infoDisplay.innerHTML = `
                <h2>Information for Button 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            `;
            break;
        case 2:
            infoDisplay.innerHTML = `
                <h2>Information for Button 2</h2>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            `;
            break;
        case 3:
            infoDisplay.innerHTML = `
                <h2>Information for Button 3</h2>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            `;
            break;
        default:
            infoDisplay.innerText = 'No information available.';
    }

    // Show the infoDisplay with sliding animation
    infoContainer.appendChild(infoDisplay);

    // Trigger a reflow to enable the transition
    void infoDisplay.offsetWidth;

    // Set opacity to 1
    infoDisplay.style.opacity = 1;
}

// Add click event listeners to the buttons
document.getElementById('button1').addEventListener('click', function() {
    showInfo(1);
});

document.getElementById('button2').addEventListener('click', function() {
    showInfo(2);
});

document.getElementById('button3').addEventListener('click', function() {
    showInfo(3);
});
