// // Slicing :In slicing the original arry will not get modifed.
// let myarr = [1, 3, 4, 5, 7, 9, 10, 63, 56, 87, 8, 92];
// //Assign it to another variable so to perform slicing function
// let myarr1 = myarr.slice(0, 3);
// myarr1 = myarr.slice(4);
// console.log(myarr1);
// myarr.slice(1, 5);
// console.log(myarr);

// // Splicing it wil modify the original array

// a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// //it will slice
// //here the first index shows the initial value and last index will show the no of elements needed.
// var c = a.splice(1, 5);
// console.log("after splicing", a, c);
// //in splicing (index no,no of elemnets,elements to be pushed)
// d=["Swati","Rohan","Kunal","Manish","Mehul"]
// var e=d.splice(1,3,9,17,42,'a','b')
// console.log(d)


// // it will cange the original array
// console.log("Reverse the array",d.reverse())
// console.log("Original Array",d)
//  squares
var arr=[1,2,3,4,5]
// for (i=0;i<arr.length;i++){
//         arr[i]=arr[i]*arr[i]
//         // i=i+1
       
// }
// console.log(arr)
//   This is forEach loop
//it will not return anything
// arr.forEach((value,index)=>{
//    return arr[index]=value*value

    
// })
// console.log("squares are:",value)

// let name=["Swati","Richa","Sanjana","Preeti","Pragya"]
// name.forEach(n=>{
//     console.log("elements Name is :",n)
// })
// //when there are two arguments
// name.forEach((n,index)=>{
//     console.log("Here we will have element with it's argument:",n,index)

// })

//map
//in map there will a formation of new array no modification in the original array.
 var output=arr.map(num=>{
    return num*num
})
console.log("Squares of the nos:",output)
console.log("Original array:",arr)

arr2=[1,20,48,2,4,6,484,5]
// var iseven=arr2.map(n=>{
//     if(n%2==0)
//     return n
// })
// console.log("Even numbers are:",iseven)
// arr2.forEach(no => {
//     if(no%2==0)
//     console.log(no)
    
// });

//filter function
var evenno=arr2.filter(no=>{
    return no%2==0
})
console.log(evenno)






