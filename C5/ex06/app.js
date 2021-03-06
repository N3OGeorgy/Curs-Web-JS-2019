var person = {
  getName: function(){
    return 'Dragos';
  },
  getAge: function(){
    return 32;
  },
  getFullYear: function(){
    let d = new Date();
    return d.getFullYear();
  },
  getMyString: function(){
    return 'Ma numesc ' + this.accesorIntern('Name') + ' si am ' + this.accesorIntern('Age') + ' ani.';
  },
  accesorIntern: function(methodSuffix){
    var methodName = 'get' + methodSuffix;
    return person[methodName]();
  }
};

function accessor(methodSuffix){
  var methodName = 'get' + methodSuffix;
  return person[methodName]();
}

console.log(accessor('Name'));
console.log(accessor('Age'));
console.log(accessor('FullYear') - accessor('Age'));
console.log('Ma numesc ' + accessor('Name') + ' si am ' + accessor('Age') + ' ani.');
console.log('---V2---');
console.log(accessor('MyString'));
