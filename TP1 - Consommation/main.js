// TP1 - Consommation
function conso() {
    const essence =document.getElementById('essence').value;
    const km =document.getElementById('km').value;
    const conso =km*essence/100
    document.getElementById('conso').innerHTML = conso;
    document.getElementById('alert').classList.remove('alert-success');
    document.getElementById('alert').classList.remove('alert-warning');
    document.getElementById('alert').classList.remove('alert-danger');
    if (conso < 6) {
        document.getElementById('alert').classList.add('alert-success')
        document.getElementById('conseil').innerHTML = "Vous respectez l'environnement !"
    }
    else if (6 > conso > 10) {
        document.getElementById('alert').classList.add('alert-warning')
        document.getElementById('conseil').innerHTML = "Il va faire tout noir !"
    }
    else if (conso > 10) {
        document.getElementById('alert').classList.add('alert-danger')
        document.getElementById('conseil').innerHTML = "Jeanne au secours !"
    }
    document.getElementById('btnEnlever').onclick = (event) =>{
        const selecteur = event.target;
        selecteur.remove();
    }
}