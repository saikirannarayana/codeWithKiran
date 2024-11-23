var a = 10;

function test() {
  console.log(a);  // What is logged here?
  var a = 20;      // `a` is declared and initialized inside the function.
}

test();
