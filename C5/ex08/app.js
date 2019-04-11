var buttonAlert = document.getElementById('clicker');
var buttonElimina = document.getElementById('elimina');

function clickHandler(){
  alert('Ai apasat');
}

function clickRemoval(){
  buttonAlert.removeEventListener('click', clickHandler);
}

buttonAlert.addEventListener('click', clickHandler);
buttonElimina.addEventListener('click', clickRemoval);
