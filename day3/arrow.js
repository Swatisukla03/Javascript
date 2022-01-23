//  Function to make
function mul10(a){
    
    return a*10;
}
var a=mul10(5)
console.log("Output is ",a)
// Arrow Function// 
var givmul10=(a)=>{
    return a*10
}

console.log("The value of Arrow function ",givmul10(3))
var sum=(d)=>{
    return d+10;
}
console.log("The value of the sum function",sum(2))

var sub=(e)=>{
    return e-12;
}
console.log("The value after substraction",sub(4))

// Two arguments

var swap=(a,b)=>{
    let temp=0;
    temp=a;
    a=b;
    b=temp;
    console.log("The valus of a :",a)
    console.log("The value of b:",b)
}
swap(2,3)