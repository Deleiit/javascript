// TP6 - Films (non finalisé)
const url = 'https://www.omdbapi.com/';
document.getElementById('btnSearch').onclick = async () => {
    const clef = 'efdc2275';
    const film = document.getElementById('film').value;
    const url2 = `${url}?apikey=${clef}&s=${film}&type=series`;

    const response = await fetch(url2);
    const data = await response.json();

    const tbody = document.getElementById('myTbody');
    const template = document.getElementById('templateTr');

    // Vider le tableau avant d'ajouter de nouveaux résultats
    tbody.innerHTML = '';

    // Parcourez les résultats et ajoutez-les au tableau
    data.Search.forEach(item => {
        const newRow1 = template.content.cloneNode(true);

        // Remplissez les données dans la nouvelle ligne
        newRow1.querySelector('td:nth-child(1)').textContent = item.Title; // Titre
        newRow1.querySelector('td:nth-child(2)').textContent = item.Year; // Année
        newRow1.querySelector('img').setAttribute('src', item.Poster); // Image

        const btnPlus = newRow1.querySelector('#btnPlus');
            btnPlus.onclick = () => {
                addToWatchList(item);
            };

        // Ajoutez la nouvelle ligne au tableau
        tbody.appendChild(newRow1);

    });
}

function addToWatchList(item) {
    const tbody2 = document.getElementById('myTbody2');
    const template2 = document.getElementById('templateTr2');
    const newRow2 = template2.content.cloneNode(true);

    // Remplissez les données dans la nouvelle ligne
    newRow2.querySelector('td:nth-child(1)').textContent = item.Title; // Titre
    newRow2.querySelector('td:nth-child(2)').textContent = item.Year; // Année
    newRow2.querySelector('td:nth-child(3)').textContent = "N/A"; // Note (vous pouvez mettre une note ici si vous le souhaitez)
    newRow2.querySelector('img').setAttribute('src', item.Poster); // Image

    // Ajoutez un événement au bouton de suppression
    const btnDelete = newRow2.querySelector('.btn-outline-danger');
    btnDelete.onclick = () => {
        tbody2.removeChild(newRow2);
    };

    // Ajoutez la nouvelle ligne au tableau de la liste
    tbody2.appendChild(newRow2);
}