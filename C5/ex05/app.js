var person = {
  getName: function(){
    return 'Dragos';
  },
  getAge: function(){
    return 32;
  }
};

var object = {
  elev01: 'xyz',
  elev02: 'abc',
  elev03: 'carol',
  elev04: 'larry',
  elev05: 'a',
  elev06: 'b'
},
  i = 1;
  keyNumber = Object.keys(object).length;

  for (; i <= keyNumber; i++){
    console.log(object['elev0'+i], i);
  }
