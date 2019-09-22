const multiply = (a, b) => {
  let result = a * b;
  console.log(result);
  return result;
};
let multiplied = multiply(3,4);


const findBiggestFraction = (a, b) => {
  let result;
  a > b ? result = ['firstFraction', a] : result = ['secondFraction', b];
  return result;
};

let firstFraction = 3/4;
let secondFraction = 5/7;
let fractionResult = findBiggestFraction(firstFraction, secondFraction);

console.log('First fraction result: ', firstFraction);
console.log('Second fraction result: ', secondFraction);
console.log('Fraction ' + fractionResult[0] + ' with a value of ' + fractionResult[1] + ' is the biggest.');
