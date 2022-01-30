// set in javascript
//this will help to store unique values
var myset=new Set()
myset.add(1)
myset.add(2)
myset.add(3)
myset.add(1)
console.log(myset)

var set1=new Set();
const obj1={
    a:2,
    b:3
}
set1.add(obj1);
set1.add(
    {
        a:1,
        b:2
    }
)
set1.add(
    {
        a:1,
        b:2
    }
)
console.log(set1)
// console.log(set1[obj1])
