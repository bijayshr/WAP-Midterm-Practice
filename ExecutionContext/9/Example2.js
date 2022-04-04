function outer() {
    let id = 1;

    // creating a function would statically captures
    // the value of 'id' here
    return function inner(){
        console.log(id);
    }
};

const innerFunc = outer();
innerFunc();