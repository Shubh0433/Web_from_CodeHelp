// in built Math Object

console.log(Math.PI)

console.log(Math.max(60,40,654,345,876,105))
console.log(Math.min(60,40,654,345,876,105))

console.log(Math.round(1.6))
console.log(Math.round(1.4))    // round the number based on simple round rule


console.log(Math.floor(1.9))   
console.log(Math.floor(1.2))   //floor will print just the previous integer


console.log(Math.ceil(1.9))
console.log(Math.ceil(1.3))   // ceil will print jsut the next integer


console.log(Math.abs(-5))   // convert the number in positve number



// Date

let curr = new Date();
console.log(curr)

let date = new Date('June 20 1998 07:15');

let newDate = new Date(1998, 5, 20, 7);

console.log(newDate)

newDate.setFullYear(2001)

console.log(newDate)