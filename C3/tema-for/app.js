var arr = [{
    name: 'Larry'
  }, {
    name: 'Stevan'
  }, {
    name: 'Carol'
  }, {
    name: 'Andra'
  }, {
    name: 'Anita'
  }, {
    name: 'Dragos'
  }, {
    name: 'Cosmin'
  }];

var arr = [{
    name: 'Larry'
  }, {
    name: 'Stevan'
  }];

var arr = [{
    name: 'Larry'
  }];
  
  console.log('---------varianta 01------------');
  var string = '',
    i = 0;
    j = 0;
  var result = [];
  for ( ; i < arr.length; i++) {

    if(arr.length == 1) {
        string = 'Sunt ' + arr[i].name + ' si nu am prieteni';
        result.push(string);
        break;
    }
    j = 0;
    string = 'Sunt ' + arr[i].name + ' si am ' + (arr.length - 1) + ((arr.length == 2) ? ' prieten: ' : ' prieteni: ');
  
    for ( ; j < arr.length; j++) {
      var indexModifier = 2;
  
      if (i >= j) {
        indexModifier = 3;
      }
  
      if (i === j) {
        continue;
      }
  
      string += arr[j].name;
  
      if (j >= 0 && j < arr.length - indexModifier) {
        string += ', ';
      } else if (j === arr.length - indexModifier)  {
        string += ' si ';
      }
    }
    result.push(string);
  }
  result.forEach(function(text,xyz) {
    console.log(text + '.');
  })
  console.log('---------varianta 02------------');
  arr.forEach(function(persoana, index) {
    if(arr.length == 1) {
        string = 'Sunt ' + arr[i].name + ' si nu am prieteni';
    } else {
        var string = `Sunt ${persoana.name} si am ${arr.length - 1} ${((arr.length == 2) ? 'prieten:' : 'prieteni:')} `,
        splicedArray = [...arr],
        splicedArrayLength;

        splicedArray.splice(index, 1);
        splicedArrayLength = splicedArray.length;

        splicedArray.forEach(function(pers, innerIndex) {
            string += pers.name; 
            if (innerIndex >= 0 && innerIndex < splicedArrayLength - 2) {
                string += ', ';
            } else if (innerIndex === splicedArrayLength - 2) {
                string += ' si ';
            }
        });
    }
console.log(string + '.');
});
  
var friendsCount = 0,
    friendsNumber = arr.length - 1;
var result = [],
    string = '';
  console.log('---------varianta 03------------');
  for (i = 0; i < arr.length; i++) {
    j = 0;
    if(arr.length == 1) {
        string = 'Sunt ' + arr[i].name + ' si nu am prieteni';
        result.push(string);
        break;
    }
    string = 'Sunt ' + arr[i].name + ' si am ' + (arr.length - 1) + ((arr.length == 2) ? ' prieten: ' : ' prieteni: ');
  
    friendsCount = 0;
  
    for (j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }  
  
      if (friendsCount === 0) {
        string += arr[j].name;
      } else if (friendsCount !== friendsNumber - 1) {
          string +=  ', ' + arr[j].name;
      } else {
         string +=  ' si ' + arr[j].name;
      }
  
      friendsCount++;
    }
    result.push(string);
  }
  result.forEach(function(text,xyz) {
    console.log(text + '.');
  })