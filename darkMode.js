document.addEventListener('DOMContentLoaded', () => {
    const moon = document.querySelector('.bi-moon-stars');
    const sun = document.querySelector('.bi-sun');
    const inputDark = document.getElementById('darkInpt');

    const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';

    if (isDarkMode) {
        document.body.classList.add('darkMode');
    }

    inputDark.addEventListener('input', (e) => {
        const value = e.target.checked;

        if (value === true) {

            document.body.classList.add('darkMode');

            localStorage.setItem('dark-mode', 'enabled');

        } else {
            document.body.classList.remove('darkMode');
            localStorage.setItem('dark-mode', 'disabled');

        }
    })

})