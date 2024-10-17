// Object is dynamic in nature
// because we can change it's state and definition on run time

// Object Cloning
// can be achieved by 3 methods
// 1. Spread Operator ...
// 2. Assign method
// 3. iteration

let src = {
    age:18,
    wt:140,
    ht:180
}
console.log(src)
// 1. spread Operator
let dest1 = {...src}
console.log('using spread operator')
console.log(dest1)
dest1.age = 30
console.log(dest1)

// 2. Assign method
let dest2 = Object.assign({}, src)

console.log('using assign method')
console.log(dest2)
dest2.ht = 1000
console.log(dest2)

console.log('we can also add ')

// when i want to clone 2 objects in one obj
let src2 = {
    name:"kuch bhi",
    value:100
}

let dest3 = Object.assign({}, src, src2);
console.log(`dest3 : ${dest3}`)    // dest3 : [object Object]
console.log(dest3)      // { age: 18, wt: 140, ht: 180, name: 'kuch bhi', value: 100 }
// The difference is:

// Template literal (console.log(dest3 : ${dest3})):

// When you try to print dest3 inside a template literal, it converts dest3 to a string like "[object Object]". This happens because objects don't have a meaningful string representation by default.
// Direct console.log(dest3):

// This directly prints the object as it is, showing its properties and values in a readable format.
// In short: Template literals convert objects to strings, whereas console.log() directly shows the object structure.

// 3. Iteration 

let dest4 = {}

// cloning using iteration
for(let key in src){
    let newkey = key;
    let newValue = src[key];

    // insert newKey and value in dest and create a clone
    dest4[newkey] = newValue;
}

console.log('by using iteration')
console.log(src)
console.log(dest4)

dest4.wt = 654
console.log(dest4)

// Garbage Collector in JS
// Garbage Collection (GC) in JavaScript is an automatic memory management process that frees up memory by removing objects and variables that are no longer in use.

// Key Features:
// Automatic: No need for manual memory management.
// Prevents Memory Leaks: Frees unused memory to keep applications efficient.
// Mark-and-Sweep: Common method used to identify and clean up unreachable data.
// In short: GC helps manage memory automatically and efficiently in JavaScript.