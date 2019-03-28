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
    age: 31
  },
  {
    name: 'Ca',
    surname: 'Cr',
    age: 31
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

            let diferentaAni = Math.abs(currentAge - person.friends[j].age);
            switch (true) {
              case diferentaAni > 0:
                console.log('Intre ' + currentPerson + ' si ' + person.friends[j].name + ' este o diferenta de ' + diferentaAni + ((diferentaAni === 1) ? ' an.' : ' ani.'));
                break;
              case diferentaAni == 0:
                console.log('Intre ' + currentPerson + ' si ' + person.friends[j].name + ' nu este o diferenta de ani.');
                break;
              default:
            }
        }
        // Bonus: adauga combinatia dupa ce a fost afisata
        arrayCheck.push(person.friends[j].name + '' + currentPerson);
    }
  }
