var person = {
  name: 'Drg',
  surname: 'I',
  age: 32,
  petOwner: false,
  skills: ['html', 'js', 'css', 'c++', 'node', 'jquery'],
  friends: [{
    name: 'La',
    surname: 'Ly',
    age: 30
  },
{
  name: 'St',
  surname: 'Se',
  age: 32
},
{
  name: 'Ca',
  surname: 'Cr',
  age: 37
}]
};

skillslength = person.skills.length;
friendslength = person.friends.length;
console.log('1---------');
for (var i = 0; i < skillslength; i++) {
  console.log(person.skills[i]);
}
console.log('2---------');
for (var i = 0; i < skillslength; i++) {
  if(person.skills[i].substring(0, 1) == 'j')
  console.log(person.skills[i]);
}
console.log('3---------');
string1 = '';
for (var i = 0; i < friendslength; i++) {
  if(i !== friendslength-1){
    var x = ', ';
  } else {
    var x = '.'
  }
  string1 += person.friends[i].name + " " + person.friends[i].surname + x;
}
console.log(string1);
console.log('4---------');
totianii = 0;
for (var i = 0; i < friendslength; i++) {
  totianii += person.friends[i].age;
}
console.log(totianii);
console.log('5---------');
totianii2 = person.age;
for (var i = 0; i < friendslength; i++) {
  totianii2 += person.friends[i].age;
}
console.log(totianii2);
console.log('6+7---------');
var diferentaani = person.age;
for (var i = 0; i < friendslength; i++) {
  var diferenta = diferentaani - person.friends[i].age;
  switch (true) {
    case diferenta < 0:
      console.log(person.name + " este mai mic decat " + person.friends[i].name + "," + " au o diferenta de " +Math.abs(diferenta) + " ani.");
      break;
    case diferenta > 0:
      console.log(person.name + " este mai mare decat " + person.friends[i].name + "," + " au o diferenta de " + diferenta + " ani.");
      break;
    case diferenta == 0:
      console.log(person.name + " si " + person.friends[i].name + " au aceeasi varsta");
      break;
    default:
  }
}
console.log('8---------');
var reverse = person.skills.reverse();
for (var i = 0; i < skillslength; i++) {
  console.log(reverse[i]);
}
