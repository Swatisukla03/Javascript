// Higher Order Function 
// Here the function returns another function 
function sayHi(name){
    console.log("Normal console--> HI")
    console.log("HI ,"+name)
    console.log("--------------------------------------------------------")
    return function(name1){
        console.log("Here the function returns another function")
        console.log("Hi ,"+name1)
    }
}
const highfunc= sayHi("Swati")("Richa");
console.log(highfunc);
sayHi();



