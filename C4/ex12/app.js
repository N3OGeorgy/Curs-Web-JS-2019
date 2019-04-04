var globalVar = 'Context global';

function contextText() {
  var localVar = 'Context local';

  console.log(globalVar);
  console.log(localVar);
  console.log(noVar);
}

contextText();
