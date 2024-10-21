// script.js

document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('language-select').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    alert(`Language changed to: ${selectedLanguage}`);
});

// Light/Dark Mode CSS
const style = document.createElement('style');
style.innerHTML = `
.dark-mode {
    background-color: #343a40;
    color: white;
}
.dark-mode .card {
    background-color: #495057;
    color: white;
}
`;
document.head.appendChild(style);
