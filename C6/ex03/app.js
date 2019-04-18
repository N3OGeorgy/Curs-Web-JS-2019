(function() {
  function domLog(mesaj){
    var element = document.createElement('p');
    element.innerText = mesaj;
    element.setAttribute("style", "display:inline;");
    document.body.appendChild(element);
  }

  document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('button');
    var stage = document.querySelector('.stage');

    button.addEventListener('click', function(){
      alert('click');
    });

    stage.addEventListener('mouseover', function(){
      domLog("Mouse!");
    });
    stage.addEventListener('mouseout', function(){
      domLog("No Mouse!");
    });
  });
})();
