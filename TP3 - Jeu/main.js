// TP3 - Jeu
let tab1 = Array.from(Array(12).keys());
let tab2 = [...tab1, ...tab1];
tab2.sort(() => Math.random() - 0.5); // Mélanger le tableau

let premier = null;
let second = null;
let board = false;
let paires = 0;
let secondes = 0;
let timer;

const container = document.getElementById('div');
const message = document.getElementById('message');
const secondesDisplay = document.getElementById('secondes');
const restartButton = document.getElementById('restart');

function creerCartes() {
    tab2.forEach((num) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.number = num;
        card.style.backgroundImage = `url('img/${num}.webp')`; // Afficher l'image dès le départ
        card.addEventListener('click', retournerCartes);
        container.appendChild(card);
    });
}

function retournerCartes() {
    if (board || this === premier) return;

    this.classList.add('retournee');
    this.classList.add('green'); // Ajouter la classe .green à la carte cliquée

    if (!premier) {
        premier = this;
        return;
    }

    second = this;
    board = true;

    check();
}

function check() {
    const match = premier.dataset.number === second.dataset.number;

    match ? enleverCartes() : trouverCartes();
}

function enleverCartes() {
    // Rendre les cartes appariées invisibles
    premier.classList.add('matched');
    second.classList.add('matched');
    paires += 1;

    if (paires === tab1.length) {
        clearInterval(timer);
        message.textContent = 'Vous avez gagné !';
    }

    reset();
}

function trouverCartes() {
    setTimeout(() => {
        premier.classList.remove('retournee');
        premier.classList.remove('green'); // Retirer la classe .green
        second.classList.remove('retournee');
        second.classList.remove('green'); // Retirer la classe .green
        reset();
    }, 1000);
}

function reset() {
    [premier, second, board] = [null, null, false];
}

function start() {
    timer = setInterval(() => {
        secondes++;
        secondesDisplay.textContent = secondes;
    }, 1000);
}

function recommencer() {
    container.innerHTML = '';
    tab2.sort(() => Math.random() - 0.5);
    creerCartes();
    message.textContent = '';
    paires = 0;
    secondes = 0;
    secondesDisplay.textContent = secondes;
    clearInterval(timer);
    start();
}

restartButton.addEventListener('click', recommencer);
creerCartes();
start();