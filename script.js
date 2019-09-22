const doSomeMath = () => {
  let a = 5;
  let b = 4;

  const multiply = () => {
    var result = a * b;
    return result;
  }

  return multiply;
}

let theResult = doSomeMath();
console.log('The result: ', theResult());



const giveMeEms = pixels => {
  let baseValue = 16;

  const doTheMath = () => {
    return pixels/baseValue;
  };

  return doTheMath;
};

let smallSize = giveMeEms(12);
let mediumSize = giveMeEms(18);
let largeSize = giveMeEms(24);
let xlargeSize = giveMeEms(32);

console.log('Small size: ', smallSize());
console.log('Medium size: ', mediumSize());
console.log('Large size: ', largeSize());
console.log('Extra Large size: ', xlargeSize());
