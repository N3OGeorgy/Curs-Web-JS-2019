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
  var arrayCheck = [];
  for(let friendslength = person.friends.length, i = 0; i < friendslength ; i++){
      let currentPerson = person.friends[i].name;
      let currentAge = person.friends[i].age;
    for(let j = 0 ; j < friendslength ; j++){
        // Bonus: ignora combinatiile ce deja au fost afisate
        if(i !== j) {
            if(arrayCheck.find(o => o === (currentPerson + '' + person.friends[j].name))){
                continue;
            }
            console.log('Intre ' + currentPerson + ' si ' + person.friends[j].name + ' este o diferenta de ' + Math.abs(currentAge - person.friends[j].age) + ' ani.');
        }
        // Bonus: adauga combinatia dupa ce a fost afisata
        arrayCheck.push(person.friends[j].name + '' + currentPerson);
    }
  }