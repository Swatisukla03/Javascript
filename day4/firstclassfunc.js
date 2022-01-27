// Welcome to 1st Class function
//In 1st class function we just assign the function into a variable so that we can use it in other function.
//Best practice is to use const for making func.
const foo = function () {
  console.log("assigning into a new variable");
};
foo();

let greeting = function (name) {
  console.log("Hello" + name);
};
greeting("  Swati");

let addition = function (a, b) {
  c = a + b;
  return c;
};
add = addition(3, 6);
console.log("Addition of inputed arguments :", add);
//Assigning the function as a parameters in another function.

function returnHello(){
    return "Hello,"
}
// Here we are passing a function itself as an argument

function greeting2(greet,name){
    console.log(greet+name)
}
greeting2(returnHello(), 'sWATI')
//Here multiply function is fuisrt assign to a const variable

const mul=function(a,b){
    return a*b;

}
// Now another functu=ion is calling the mul function as an arguments
function callmul(value , statement){
    console.log(value, statement)

}
// Here we are invoking the recent function itself that has function as it's parameters
callmul(mul(3,4),"this is the multiply")  //here mul is callback function

// Concatenate two strings with the help of first function

const string1=function(){
    return "Swati"
}
function concat(String1 ,String2){
    console.log(String1 + " "+String2);
}
concat(string1(),"Sukla")   //here string1 is the callback function

//arrow function
let hellogreet=()=>{
    return "Hello Everyone To greet The ARROW FUNCTION"

}
function arrowgreet(statement,name){
    console.log(statement + " "+name);
}
arrowgreet(hellogreet()," made by -Swati");

// var greet=hellogreet()
// console.log(greet)
//Higher order function
function sayHello1(){
    return function(){
        console.log("Hello!")
    }
}
 var b=sayHello1()()
//  console.log(b)
function add(a,b){
    return a+b;
}
function highOrder(){
    console.log("This is higher order")
    return  function( ){

    };
}
highOrder()


// function fetchApi(){
//       setTimeout();
//       return "this is api data";
// }
// fetchApi()



