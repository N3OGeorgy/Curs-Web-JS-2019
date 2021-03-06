var theNumberList = [];
var theNumber = setTheNumber();

let gameWon = false;
let gameContinues = true;
let nrIncercari = 0;
var maxIncercari = 21;
let theScore = 0;
// console.log(theNumber);

function getRandomNumber() {
  return Math.floor(Math.random() * 11);
}

function setTheNumber(){
  let theRandomNumber = getRandomNumber();
  if(!theNumberList.includes(theRandomNumber)) {
   return theRandomNumber;
 }
 setTheNumber();
}

function calculateScore(){
  let multiplier = 0;
  switch (true) {
    case 1 < maxIncercari && maxIncercari <= 10:
      multiplier = 20;
    break;
    case 11 < maxIncercari && maxIncercari <= 15:
      multiplier = 15;
    break;
    case 16 < maxIncercari && maxIncercari <= 20:
      multiplier = 10;
    break;
    default:
      multiplier = 5;
  }
  theScore += (maxIncercari - nrIncercari) * multiplier;
  console.log(multiplier);
  console.log(nrIncercari);
  document.getElementById('yourscore').innerHTML = 'Scorul tau este: ' + theScore;
}

function incercari() {
  nrIncercari++;
  if(nrIncercari > maxIncercari){
    gameContinues = false;
  }
  document.getElementById('incercari').style.display = "block";
  document.getElementById('incercari').innerHTML = 'Nr incercari: ' + nrIncercari + ' din ' + maxIncercari;
}

function changeMaxIncercari(value){
  maxIncercari = value;
  $("#maxIncercari").click();
  if(document.getElementById('incercari').style.display === 'block'){
    document.getElementById('incercari').innerHTML = 'Nr incercari: ' + nrIncercari + ' din ' + maxIncercari;
  }
}

function gameReset() {
  theNumber = setTheNumber();
  // console.log(theNumber);
  nrIncercari = 0;
  gameWon = false;
  gameContinues = true;
  document.getElementById('input').value = '';
  document.getElementById('input').disabled = false;
  document.getElementById('input').focus();
  document.getElementById('incercari').style.display = "none";
  document.getElementById('image').style.display = "none";
  document.getElementById('gamereset').disabled = true;
  document.getElementById('result').className = "alert alert-success";
  document.getElementById('result').style.display = "none";
}

function theGame(numberInput) {
  let rezultatul = theNumber - numberInput;
  if(gameWon == false){
    document.getElementById('result').style.display = "block";
  }
  switch (true) {
    case rezultatul > 0:
      document.getElementById('result').innerHTML = numberInput + ' este prea mic.';
      document.getElementById('input').value = '';
    break;
    case rezultatul < 0:
      document.getElementById('result').innerHTML = numberInput + ' este prea mare.';
      document.getElementById('input').value = '';
    break;
    case rezultatul == 0:
      document.getElementById('result').style.display = "none";
      document.getElementById('image').style.display = "block";
      document.getElementById('image').classList.add('image');
      document.getElementById('input').disabled = true;
      document.getElementById('gamereset').disabled = false;
      gameWon = true;
      theNumberList.push(theNumber);
      document.getElementById('list').style.display = "block";
      addToList(theNumber);
      calculateScore();
    break;
    default:
  }
}

function addToList(theNumber) {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(theNumber));
  li.setAttribute("class", "list-group-item");
  ul.appendChild(li);
}

var my_func = function(event) {
    event.preventDefault();
    let numberInput = parseInt(document.getElementById('input').value);
    if(numberInput || numberInput == 0){
      incercari();
      if(gameContinues) {
        theGame(numberInput);
      } else {
        document.getElementById('input').disabled = true;
        document.getElementById('result').className = "alert alert-danger";
        document.getElementById('result').innerHTML = "Game Over!";
        document.getElementById('gamereset').disabled = false;
      }
    } else {
      alert('Nu ai introdus un numar corect');
    }
};

var form = document.getElementById("numarul");
form.addEventListener("submit", my_func, true);
document.getElementById("gamereset").addEventListener("click", gameReset);
document.getElementById('input').focus();
document.querySelectorAll('.incercaributtons').forEach(function(button) {
  button.addEventListener('click', function() {
      // console.log(this.id.substr(-2));
   });

})
