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

class employee{
    constructor(giveNames,givenExperience,givenDivision){
        this.name=giveNames;
        this.experience=givenExperience;
        this.division=givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }
}
class programmer extends employee{
    constructor(giveNames,givenExperience,givenDivision,language,github){
        super(giveNames,givenExperience,givenDivision);
        this.language=language;
        this.github=github;
    }
    favoriteLanguage(){
        if(this.language=="python"){
        return "python";
        }
        else{
            return "Javascript"
        }

   
    }
    multiply(a,b){
        return a*b;
    }
}
// var emp1=new employee("Shweta",2,"Manager")
// console.log(emp1.experience)
// console.log(emp1.slogan())
// console.log(emp1.division)
//applying Inheritance
// emp1=new programmer("Swati",3,"Lays","Go","Swati03")
// console.log(emp1);
// console.log("function of the emp1:",emp1.favoriteLanguage())
// console.log("multiplication :",emp1.multiply(4,5))

class car{
    constructor(brand){
        this.car=brand;
    }
    present(){
        return "car name is"+this.car;
    }
}
class modelName extends car{
    constructor(brand,model){
        super(brand)
        this.model=model; 
    }
    display(){
        return this.present()+"car"+this.model;
    }
}