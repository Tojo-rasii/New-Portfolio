document.addEventListener('DOMContentLoaded', () => {

    const accueil = document.getElementById('Accueil');
    const navParagraphe = document.querySelectorAll('header section article a');

    // navParagraphe.forEach((value, index) => {
    //     value.addEventListener('click', function () {
    //         navParagraphe.forEach(link => link.classList.remove('active'));

    //         value.classList.add('active');
    //     })



    // })


    const sections = document.querySelectorAll('main section'); // Assurez-vous que vos sections sont identifiées avec la balise <section> et un ID correspondant aux ancres
    // Fonction pour définir le lien actif
    function setActiveAnchor() {
        const hash = window.location.hash;
        navParagraphe.forEach(item => {
            item.classList.remove('active'); // Supprime la classe active de tous les liens
            if (item.getAttribute('href') === hash) {
                item.classList.add('active'); // Ajoute la classe active au lien correspondant
            }

        });
    }
    // Fonction pour détecter la section visible
    function onScroll() {

        let currentSection = null;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
                currentSection = section;
            }
        });
        if (currentSection) {
            const id = currentSection.getAttribute('id');
            navParagraphe.forEach(item => {
                item.classList.remove('active'); // Supprime la classe active de tous les liens
                if (item.getAttribute('href') === `#${id}`) {
                    item.classList.add('active'); // Ajoute la classe active au lien correspondant
                }
            });
        }
    }
    // Définir l'ancre active au chargement de la page
    setActiveAnchor();
    // Mettre à jour l'ancre active au changement de l'URL
    window.addEventListener('hashchange', setActiveAnchor);
    // Activer le lien correspondant lorsque l'utilisateur fait défiler
    window.addEventListener('scroll', onScroll);


    const picture = document.querySelector(".title");

    picture.classList.remove("slide-right");


    window.addEventListener("scroll", function () {


        const rect = picture.getBoundingClientRect();
        const isVisible = rect.bottom < window.innerHeight && rect.bottom >= 0;



        if (isVisible) {
            picture.classList.add("slide-right");

        } else {
            picture.classList.remove("slide-right");
        }


    });


    // document.addEventListener('DOMContentLoaded', () => {
    //     window.scroll(0, 0);

    // })

    const btnScroll = document.querySelector('.btnScroll');
    const btnProject = document.querySelector('.btnProject');


    document.addEventListener('scroll', function () {


        const value = window.scrollY;

        if (value > 0) {
            btnScroll.style.display = "block";
        } else {
            btnScroll.style.display = "none";
        }
    })

    btnScroll.onclick = () => {
        window.scroll(0, 0);
    }


    btnProject.onclick = () => {
        window.location.href = '#Projets'
    }
});