var paragraphElement = document.createElement('p'),
  userAgentString = navigator.userAgent,
  message = 'Browser?';



if(userAgentString.indexOf('Chrome') >= 0){
  message = 'Este Chrome';
}
if(userAgentString.indexOf('Mozilla') == 0){
  message = 'Este Firefox';
}

paragraphElement.innerText = message;
document.body.appendChild(paragraphElement);
console.log(paragraphElement);
setTimeout(function(){
  paragraphElement.remove();
}, 2000);
