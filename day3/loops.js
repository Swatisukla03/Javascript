// // Loops in Javascript
// for(let i=1;i<=10;i++){
//     console.log("number are ",i)
// }
// var j=1
// while(j<10){
//     console.log("j value is ",j)
// //     j--;
// }
var d=5;
while(d<0){
    console.log("initial iteration")

}
do{
    console.log("initial iteration")
    d--;
}while(d<0)

// break and continue
text=""
for(let i=0;i<10;i++){
    if(i===3){
        continue;
    }
    text+="The number is"+i +"<br>";
}
 
