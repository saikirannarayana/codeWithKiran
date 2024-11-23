// 1. Lexical Scope vs Outer Scope
console.log("Question 1: Lexical Scope vs Outer Scope");

function outer() {
  var a = 1;

  function inner() {
    console.log(a);
  }

  inner();
}

outer(); // Output: 1


// 2. Lexical Scope vs Global Scope
console.log("Question 2: Lexical Scope vs Global Scope");

let a = 1;

function foo() {
  console.log(a);
  let a = 2;
}

foo(); // Output: ReferenceError


// 3. Variable Shadowing
console.log("\nQuestion 3: Variable Shadowing");

function outer() {
  let name = 'Outer';

  function first() {
    let name = 'First';

    function second() {
      console.log(name);
    }

    second();
  }

  first();
}

outer(); // Output: First


// 4. Lexical Scope and Return Values
console.log("\nQuestion 4: Lexical Scope and Return Values");

function outer() {
  let outerVar = 'outer';

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

let myFunc = outer();
myFunc(); // Output: outer


// 5. Accessing Outer Variables in Nested Functions
console.log("\nQuestion 5: Accessing Outer Variables in Nested Functions");

function outer() {
  let name = 'Outer';

  function first() {
    let name = 'First';

    function second() {
      console.log(name);
    }

    second();
  }

  first();
}

outer(); // Output: First


// 6. Function Expression and Lexical Scope
console.log("Question 6: Function Expression and Lexical Scope");

let a = 5;

function outer() {
  let a = 10;

  const inner = function() {
    console.log(a);
  };

  inner();
  a = 20;
  inner();
}

outer(); // Output: 10 20


// 7. Hoisting with var, let, and const
console.log("\nQuestion 7: Hoisting with var, let, and const");

function test() {
  console.log(a); // undefined
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError

  var a = 1;
  let b = 2;
  const c = 3;
}

test();


// 8. Mix of var, let, const with Lexical Scope
console.log("\nQuestion 8: Mix of var, let, const with Lexical Scope");

function outer() {
  var x = 10;
  
  if (true) {
    var x = 20;  // var is function-scoped, so it overwrites x in the outer function
    let y = 30;  // let is block-scoped, so y is only available inside this block
    const z = 40;  // const is block-scoped, so z is also only available inside this block

    console.log(x); // 20
    console.log(y); // 30
    console.log(z); // 40
  }

  console.log(x); // 20
  // console.log(y); // ReferenceError
  // console.log(z); // ReferenceError
}

outer(); // Output: 20 30 40 20


// 9. Nested Functions and Variable Scoping
console.log("\nQuestion 9: Nested Functions and Variable Scoping");

function outer() {
  var a = 1;
  let b = 2;
  const c = 3;

  function inner() {
    var a = 4;
    let b = 5;
    const c = 6;

    function innermost() {
      var a = 7;
      let b = 8;
      const c = 9;
      
      console.log(a); // 7
      console.log(b); // 8
      console.log(c); // 9
    }

    innermost();
    console.log(a); // 4
    console.log(b); // 5
    console.log(c); // 6
  }

  inner();
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
}

outer(); // Output: 7 8 9 4 5 6 1 2 3


// 10. Complex Scope and Hoisting Challenge
console.log("\nQuestion 10: Complex Scope and Hoisting Challenge");

function outer() {
  var x = 10;
  
  if (true) {
    var x = 20;  // var is function-scoped, so it overwrites x in the outer function
    let y = 30;  // let is block-scoped, so y is only available inside this block
    const z = 40;  // const is block-scoped, so z is also only available inside this block
    
    console.log(x); // 20
    console.log(y); // 30
    console.log(z); // 40
  }

  console.log(x); // 20
  // console.log(y); // ReferenceError
  // console.log(z); // ReferenceError
}

outer(); // Output: 20 30 40 20
