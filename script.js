// var date = new Date();
// document.body.innerHTML = "<h1>The date today is " + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "</h1>";

// var a = 4;
// var b = 5;
// var sum = a + b;
// document.body.innerHTML = sum;

var pens;
pens = ['red', 'blue', 'green', 'orange'];
// console.log(pens[3]);
console.log('Before: ', pens);
console.log('Array length: ', pens.length);
pens.reverse();
// remove the first value of the array
pens.shift();
// add new value to the front of the array
pens.unshift('purple', 'black');
// remove the last value of the array
pens.pop();
// add new value to the end of the array
pens.push('pink', 'prussian blue');
// remove item from the middle (pos, n)
pens.splice(2, 1);
console.log('After: ', pens);

// make a copy of the array
var newPens = pens.slice();
console.log('New pens: ', newPens);

var result = pens.indexOf('blue', 1);
console.log('The index position is: ', result);
console.log('The value is: ', pens[result]);

var arrayString = pens.join(', ');
console.log('String from array: ', arrayString);
