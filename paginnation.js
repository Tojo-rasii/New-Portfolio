const list = document.getElementById('listProject');
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');

// Liste des articles
const listArticle = [
    {
        img: '../asset/aaaa.png',
        title: 'Mon portfolio',
        desc: 'Mon portfolio est une expérience interactive e...',
        techno: '#Html , #Css, #Js'
    },
    {
        img: 'https://tojo-rasii.github.io/rasii-online/static/media/portfolio%20darkmode.453289df70dec5aa9e9c.png',
        title: 'Mon ancien portfolio',
        desc: 'Mon portfolio est une expérience interactive e...',
        techno: '#ReactJS, #Css'
    },
    {
        img: 'https://tojo-rasii.github.io/rasii-online/static/media/csf.522d84342aca5e4ab08d.png',
        title: 'Cosef Ofisialy',
        desc: 'Une plateforme dédiée à la diffusion d inform..',
        techno: '#ReactJS, #Firebase, #Css, #Bootstrap'
    },
    {
        img: 'https://tojo-rasii.github.io/rasii-online/static/media/muscle.fa0999ee543533194684.png',
        title: 'Muscle app',
        desc: 'Plateforme de Fitness Intuitive : Conceptualis...',
        techno: '#NextJs'
    },
    {
        img: 'https://tojo-rasii.github.io/rasii-online/static/media/gaallery.4a446e07421d6198110b.png',
        title: 'Gallery Sport',
        desc: 'Développement et conception dune galerie de ph...',
        techno: '#Html , #Css, #Js, #Api'
    },
    {
        img: 'https://tojo-rasii.github.io/rasii-online/static/media/dark.c0800f3be135582205da.png',
        title: 'Calculatrice Dark Mode UI/UX',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisi...',
        techno: '#Figma'
    },
    {
        img: 'https://tojo-rasii.github.io/rasii-online/static/media/moonlight.4ab05ffec3a0f714b083.png',
        title: 'Animate Weather',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisi...',
        techno: '#Html , #Css, #Js'
    },
    {
        img: 'https://tojo-rasii.github.io/rasii-online/static/media/travels.569fa50a544ff435e80b.png',
        title: 'Travel Calculator',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisi...',
        techno: '#Html , #Css, #Js'
    },
    {
        img: 'https://tojo-rasii.github.io/rasii-online/static/media/password.296ba7dfff5398d87fd7.png',
        title: 'Password Validation',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisi...',
        techno: '#Html , #Css, #Js'
    },
];

// Paramètres de pagination
let itemsPerPage = 3; // Nombre d'articles par page
let currentPage = 1;

// Fonction pour afficher les articles de la page actuelle
function displayArticles(page) {
    list.innerHTML = ''; // Effacer le contenu précédent
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const articlesToDisplay = listArticle.slice(start, end);

    articlesToDisplay.forEach((lists) => {
        list.innerHTML += `
      <picture id='pic'>
        <figure>
          <img src=${lists.img} alt="image">
        </figure>
        <figcaption>
          <p>${lists.title}</p>
          <p id='ellipsis'>${lists.desc}</p>
          <p>${lists.techno}</p>
        </figcaption>
      </picture>
    `;
    });
}

// Fonction pour ajuster le nombre d'articles par page selon la largeur de l'écran
function adjustItemsPerPage() {
    if (window.innerWidth <= 1024) {
        itemsPerPage = 1;
    } else {
        itemsPerPage = 3;

    }
    const totalPages = Math.ceil(listArticle.length / itemsPerPage);
    if (currentPage > totalPages) {
        currentPage = totalPages; // S'assurer que la page actuelle ne dépasse pas le total
    }
    displayArticles(currentPage); // Mettre à jour les articles affichés après changement
}

// Ajouter un écouteur d'événement pour la redimension de la fenêtre
window.addEventListener('resize', adjustItemsPerPage);

// Appeler cette fonction une fois au chargement pour ajuster immédiatement
adjustItemsPerPage();

// Écouteur pour le bouton "page suivante"
nextPage.addEventListener('click', () => {
    const totalPages = Math.ceil(listArticle.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayArticles(currentPage);
    }
});

// Écouteur pour le bouton "page précédente"
prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayArticles(currentPage);
    }
});
