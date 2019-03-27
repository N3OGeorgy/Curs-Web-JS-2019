var myObject = {
    key1: 'Key 1 value',
    key2: 'Key 2 value',
    key3: 'Key 3 value',
    key4: true,
    key5: [1,2,3],
}

Object.keys(myObject).forEach(function(keyName) {
    console.log(myObject[keyName]);
});
console.log(Object.keys(myObject));