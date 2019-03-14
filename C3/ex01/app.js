console.log('------------------------');
var linkString1 = "Somefunction($#$#&44**&=&=Params&topic=api&query=value&rar=&x=12)";
var linkString = "q=URLUtils.searchParams&topic=api&rar=";
var searchParams = new URLSearchParams(linkString);

//Iterate the search parameters.
for (let p of searchParams) {
  console.log(p);
}

var myvar = searchParams.get('rar');
searchParams.set('rar', 'xyz');
var linkStringEnd = searchParams.toString();
console.log(linkString);
console.log(decodeURIComponent(linkStringEnd));
