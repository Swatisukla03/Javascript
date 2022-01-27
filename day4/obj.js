// Object in Javascript
const obj1={
    photo:URL,
    name:"Pocco",
    rating:4.6,
    price:5000,
    camera:"13MPx"

    
}
const obj2={
    photo:URL,
    name:"Realme",
    rating:4.8,
    price:7000,
    camera:"15MPx"
}
for(const prop in obj2){
    console.log(prop," ",obj1[prop] ,obj2[prop])
}
for(const prop in obj2){
    console.log(prop)
}
