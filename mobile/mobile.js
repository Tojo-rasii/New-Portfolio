document.addEventListener('DOMContentLoaded', () => {
    const moon = document.querySelector('.bi-moon-stars');
    const sun = document.querySelector('.bi-sun');
    const sectionAfter = document.querySelector('#headerMobile section::after');
    const a = document.querySelectorAll('#headerMobile a');
    const mobileArticle = document.querySelector('#headerMobile section article:last-child');
    const after = document.querySelector('.after');
    const show = document.getElementById('i-list');
    const close = document.getElementById('i-x');



    show.addEventListener('click', () => {

        mobileArticle.classList.add('display');
        sectionAfter.style.display = 'block';

    })


    close.addEventListener('click', () => {
        mobileArticle.classList.remove('display');
        sectionAfter.style.display = 'none';

    })


    a.forEach((value) => {
        value.addEventListener('click', () => {
            mobileArticle.classList.remove('display');

        })
    })
})




