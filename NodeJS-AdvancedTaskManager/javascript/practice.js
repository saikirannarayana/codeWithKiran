let arr= [1,2,3,4,5];

const myMapArray = (arr) =>{
    let b = arr.map((item)=>{
         return item*item;
    });
    return b;
};

console.log(myMapArray(arr));