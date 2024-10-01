const list = document.getElementById('listProject');
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');

const prevPageMob = document.getElementById('prevPageMob');
const nextPageMob = document.getElementById('nextPageMob');

// Les articles à afficher
const listArticle = [
  {
    img: 'https://tojo-rasii.github.io/rasii-online/static/media/portfolio%20darkmode.453289df70dec5aa9e9c.png',
    title: 'Mon portfolio',
    desc: 'Mon portfolio est une expérience interactive e...',
    techno: '#langage'
  },
  {
    img: 'https://tojo-rasii.github.io/rasii-online/static/media/portfolio%20darkmode.453289df70dec5aa9e9c.png',
    title: 'Mon portfolio',
    desc: 'Mon portfolio est une expérience interactive e...',
    techno: '#langage'
  },
  {
    img: 'https://tojo-rasii.github.io/rasii-online/static/media/portfolio%20darkmode.453289df70dec5aa9e9c.png',
    title: 'Mon portfolio',
    desc: 'Mon portfolio est une expérience interactive e...',
    techno: '#langage'
  },
  {
    img: 'https://tojo-rasii.github.io/rasii-online/static/media/portfolio%20darkmode.453289df70dec5aa9e9c.png',
    title: 'Mon portfolio',
    desc: 'Mon portfolio est une expérience interactive e...',
    techno: '#langage',
  },
  // Ajouter d'autres articles ici
];

// Paramètres de pagination
const itemsPerPage = 3; // Nombre d'articles par page
let currentPage = 1;
const totalPages = Math.ceil(listArticle.length / itemsPerPage);

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
          <p>${lists.desc}</p>
          <p><span>${lists.techno}</span></p>
        </figcaption>
      </picture>
    `;
  });
}

// Écouteur pour le bouton "page suivante"
nextPage.addEventListener('click', () => {
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
// Écouteur pour le bouton "page suivante"
nextPageMob.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayArticles(currentPage);
  }
  window.location.href = '#Projets'


});

// Écouteur pour le bouton "page précédente"
prevPageMob.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayArticles(currentPage);
  }
  window.location.href = '#Projets'

});

// Afficher la première page lors du chargement
displayArticles(currentPage);
