// TP - Fruits
document.getElementById('btnAjouter').addEventListener('click', function() {
    const fruitInput = document.getElementById('fruit');
    const fruitName = fruitInput.value.trim();
    if (fruitName === '') {
      alert('Veuillez entrer un fruit !');
      return;
    }
    const tbody = document.getElementById('myTbody');
    const newRow = document.createElement('tr');
    const tdFruit = document.createElement('td');
    tdFruit.textContent = fruitName;
    newRow.appendChild(tdFruit);
    const tdAction = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';

    deleteButton.addEventListener('click', function() {
      tbody.removeChild(newRow);
    });
  
    tdAction.appendChild(deleteButton);
    newRow.appendChild(tdAction);
    
    tbody.appendChild(newRow);
  
    fruitInput.value = '';
  });
  