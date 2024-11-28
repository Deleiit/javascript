// TP5 - VIP Cocktail
function ajouterPersonne() {
    const prenomInput = document.querySelector('input[aria-label="Prénom"]');
    const nomInput = document.querySelector('input[aria-label="Nom"]');
    
    const prenom = prenomInput.value.trim();
    const nom = nomInput.value.trim();
  
    if (prenom && nom) {
      // Récupérer les personnes existantes du local storage
      let personnes = JSON.parse(localStorage.getItem('personnes')) || [];
      // Ajouter la nouvelle personne avec un état de validation par défaut (false)
      personnes.push({ prenom, nom, valide: false });
      // Enregistrer à nouveau dans le local storage
      localStorage.setItem('personnes', JSON.stringify(personnes));
      // Réinitialiser les champs de saisie
      prenomInput.value = '';
      nomInput.value = '';
      // Mettre à jour l'affichage
      afficherPersonnes();
    }
  }
  
  // Fonction pour afficher les personnes dans le tableau
  function afficherPersonnes() {
    const tbody = document.getElementById('TBody');
    tbody.innerHTML = ''; // Vider le tableau avant de le remplir
  
    const personnes = JSON.parse(localStorage.getItem('personnes')) || [];
    
    personnes.forEach((personne, index) => {
      const tr = document.createElement('tr');
      // Déterminer la classe en fonction de l'état de validation
      tr.className = personne.valide ? 'table-success' : 'table-danger';
  
      // Créer et ajouter les cellules pour prénom et nom
      ['prenom', 'nom'].forEach(key => {
        const cell = document.createElement('td');
        cell.textContent = personne[key];
        tr.appendChild(cell);
      });
  
      // Créer le bouton de suppression
      const deleteButton = document.createElement('button');
      deleteButton.className = 'btn btn-danger';
      deleteButton.onclick = () => supprimerPersonne(index);
      deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
      tr.appendChild(createCell(deleteButton));
  
      // Créer le bouton de validation
      const validateButton = document.createElement('button');
      validateButton.className = 'btn btn-warning';
      validateButton.onclick = () => validerPersonne(index); // Passer l'index
      validateButton.innerHTML = '<i class="fa fa-check"></i>';
      tr.appendChild(createCell(validateButton));
  
      tbody.appendChild(tr);
    });
  }
  
  // Fonction pour valider une personne
  function validerPersonne(index) {
    let personnes = JSON.parse(localStorage.getItem('personnes')) || [];
    // Inverser l'état de validation
    personnes[index].valide = !personnes[index].valide;
    localStorage.setItem('personnes', JSON.stringify(personnes)); // Mettre à jour le local storage
    afficherPersonnes(); // Mettre à jour l'affichage
  }
  
  // Fonction pour supprimer une personne
  function supprimerPersonne(index) {
    let personnes = JSON.parse(localStorage.getItem('personnes')) || [];
    personnes.splice(index, 1); // Supprimer la personne à l'index donné
    localStorage.setItem('personnes', JSON.stringify(personnes)); // Mettre à jour le local storage
    afficherPersonnes(); // Mettre à jour l'affichage
  }
  
  // Afficher les personnes lors du chargement de la page
  window.onload = afficherPersonnes;
  
  // Ajouter un événement au bouton pour ajouter une personne
  document.querySelector('.btn-success').addEventListener('click', ajouterPersonne);
  
  // Fonction utilitaire pour créer une cellule
  function createCell(button) {
    const cell = document.createElement('td');
    cell.appendChild(button);
    return cell;
  }