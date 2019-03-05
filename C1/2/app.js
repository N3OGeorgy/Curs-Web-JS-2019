var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var inputDebth = document.getElementById('debth');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');


form.addEventListener('submit', function(e) {
  var length = inputLength.value || 0;
  var width = inputWidth.value || 0;
  var debth = inputDebth.value || 0;
  var result = 0;
  var formula = Math.pow((debth / 2), 2) * Math.PI;

  console.log(formula);

  result = length * width * formula;

  elementResult.innerText = result;

  e.preventDefault();
}, false);
