const func = () =>{
    setTimeout(()=>{ console.log("Message displayed");},2000);
};


const delayedMessage = ( string, func) =>{

    console.log(string);
    func();
};

delayedMessage("kiran", func);