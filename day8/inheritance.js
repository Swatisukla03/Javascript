// Here we will see the inheritance
// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     getinfo(){
//         return "this is an inherited class";

//     }
// }
// class subadmin extends user{
//     getadminInfo(){
//         return "I am subadmin";
//     }
// }
// const obj1=new subadmin();
// //this is fetched from the child
// console.log(obj1.getadminInfo())
// //this is fetched from the parented [inherited]
// console.log(obj1.getinfo())

// class employee{
//     constructor(giveNames,givenExperience,givenDivision){
//         this.name=giveNames;
//         this.experience=givenExperience;
//         this.division=givenDivision;
//     }
//     slogan(){
//         return `I am ${this.name} and this company is the best`;
//     }
// }
// class programmer extends employee{
//     constructor(giveNames,givenExperience,givenDivision,language,github){
//         super(giveNames,givenExperience,givenDivision);
//         this.language=language;
//         this.github=github;
//     }
//     favoriteLanguage(){
//         if(this.language=="python"){
//         return "python";
//         }
//         else{
//             return "Javascript"
//         }

   
//     }
//     multiply(a,b){
//         return a*b;
//     }
// }
// // var emp1=new employee("Shweta",2,"Manager")
// // console.log(emp1.experience)
// // console.log(emp1.slogan())
// // console.log(emp1.division)
// //applying Inheritance
// // emp1=new programmer("Swati",3,"Lays","Go","Swati03")
// // console.log(emp1);
// // console.log("function of the emp1:",emp1.favoriteLanguage())
// // console.log("multiplication :",emp1.multiply(4,5))

// //-------------------------------------------------------------------------
// //Here wea re making the base class 
// class car{
//     constructor(brand){
//         this.car=brand;
//     }
//     //function inside it
//     present(){
//         return "car name is"+this.car;
//     }
// }
// //this will be the inherited class from the base class
// class modelName extends car{
//     constructor(brand,model){
//         super(brand)
//         this.model=model; 
//     }
//     //display something
//     display(){
//         return this.present()+"car"+this.model;
//     }
// }
class student{
    constructor(name,rollNo,course){
        this.name=name;
        this.rollNo=rollNo;
        this.course=course;
        // this.CourseYear=CourseYear;
    }
    greeting(){
        return "Welcome to  "+this.course+"  ,we hope u will enjoy"+this.name+" !";
    }
    // TotalFees(){
    //     return "Total fees will be :"

    // }
}
class courseWise extends student{
    //this part of the code will get displayed.
    constructor(name,rollNo,course,TotalFees){
        super(name,rollNo,course,TotalFees);
        this.TotalFees=TotalFees;
    }
    courseWiseSub(){
        if(this.course!="Btech"){
            return "Discounted price of this Non engineering be :"+(this.TotalFees-this.TotalFees*0.1);
        }
        else{
            return "Discounted price will be :"+(this.TotalFees-this.TotalFees*0.05);
        }
    }
    display(){
        return this.greeting();
    }
    // discountPrice(){
    //     return "Discounted price will be :"+(this.TotalFees-this.TotalFees*0.1);
    // }
    



}
student1=new courseWise("Swati",203030,"Btech",920000);
student2=new courseWise("Rakesh",213456,"Bca",834000)
console.log(student1);
console.log(student2);
console.log(student2.courseWiseSub())
console.log(student1.courseWiseSub())
// console.log(student1.discountPrice())
console.log(student2.greeting())
