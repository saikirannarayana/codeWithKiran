const person ={
    wife : "namratha",
    husbands:["madhav","sandeep","F4manoj"],
    address:{
        place:"USA",
        phone: 281381,
    },
}

const person2 = JSON.parse(JSON.stringify(person));
// console.log(person);
// console.log(person2);

const MyDeepCopy = function(currentObject){
    var copyObject= {};
    for( var i in currentObject){
        if(typeof i != "object"){
            copyObject[i]=currentObject[i];
        }
        else{
            copyObject[i]=MyDeepCopy(i);
        }
    }
    return copyObject;
};

const person3 = MyDeepCopy(person);
console.log(person3);
if(person2 === (person3)){
    console.log("same");
}
else{
    console.log("different");
}
if(JSON.stringify(person2) === JSON.stringify(person3)){
    console.log("same");
}
else{
    console.log("different");
}
