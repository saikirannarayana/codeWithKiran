const people = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 34 },
    { name: 'Charlie', age: 23 },
    { name: 'David', age: 40 }
];

const filteredList = people.filter((item)=>{
 return item.age>30;
});

console.log(filteredList);

const nameArray = filteredList.map((item)=>{
    return item.name;
});

console.log(nameArray);

const concatNames = nameArray.reduce((result,item)=>{
   
    return result+item+" ";
},"");

console.log(concatNames);