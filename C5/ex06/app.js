var person = {
  getName: function(){
    return 'Dragos';
  },
  getAge: function(){
    return 32;
  }
};

function accessor(methodSuffix){
  var methodName = 'get' + methodSuffix;
  return person[methodName]();
}

console.log(accessor('Name'));
