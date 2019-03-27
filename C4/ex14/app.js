var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987, 
  pets: [{
    name: 'Twix',
    species: 'papagal',
    age: 4
  }, {
    name: 'Mars',
    species: 'caine',
    age: 2, 
  }, {
    name: 'Bounty',
    species: 'hamster',
    age: 4
  }, {
    name: 'Lion',
    species: 'pisica',
    age: 10
  }]
};

console.log('1---');
person.pets.forEach(function(text,xyz) {
  console.log(text.name);
})
console.log('2---');
var suma = 0;
for(let petslength = person.pets.length, i = 0; i < petslength ; i++){
  suma += person.pets[i].age;
}
console.log(suma + ' ani.');
console.log('3---');
person.pets.forEach(function(text,xyz) {
  console.log(text.name + ' este ' + text.species + ' si are ' + text.age + ' ani.');
})
console.log('4---');
var currentTime = new Date();
var ani = currentTime.getFullYear() - person.birthYear;
console.log(ani);
for(let petslength = person.pets.length, i = 0; i < petslength ; i++){
  console.log('Intre ' + person.firstName + ' si ' + person.pets[i].name + ' este o diferenta de ' + Math.abs(ani - person.pets[i].age) + ' ani.');
}