// function definition
function myName(){
    console.log("Shubham Singh");
    
}

// function use - function call
myName();
console.log(myName()); // shubham singh undefined
console.log(myName());

// First, myName() prints "Shubham Singh".
// Then, console.log() prints the return value of myName(). Since myName() has no return statement, it returns undefined by default.

console.log(myName);  // [Function: myName]

console.log(5 + "3");
console.log("3" + 5);
console.log(5 + "3" + 5);
console.log("3" + 5 + "3");

// function expression
let getMultiplication = function(a, b){
    return a * b;
}
console.log(getMultiplication)
console.log(getMultiplication(2,10));

let addition = function(a, b){
    console.log(a+b)
}
console.log(addition)   // [Function: addition]
console.log(addition(2,10));  // 12 undefined 
// undefined bcz we are not storing any value in variable


// arrow function

let getExp = (a, b)=>{
    return a ** b;
}

console.log(getExp);
console.log(getExp(2, 10));