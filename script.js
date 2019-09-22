const MYCONSTANT = 5;
MYCONSTANT = 3; // TypeError

function logScope() {
  let localVar = 2;
  if (localVar) {
    // block scope
    let localVar = "I'm different!";
    console.log('nested localVar: ', localVar); // I'm different!
  }

  console.log('logScope localVar: ', localVar); // 2
}

logScope();
