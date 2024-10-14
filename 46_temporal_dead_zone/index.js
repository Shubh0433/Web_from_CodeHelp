// temporal dead zone
// in case of let and const if we're using the variable before declaring 
// then we can't access to it and it will give error
// called temporal dead zone

console.log(temporalDeadZone);   // ERROR
// console.log("ye area dead zone me aayegi line not 6 and 7");
let temporalDeadZone = "dead zone";
console.log(temporalDeadZone)



console.log(temporal);  // in case of var it will be undefined
var temporal = 100;
console.log(temporal);



// global scope   - Can access anywhere
var age = 15;

console.log(age);

function sayHello(){
    var yourName = "Kuch bhi";
    console.log(yourName);
}
sayHello();

// console.log(yourName)  // Not accessible whether it is var or let

// ---> var is global scoped, function scoped but not block scoped
// means in the below example we are creating an var variable and 
// we can access it outside the block 
{
    var height = 180;
}

console.log(`we can access height easily: ${height}`);   // we can access it easily


// let and const are blocked scope so we can't access it outside the block

{
    let width = 180;
}

// console.log(`we can't access height easily: ${width}`); 
