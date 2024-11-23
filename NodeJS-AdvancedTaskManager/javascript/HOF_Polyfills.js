a=[1,2,3,4,5];
// Array.prototype.myFilter = function(callback){
//     var array=this;
//     var result=[];
//     for(var item in array){
//         if(callback(item)){
//             result.push(item);
//         }
//     }
//     return result;
//  }
 
//  var b=a.myFilter((item)=>{
//     if(item%2==0){
//      return item*2;
//     }
//  });
 
//  console.log(b);

Array.prototype.myReduce = function(callback,accumulatorValue){
    var array= this;
    
    console.log(typeof accumulatorValue);
    console.log(accumulatorValue);
    console.log(array);
    for(var i=0;i<this.length;i++){
        //console.log(typeof item+" "+accumulatorValue);
        
        accumulatorValue=callback(accumulatorValue,array[i]);
        // console.log(item+" "+accumulatorValue);
        // console.log();
    }
    return accumulatorValue;
};

var result=a.myReduce((accumulator,item)=>{

    accumulator=accumulator+item;
    return accumulator;
},0);

console.log(result);













 