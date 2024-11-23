const delayedResult = () =>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("Success");
        },2000);
    });
};

const promise = delayedResult();

promise.then((result)=>{

    console.log(result);
}
);