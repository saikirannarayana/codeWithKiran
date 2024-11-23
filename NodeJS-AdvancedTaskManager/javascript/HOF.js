a=[1,2,4,5,6];

var result=a.map((item,index,array)=>{
    return item*item;
});

console.log(result);


var result=a.filter((item,index,array)=>{
   if(item%2==0){
    return item*2;
   }
});

console.log(result);


var result=a.reduce((accumulator,item)=>{

    accumulator=accumulator+item;
    return accumulator;
},0);

console.log(result);

