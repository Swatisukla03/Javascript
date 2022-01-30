// Here we will see the inheritance
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    getinfo(){
        return "this is an inherited class";

    }
}
class subadmin extends user{
    getadminInfo(){
        return "I am subadmin";
    }
}
const obj1=new subadmin();
//this is fetched from the child
console.log(obj1.getadminInfo())
//this is fetched from the parented [inherited]
console.log(obj1.getinfo())