const list = document.getElementById('listProject');

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
        desc: 'Une plateforme dédiée à la diffusion d inform...',
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

// Fonction pour afficher tous les articles
function displayArticles() {
    list.innerHTML = ''; // Effacer le contenu précédent

    listArticle.forEach((lists) => {
        list.innerHTML += `
      <picture class='pic'>
        <figure>
          <img src=${lists.img} alt="image">
        </figure>
        <figcaption>
          <p>${lists.title}</p>
          <p class='ellipsis'>${lists.desc}</p>
          <p>${lists.techno}</p>
        </figcaption>
      </picture>
    `;
    });
}

// Afficher tous les articles immédiatement
displayArticles();
