var Person={
    FirstName:"",
    LastName:"",
    age:"",
   
    set setFirstName(xName){
        this.FirstName=xName;
    },
    get getFirstName(){
        return  this.FirstName;
    },
    set setLastName(xName){
        this.LastName=xName;
    },
    get getLastName(){
        return  this.LastName;
    },
    fullname:function(){
        return console.log(this.FirstName+"  "+this.LastName);
    }
}
var personObj=Object.create(Person, {
    job:{
        type:"admin"
    }
});
Person.setFirstName="Ali";
Person.setLastName="Muhammed";

console.log(Person.getFirstName+" "+Person.getLastName);
personObj.fullname();

///window.brows.BOM   JS Windows.Browser.BOM