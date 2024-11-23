const numbers = [5, 10, 15];

const result = numbers.reduce(( accumulator,item)=>{

    return accumulator+item;
},0);

console.log(result);