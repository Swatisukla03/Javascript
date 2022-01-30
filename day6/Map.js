//map vs Map()
// const map1=new Map();
// map1.set("name","Swati")
// map1.set("Roll-no",203024)
// map1.set("course","btech")
// map1.set("address","")
// console.log(map1) // this will print all the elements with their key value pair
// console.log(map1.get("name"))
// console.log(map1.get("bolly"))
// console.log(map1.get("address "))

//in map we can create objects with tthiis help
//map will modify the original array 
var mapobj=new Map()
mapobj.set(1,"ramesh")
mapobj.set(2,"Shubham")
mapobj.set(3,"Deepak")
mapobj.set(4,"Kritika")
mapobj.set(5,"Fatima")

console.log(mapobj)
//for printing all the keys
for(let key of mapobj.keys()){
    
 
    console.log("keys are :",key);
}
    //for printing all the values related to the keys

    for(let value of mapobj.values()){
        console.log("values are :",value)
    }

for(let[key,value] of mapobj){
    console.log(key,value)
}
mapobj.delete(2)

console.log("after deleting :",mapobj)

console.log("size of the map :",mapobj.size);
console.log("array has 2",mapobj.has(3))