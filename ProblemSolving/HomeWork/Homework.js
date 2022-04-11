/**
 *
 * Create a function using function declaration named sum with one parameter of Array type,
 * the returned result is the sum of all elements which are greater than 20.
 */

function sum(arr){
    return arr.filter(a=>a>20).reduce((acc, curr)=>acc + curr, 0);
}

const sample = [10, 20, 30, 40, 50, 60];
console.log(sum(sample));


/**
 * Create a function using function expression named getNewArray with one parameter of String Array,
 * return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.
 *
 */

const getNewArray = function(arr){
    return arr.filter(a=>a.length >=5 && a.includes(a));
}

const sampleNames = ["Amanda", "Alice", "Bob", "John", "Michael", "Lazayy", "Cat", "Dog"];

console.log(getNewArray(sampleNames));



