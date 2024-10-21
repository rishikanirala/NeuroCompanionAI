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
    box-shadow: 0px 0px 9px rgb(6, 20, 44);
}
.dark-mode .nav-link{
    background-color: #495057;
    padding: 10px;
    border-radius: 15px ;
    margin: 5px;
    color: white;
    box-shadow: 0px 0px 9px rgb(6, 20, 44);
}


.dark-mode .bg-light{
    background-color: #343a40;
}


`;

document.head.appendChild(style);
