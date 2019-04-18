(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var showButton = document.querySelector('#showButton'),
    toggleEventButton = document.querySelector('#toggleEventButton'),
    eventBound = true;

    function showAlert() {
      alert('Butonul!');
    }

    function domMessage(mesaj){
      var element = document.createElement('p');
      element.innerText = mesaj;
      element.setAttribute("style", "display:inline;");
      document.body.appendChild(element);
    }

    showButton.addEventListener('click', showAlert);

    toggleEventButton.addEventListener('click', function(){
      if(eventBound) {
        showButton.removeEventListener('click', showAlert);
        toggleEventButton.innerText = "Porneste!";
        domMessage("Alerta nu va fi afisata");
        eventBound = false;
      } else {
        showButton.addEventListener('click', showAlert);
        toggleEventButton.innerText = "Opreste!";
        domMessage("Alerta va fi afisata");
        eventBound = true;
      }
    });
  });
})();
