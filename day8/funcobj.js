// With the help of function operator  how we make a class ,which will be followed by other objects.
//this has become the template for rest of the objects

// function mobile(name,price,discount,year,disprice){
//     this.name=name;
//     this.price=price;
//     this.discount=discount;
//     this.year=year;
//     this.discountingPrice=disprice;
//     this.display=function(){
//         return this.name;
//     }
//     this.color={
//         color1:"red",
//         color2:"Black",
//         color3:"blue"
        

//     }
// }
// const mobile1=new mobile('iphone',780000 ,'10%',2020,770000);
// const mobile2=new mobile('samsung',880000 ,'16%',2019,85000);
// const mobile3=new mobile('Redmi',80000 ,'5%',2021);
// const mobile4=new mobile('Oppo',180000 ,'14%',2018);

// console.log("data of mobile1:",mobile1)
// console.log("colors in mobile1 :",mobile1.color.color1)
// console.log("data from function:",mobile1.display())
// console.log("data of mobile1:",mobile1.discountingPrice)
// console.log("data of discounting price:",mobile1.discount)
// console.log("data of mobile1:",mobile1.year)

//Here we will make the data of the college student 
function student(name,roll_no,course,grades,position,year){
    this.name=name;
     this.roll_no=roll_no;
    this.course=course;
    this.grades=grades;
    this.position=position;
    this.year=year;
    this.greeting=function(name){
        
        return "all the best",name ;
        

    }

}
let Swati_obj=new student('Swati',312456,'Btech',9.5,"CR1","2nd");
let Shubham_obj=new student('Shubham',312458,'Btech',9.1,"Student","2nd");
let Anuj_obj=new student('Anuj',312457,'Btech',9.0,"Student","2nd");
let Armaan_obj=new student('Armaan',312453,'Btech',8.5,"CR2","2nd");
// console.log("Data in the Swati object.",Swati_obj)
console.log("Data in the Swati object:",Swati_obj.greeting());
// console.log("Data in the Shubham object.",Shubham_obj)
// console.log("Data in the Armaan object.",Armaan_obj)

// function add(a,b)
// {
//    console.log("addition of two",a+b);
// }
// add(3,7)



