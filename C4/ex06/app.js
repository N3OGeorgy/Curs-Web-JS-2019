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
  age: 30
},
{
  name: 'Ca',
  surname: 'Cr',
  age: 32
}]
};

skillslength = person.skills.length;
friendslength = person.friends.length;

for (var i = 0; i < skillslength; i++) {
  console.log(person.skills[i]);
}
console.log('---------');
for (var i = 0; i < skillslength; i++) {
  if(person.skills[i].substring(0, 1) == 'j')
  console.log(person.skills[i]);
}
console.log('---------');
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
console.log('---------');
totianii = 0;
for (var i = 0; i < friendslength; i++) {
  totianii += person.friends[i].age;
}
console.log(totianii);
console.log('---------');
totianii2 = person.age;
for (var i = 0; i < friendslength; i++) {
  totianii2 += person.friends[i].age;
}
console.log(totianii2);
console.log('---------');
