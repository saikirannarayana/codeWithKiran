const func = async() =>{
    return new Promise((resolve,reject)=>{
        // setTimeout(()=>{
        //     resolve("praveen loves sahithi");
        // },100);
        console.log("praveen sahithi");
        reject("praveen loves sahithi");
    });
};

const y= async() =>{
    try{
const x=await func();
    }
    catch(error){
        console.log("fuck off man");
        
console.log(error);
    }

}
y();
console.log("sahithi loves praveen");