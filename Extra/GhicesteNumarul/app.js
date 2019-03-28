const theNumber = Math.floor(Math.random() * 101);
let gameWon = false;
console.log(theNumber);
var my_func = function(event) {
    event.preventDefault();
    let numberInput = parseInt(document.getElementById("Input1").value);
    if(numberInput){
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
          // document.getElementById("result").className = "alert alert-success";
          document.getElementById("result").style.display = "none";
          document.getElementById("image").style.display = "block";
          document.getElementById("image").classList.add('image');
          document.getElementById("result").innerHTML = numberInput + ' este corect!';
          gameWon = true;
        break;
        default:
      }
    } else {
      alert('Nu ai introdus un numar corect');
    }

};
var form = document.getElementById("numarul");
form.addEventListener("submit", my_func, true);
document.getElementById("Input1").focus();
