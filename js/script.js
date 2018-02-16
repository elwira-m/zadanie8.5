//script.js

//first version

/*var a = 4,
	h = 3,
	triangleArea;
	
triangleArea = a*h/2;
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);*/

//second version

var triangleBase = prompt ( 'Enter base of triangle' ),
    triangleHeight = prompt ( 'Enter height of triangle' ),
    triangleArea = triangleBase*triangleHeight/2;

console.log('Triangle field is equal to: ' + triangleArea);
