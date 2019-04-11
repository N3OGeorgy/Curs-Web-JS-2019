(function() {
  console.log('abc');
})();

(function() {
  console.log('abc2');
}());

(function (window) {
  console.log('Am rulat functia!');
  window.myName = 'Dragos';
})(window);

console.log(myName);
