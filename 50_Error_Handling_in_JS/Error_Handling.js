
// compile time error

// syntax error
// console.log(1;

// runtime error 
// console.log(x);   //ReferenceError: x is not defined

// how to handle it 

// try{
//     console.log('try block starts here')
//     console.log(x)  // try block me vo code lihkte h jisme error aane ke chances ho
//     // error jha pe hogiuske bad ka code execute nhi hoga
//     console.log('this line will not execute')

//     // a
//     // b
//     // c
// }
// catch(e){
//     console.log('jis case me error aayega usi me execute hoga nhi to nhi hoga')
//     console.log('your error is here: ', e)

//     // define krte h, error ke sath aap kya krna chahte h
//     // retry logic ya
//     // koi fallback mechanism
//     // fallback mechanism is a predefined alternative solution that is triggered when the primary method fails.
//     // logging
//     // custom error throw krna chahte h
//     // A custom error is a user-defined error that provides specific information about an exception


// }
// finally{
//     console.log("i will run everytime")
// }




// let's crate a custom error
// try{
//     //Reference error
//     console.log(x);
// }
// catch(err){
//     throw new Error("Phle declare kro ise phir use krna")
// }

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid JSON");
}