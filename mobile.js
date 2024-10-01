document.addEventListener('DOMContentLoaded', () => {
    const moon = document.querySelector('.bi-moon-stars');
    const sun = document.querySelector('.bi-sun');
    const mobileArticle = document.querySelector('#headerMobile section article:last-child');
    const after = document.querySelector('.after');
    const show = document.getElementById('i-list');
    const close = document.getElementById('i-x');



    show.addEventListener('click', () => {

        mobileArticle.classList.add('display');

    })

    close.addEventListener('click', () => {


        mobileArticle.classList.remove('display');
    })
})




