// TP4 - Fruits LS
let fruits = [];

// Charger les fruits depuis le localStorage au démarrage
const chargerFruits = () => {
    const fruitsStockes = localStorage.getItem('fruits');
    if (fruitsStockes) {
        fruits = JSON.parse(fruitsStockes);
        afficher();
    }
};

// Afficher les fruits dans le tableau
const afficher = () => {
    const tbody = document.getElementById("myTbody");
    tbody.innerHTML = '';
    for (let fruit of fruits) {
        const template = document.getElementById("templateTr");
        const clone = template.content.cloneNode(true);
        let td = clone.querySelector("td");
        td.textContent = fruit;
        let btn = clone.querySelector("button");
        btn.onclick = (event) => {
            if (confirm("Voulez-vous enlever : " + fruit + " ?")) {
                const indice = event.target.closest("tr").rowIndex - 1;
                fruits.splice(indice, 1);
                localStorage.setItem('fruits', JSON.stringify(fruits)); // Sauvegarder dans le localStorage
                afficher();
            }
        };
        tbody.appendChild(clone);
    }
};

// Ajouter un fruit
document.getElementById("btnAjouter").onclick = () => {
    let fruit = document.getElementById("fruit").value;
    if (fruit) {
        document.getElementById("fruit").value = ""; // vider input
        fruits.push(fruit);
        localStorage.setItem('fruits', JSON.stringify(fruits)); // Sauvegarder dans le localStorage
        afficher();
    }
};

// Charger les fruits au démarrage de la page
chargerFruits();