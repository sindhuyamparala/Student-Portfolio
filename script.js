// Define the text variations
const roles = ["programmer", "developer"];
let roleIndex = 0;
let letterIndex = 0;
let direction = 1; // 1 for revealing letters, -1 for hiding letters
let delay = 100; // Initial delay between each letter change (in milliseconds)

// Function to animate the role text
function animateRoleText() {
    const roleText = document.getElementById('role-text');
    const rolePrefix = document.getElementById('role-prefix');
    const currentRole = roles[roleIndex];
    const displayedText = currentRole.substring(0, letterIndex);

    roleText.textContent = displayedText;

    // Adjust letterIndex and direction
    letterIndex += direction;

    // Change direction when reaching end or start of text
    if (letterIndex > currentRole.length || letterIndex < 0) {
        direction *= -1;

        // Increase delay when changing roles
        if (letterIndex < 0) {
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 400; // Delay between role change
        } else {
            delay = 100; // Delay between letters
        }
    }

    // Set timeout for the next animation frame
    setTimeout(animateRoleText, delay); // Adjust speed as needed
}

// Start the animation
animateRoleText();

////////////////////////

function openCode(url) {
    window.open(url, '_blank');
}

function showModal(title, description) {
    var modal = document.getElementById('project-modal');
    var modalTitle = document.getElementById('modal-title');
    var modalDescription = document.getElementById('modal-description');

    modal.style.display = 'block';
    modalTitle.textContent = title;
    modalDescription.textContent = description;
}

function closeModal() {
    var modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}
