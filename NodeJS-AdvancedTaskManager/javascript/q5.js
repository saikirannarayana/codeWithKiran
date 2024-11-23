const print = () =>{
    console.log("Process Completed");
};

const processNumber = (number, print) =>{
    console.log(number*number);
    print();
};

processNumber(10, print);