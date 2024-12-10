 // Initialiser la carte avec un centre par défaut
 const map = L.map('map').setView([0, 0], 2);

 // Ajouter des tuiles de carte OpenStreetMap
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Fonction pour obtenir la localisation actuelle
 function showPosition(position) {
     const latitude = position.coords.latitude;
     const longitude = position.coords.longitude;

     // Centrer la carte sur la localisation actuelle
     map.setView([latitude, longitude], 13);

     // Ajouter un marqueur pour la localisation actuelle
     L.marker([latitude, longitude]).addTo(map)
         .bindPopup("<b>Ma localisation actuelle</b>")
         .openPopup();
 }

 // Demander la géolocalisation de l'utilisateur
 if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition, () => {
         alert("Impossible d'obtenir votre position.");
     });
 } else {
     alert("La géolocalisation n'est pas supportée par votre navigateur.");
 }