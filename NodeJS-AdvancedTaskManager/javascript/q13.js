function outer() {
    var x = 5;
    
    function inner() {
      console.log(x);
    }
    
    inner();
    var x = 10;
    inner();
  }
  
  outer();
  