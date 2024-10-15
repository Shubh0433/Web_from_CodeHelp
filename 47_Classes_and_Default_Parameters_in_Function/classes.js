// Default parameters
// Same as you know just read the example which can differ so i just write it


// In JavaScript:

// null is a specific value, so when you pass null, it replaces the default and prints null.
// undefined triggers the default value. Since you passed undefined, the default "Rahul" is used instead, so it prints "Rahul".
// In short:

// null overrides the default.
// undefined uses the default value.
function solve(value = "Rahul"){
    console.log(value)
}

solve(null)         // print null
solve(undefined)    // print Rahul

function getMarks(){
    return 100;
}

function marks(name = "Rahul", marks= getMarks()){
    console.log(name, marks);
}

marks();
marks("Harsh")
marks("Harsh", 90)





class Human{
    //properties
    //Inside a class, properties are typically assigned directly using this inside a constructor, or defined without let or const.
    // let and const are used for block-scoped variables, not for class properties.
    // let age = 21;
    // let weight = 60;
    // const name = 'Kuch bhi' 

    age = 21;
    #weight = 60;
    height = 180;

    walking(){
        console.log(`I am walking`);
    }

    running(){
        console.log(`I am running and my weight is ${this.#weight}`);
    }


}

let obj = new Human();

obj.walking();
obj.running();


