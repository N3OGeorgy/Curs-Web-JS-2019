console.log('ceva');
var person = {
  name: 'Dr',
  surname: 'I',
  age: 32,
  petOwner: false,
  skills: ['html', 'js', 'css'],
  friends: [{
    name: 'L',
    surname: 'L',
    age: 30
  },
{
  name: 'S',
  surname: 'S',
  age: 30
},
{
  name: 'C',
  surname: 'C',
  age: 32
}]
};

console.log(person.friends);
console.log('My name is: ' + person.name + ' si stiu ' + person.skills['0'] + ' si ' + person.skills['2']);

var string = '';
var count = person.friends.length;

var i = 0;
person.friends.forEach(function(element){
  i++;
  var end;
  if(count-1 == i)
    end = ' si ';
    else
    end = ', ';
  if(count==i)
  string += element.name;
  else
  string += element.name + end;
});

console.log('Am ' + person.friends.length + ' prieteni: ' + string);
