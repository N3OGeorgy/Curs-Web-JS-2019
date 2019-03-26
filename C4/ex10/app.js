var person = {
  name: 'Drg',
  surname: 'I',
  age: 32,
  petOwner: false,
  skills: ['html', 'js', 'css', 'java', 'c++', 'node', 'jquery'],
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

console.log('1---');
person.skills.forEach(function(text,xyz) {
  console.log(text);
})
console.log('2---');
person.skills.forEach(function(text,xyz) {
  if(text.substring(0, 1) == 'j')
  console.log(text);
})
console.log('3---');
string = 'Prietenii mei se numesc ';
person.friends.forEach(function(obj,xyz) {
  if(xyz === person.friends.length-2){
      string += obj.name + ' si ';
  } else if (xyz < person.friends.length-1){
      string += obj.name + ', ';
  } else {
    string += obj.name;
  }
})
console.log(string);
console.log('4---');
var maxHP = 0;
person.friends.forEach(function(obj,xyz) {
  maxHP += obj.age;
})
console.log(maxHP);
console.log('5---');
bigsum = 0;
currentYear = 2019;
person.friends.forEach(function(obj,xyz) {
  age = obj.age;
  bigsum += currentYear - obj.age;
})
console.log(bigsum);
console.log('6+7---');
var diferentaani = person.age;
person.friends.forEach(function(obj,xyz) {
  var diferenta = diferentaani - obj.age;
  switch (true) {
    case diferenta < 0:
      console.log(person.name + " este mai mic decat " + obj.name + "," + " au o diferenta de " +Math.abs(diferenta) + " ani.");
      break;
    case diferenta > 0:
      console.log(person.name + " este mai mare decat " + obj.name + "," + " au o diferenta de " + diferenta + " ani.");
      break;
    case diferenta == 0:
      console.log(person.name + " si " + obj.name + " au aceeasi varsta.");
      break;
    default:
  }
})
console.log('---The End---');
