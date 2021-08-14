function Person(fname,lname,age){
    this.Firstname=fname;
    this.Lastname=lname;
    this.age=age;
}
var personObject={
    name:"Muastafa",
    age:"18",
    doSomething:function(){
        return this.name;
    }
}

var Person1= new Person("Rana","Abdullah",44);
var Person2 =new Person("Ahmed","Abdullah",45);
function funAddress(xcity,xtown,xstreet,xnoHouse){
    this.city=xcity;
    this.town=xtown;
    this.street=xstreet;
    thix.noHouse=xnoHouse;
}
console.dir(personObject);
console.log("doooo=  "+personObject.doSomething("taha"));
Person.prototype.fullName=function(){
    return this.Firstname+this.Lastname;
}
console.log("My Name Is : "+ Person1.fullName());
// Address.city="Bagdad";
// Person.Prototype.address=Address;
// console.log(Person1.address.city);
console.log(Person2);
////You don't added new proprties inside constructor


///object with proprityes and funxtion
var employee={
    myaname:"saif",
    age:11,
    output:function(){
        return console.log("printed");
    }
}
///object with proprity inhart from employee
var newEmployee={
    empName:"Ahmed"
}
///newEmployee access to propty of employee using __proto__
newEmployee.__proto__=employee;
newEmployee.output();



////Person.newProprties="Hello";
////Person1.newProprties; this proprty
//Prototype with constructor
///__proto__ with object
//// object.create to access function from object



