const users = [
    {firstName: 'Akshay', lastName:'Saini', age:26},
    {firstName: 'Akshay', lastName:'Kumar', age:75},
    {firstName: 'Shah Rukh', lastName:'Khan', age:50},
    {firstName: 'Amir', lastName:'Khan', age:26},
];

//list of full names

const fullNames = users.map(name=>name.firstName + " " + name.lastName);

document.write(fullNames);

// map, reduce, or filter
// find out, how many users has particular age and how many people are with the same age
// {26:2, 75:1, 50:1}

const filteredUserByAge = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.dir(filteredUserByAge);

//find out firstname of all the user whose age is less than 30

const userFirstNameAgeLessThan30 = users.filter(user => user.age < 30).map(user=>user.firstName);

console.log(userFirstNameAgeLessThan30);




