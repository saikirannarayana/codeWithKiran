var greet = function (age) {
    console.log(this.name + ""+age);
};
const person ={
    name :"sai",
};

// greet.call(person,24);

Function.prototype.myCall = function(currentObject, ...args){
    console.log();
    currentObject.requiredfn = this;
    currentObject.requiredfn(...args);
};

// greet.myCall(person,24);

var greet = function (a,b) {
    console.log(this.name + " "+a+" "+b);
};

// greet.apply(person,[12,5]);


Function.prototype.myApply = function(currentObject, args){
    console.log();
    currentObject.requiredfn = this;
    currentObject.requiredfn(...args);
};

// greet.myApply(person,[12,34]);


Function.prototype.myBind = function(currentObject, ...args){
    //  currentObject.requiredfn = this;
    //  currentObject.requiredfn(...args);
    //  return currentObject.requiredfn;
    let requiredfn = this;
    return function(...args1){
        requiredfn.call(currentObject,...args,...args1);
    }  
};

const ex1 = greet.myBind(person,1,2);
console.log(typeof ex1);
ex1(4,5,6);