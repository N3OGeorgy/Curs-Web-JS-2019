var friends = [{
  name: 'Dragos',
  surname: 'Iordache',
  friends: {}
}, {
  name: 'Larry',
  surname: 'Larryson',
  friends: {}
}, {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {}
}, {
  name: 'Carol',
  surname: 'Carolson',
  friends: {}
}, {
  name: 'Andra',
  surname: 'Andrason',
  friends: {}
}]

friendslength = friends.length;
console.log('1--');
for (var i = 0; i < friendslength; i++) {
  console.log(friends[i].surname);
}
console.log('2--');
for (var i = 0; i < friendslength; i++) {
  if(friends[i].name == "Steven"){
    break;
  }
  console.log(friends[i].name + " " + friends[i].surname);
}
console.log('3--');
for (var i = 0; i < friendslength; i++) {
  var string = friends[i].name + friends[i].surname;
  if(string.length <= 13){
    continue;
  }
  console.log(friends[i].name + " " + friends[i].surname);
}
console.log('4--Suplimentar');
var string = '',
  length = friends.length,
  i = 0;

for (i=0; i < length; i++) {
  string += friends[i].name;
  if (i < length - 2) {
    string += ', ';
  } else if (i === length - 2) {
    string += ' si ';
  }
}
string += '. ';
console.log(string);
