var dragos = {
  name: 'Dragos',
  surname: 'I',
  friends: {}
};
var larry = {
  name: 'Larry',
  surname: 'L',
  friends: {}
};
var carol = {
  name: 'Carol',
  surname: 'C',
  friends: {}
};
var steven = {
  name: 'Steven',
  surname: 'S',
  friends: {}
};
var anita = {
  name: 'Andra',
  surname: 'A',
  friends: {}
};

dragos.friends.larry = larry;
dragos.friends.steven = anita;
dragos.friends.anita = anita;

console.log(dragos);
console.log(dragos.friends);

larry.friends.dragos = dragos;
steven.friends.dragos = dragos;
anita.friends.dragos = dragos;

console.log(larry);

larry.friends.steven = steven;
anita.friends.steven = steven;
anita.friends.carol = carol;

console.log(anita);

delete dragos.friends.larry;
delete larry.friends.dragos;

console.log(dragos);
console.log(larry.friends.steven.friends.dragos.name + ' ' +larry.friends.steven.friends.dragos.surname);
