var dateBuilder = [
  function() {
    return '2019';
  },
  function() {
    return 'Februarie';
  },
  function() {
    return '24';
  }
];

console.log(dateBuilder);

dateBuilder[3] = function() {
  return 'Duminica';
}

console.log(dateBuilder);
console.log(dateBuilder[0]());
console.log('Suntem in ' + dateBuilder[1]() + ' ' + dateBuilder[0]());
console.log('Astazi este ' + dateBuilder[3]() + ', ' + dateBuilder[2]() + ' ' + dateBuilder[1]() + ' ' + dateBuilder[0]());

let data = new Date();
console.log(data);
console.log('Data curenta este: ' + data.getDate() + ' ' + (data.getMonth()+1) + ' ' + data.getFullYear());
