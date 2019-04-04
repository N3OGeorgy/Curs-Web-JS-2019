const theNumber = Math.floor(Math.random() * 101);
let gameWon = false;
let gameContinues = true;
let nrIncercari = 0;
const maxIncercari = 10;

function incercari() {
  nrIncercari++;
  if(nrIncercari > maxIncercari){
    gameContinues = false;
  }
  document.getElementById("incercari").style.display = "block";
  document.getElementById("incercari").innerHTML = 'Nr incercari: ' + nrIncercari + ' din ' + maxIncercari;
}

function theGame(numberInput) {
  let rezultatul = theNumber - numberInput;
  if(gameWon == false){
    document.getElementById("result").style.display = "block";
  }
  switch (true) {
    case rezultatul > 0:
      document.getElementById("result").innerHTML = numberInput + ' este prea mic.';
      document.getElementById('Input1').value = '';
    break;
    case rezultatul < 0:
      document.getElementById("result").innerHTML = numberInput + ' este prea mare.';
      document.getElementById('Input1').value = '';
    break;
    case rezultatul == 0:
      document.getElementById("result").style.display = "none";
      document.getElementById("image").style.display = "block";
      document.getElementById("image").classList.add('image');
      document.getElementById("Input1").disabled = true;
      gameWon = true;
    break;
    default:
  }
}

var my_func = function(event) {
    event.preventDefault();
    let numberInput = parseInt(document.getElementById("Input1").value);
    if(numberInput || numberInput == 0){
      incercari();
      if(gameContinues) {
        theGame(numberInput);
      } else {
        document.getElementById("Input1").disabled = true;
        document.getElementById("result").className = "alert alert-danger";
        document.getElementById("result").innerHTML = "Game Over!";
      }
    } else {
      alert('Nu ai introdus un numar corect');
    }

};
var form = document.getElementById("numarul");
form.addEventListener("submit", my_func, true);
document.getElementById("Input1").focus();
