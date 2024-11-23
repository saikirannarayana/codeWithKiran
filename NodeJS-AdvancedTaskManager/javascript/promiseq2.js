input1 = "saikiran";
input2 = 123;

const processData = ( input ) =>{

    return new Promise((resolve, reject)=>{

        if(typeof input === 'string'){
        setTimeout(()=>{
            resolve("Data processed");
        },1000);
        }
        else{
            reject("invalid input");
        }

    });
};

const fetcData ={
    network : true;
};