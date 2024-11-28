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
        const newRow = template.content.cloneNode(true);

        // Remplissez les données dans la nouvelle ligne
        newRow.querySelector('td:nth-child(1)').textContent = item.Title; // Titre
        newRow.querySelector('td:nth-child(2)').textContent = item.Year; // Année
        newRow.querySelector('img').setAttribute('src', item.Poster); // Image

        // Ajoutez la nouvelle ligne au tableau
        tbody.appendChild(newRow);
    });
}