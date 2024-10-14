// for loop
for (let i = 0; i < 5; i++) {
  console.log("Jai Shree Ram");
}

// while loop
let i = 0;
while (i < 5) {
  console.log("Jai Shree Ram");
  i++;
}

// do-while 
// Cannot redeclare block-scoped variable 'i'
// let i = 0;
i = 0;
do{
    console.log('Mere Ram');
    i++;
}while(i < 5);

// Strings

let string1 = "Bholenath ji";
console.log(typeof(string1));

let string2 = 'Bholenath ji';
console.log(typeof(string2));

let string3 = `Bholenath
ji`;
console.log(typeof(string3));


let string4 = new String("Shubham");
console.log(string4);

// In JavaScript, the difference between `let str = "Bhole";` and `let str = new String("Bhole");` lies in the type of the value being created:

// 1. **`let str = "Bhole";`**:
//    - This creates a **primitive string**.
//    - Primitives are lightweight and are stored directly in memory.
//    - `typeof str` will return `"string"`.

// 2. **`let str = new String("Bhole");`**:
//    - This creates a **String object**.
//    - Objects are more complex and come with additional properties and methods.
//    - `typeof str` will return `"object"`.

// ### Key Differences:
// - **Primitive vs Object**: The first one is a simple string, while the second one creates an object.
// - **Memory usage**: The object version takes up more memory than the primitive string.
// - **Comparisons**: If you compare two string objects using `==` or `===`, they won’t be considered equal unless they reference the same object. But primitive strings with the same value will be considered equal.

// For most cases, it's recommended to use the primitive string (`let str = "Bhole";`) for better performance and simplicity.


let op1 = 'English ';
let op2 = 'Hindi ';
let ans = op1 + op2;
// concatination
console.log(ans);

console.log(`op1 + op2`); 

console.log(`${op1} + ${op2}`); // see the difference between them
console.log(`${op1}${op2}`);


let len = 'Strings';
console.log(len.length);  // 7
// We use str.length instead of str.length() because length is a property, not a method. It directly gives the number of characters in the string, so there's no need for parentheses like a function call.

// A property is a value that an object holds, like str.length (the number of characters in a string).
// A method is a function associated with an object that performs an action, like str.toUpperCase() (converts the string to uppercase).
// In short: properties store values, methods perform actions.

console.log(op1.toUpperCase);  // It will convert to upper case bcz it is a method
console.log(op1.toUpperCase());

console.log((op2.toLowerCase()));

let str = "Shubham";
console.log(str.substring(2)); // ubham
console.log(str.substring(2,4)); // ub    bcz it will not consider endig index so only ub

// let word = "Hare Krishna \Hare \Rama";
// let words = word.split('\');  //unterminated string literal

let word = "Hare Krishna Hare Rama";
let words = word.split(' ');  
console.log(words);
console.log(words.join(','));




