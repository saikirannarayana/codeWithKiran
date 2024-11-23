// Question 1
const obj1 = {
    num: 42,
    getNum: function() {
      return this.num;
    }
  };
  
  const getNumBound = obj1.getNum.bind({ num: 100 });
  console.log(getNumBound()); // Expected output: 100
  
  // Question 2
  const obj2 = {
    num: 10,
    add: function(a, b) {
      return this.num + a + b;
    }
  };
  
  const addBound = obj2.add.bind({ num: 20 }, 5);
  console.log(addBound(10)); // Expected output: 35
  
  // Question 3
  function multiply(a, b) {
    return this.num * a * b;
  }
  
  const obj3 = { num: 3 };
  const multiplyBound = multiply.bind(obj3, 2);
  console.log(multiplyBound(4)); // Expected output: 24
  
  // Question 4
  const obj4 = {
    num: 5,
    increment: function() {
      this.num++;
    }
  };
  
  const incrementBound = obj4.increment.bind(obj4);
  incrementBound();
  console.log(obj4.num); // Expected output: 6
  
  // Question 5
  const obj5 = {
    num: 2,
    multiply: function(a) {
      return this.num * a;
    }
  };
  
  const obj6 = { num: 3 };
  const multiplyBound2 = obj5.multiply.bind(obj6, 4);
  console.log(multiplyBound2()); // Expected output: 12
  
  // Question 6
  const obj7 = {
    num: 5,
    getNum: function() {
      return this.num;
    }
  };
  
  const getNumCall = obj7.getNum.call({ num: 10 });
  console.log(getNumCall); // Expected output: 10 (no error)
  
  // Question 7
  function greet(name) {
    return `Hello, ${name}! I am ${this.name}`;
  }
  
  const person = { name: 'Alice' };
  const greetBound = greet.bind(person);
  console.log(greetBound('Bob')); // Expected output: "Hello, Bob! I am Alice"
  
  // Question 8
  const obj8 = {
    num: 5,
    multiply: function(a, b) {
      return this.num * a * b;
    }
  };
  
  const multiplyBound3 = obj8.multiply.bind(obj8, 2);
  console.log(multiplyBound3(3, 4)); // Expected output: 30
  
  // Question 9
  function sum(a, b) {
    return a + b;
  }
  
  const sumBound = sum.bind(null, 10);
  console.log(sumBound(5)); // Expected output: 15
  
  // Question 10
  const obj9 = {
    num: 5,
    multiply: function(a, b) {
      return this.num * a * b;
    }
  };
  
  const obj10 = { num: 10 };
  const multiplyBound4 = obj9.multiply.bind(obj10, 2, 3);
  console.log(multiplyBound4(4)); // Expected output: 240
  
  // Question 11
  const obj11 = {
    num: 2,
    multiply: function(a, b, c) {
      return this.num * a * b * c;
    }
  };
  
  const obj12 = { num: 3 };
  const multiplyBound5 = obj11.multiply.bind(obj12, 4, 5);
  console.log(multiplyBound5(6, 7)); // Expected output: 360
  