var user = {
    FirstName: "Ahmed",
    LastName: "Ali",
    job: "IT",
    set change(value) {
        user.FirstName = value;
    },
    // get getchange() {
    //   return  user.FirstName;
    // },
    
}
////Modirator Inherit from User
var Moderator=Object.create(user);
console.log("---------------------Permission Moderator Read And Change Value In User Object------------------------");
console.log("I am Moderator I can Read Firstname in user Object--------> "+ Moderator.FirstName);

//////////////////////////////////////////////////////////
////change First name inf User Object from Moderator/////
Moderator.change="I am Moderator";
console.log("------------------------------------------------------------------------------------------");
console.log("---------------------------Change Value Of Firstname from Modiratot---------------------- ");
console.log("Read FirstName From Moderator  ---------> "+ Moderator.FirstName);
console.log("Read FirstName in User After Change From Moderator ------>"+ user.FirstName);
console.log("------------------------------------------------------------------------------------------");
///////////////////////////////////////////////////////////

 Moderator.newPro="New Proprties in Moderator";
/////To Change value of New Proprity in Moderator by Admin//////
 Moderator.changeFromAdmin=function(x){
     Moderator.newPro=x;
     
}
Moderator.changeFNFromAdmin=function(x){
    Moderator.FirstName=x;
    
}
Moderator.delPermissionAdminInMod=function(){
   delete Moderator.newPro;
    
}
////////////////Create Admin Object that has two Permission Read Change delete//////////////////////////////////
var Admin=Object.create(Moderator);
console.log ("New Proprty Value---------------->" +Moderator.newPro);

Admin.changeFromAdmin("Admin Change newPro");////Change value of new proprty in Moderator by Admin

console.log("Admin Change special Moderator Prop  ---->" + Moderator.newPro);
////////////////////////////////////////////////////////////////////////////////////////////////////

Admin.change="Admin change User";////change first name for User by admin
Admin.changeFNFromAdmin("Admin Change Moderator");////change first name for Moderator by admin
console.log("In User------> " + user.FirstName);
console.log("In  Moderator-----> " + Moderator.FirstName);

///////////////////////////////////Admin has Permisssion Delete proprty for Moderator ////////////////////////////////////////////////////////
console.log("Admin Change special Moderator Prop Befor Delete  ---->" + Admin.newPro);
Admin.delPermissionAdminInMod();
console.log(Moderator.newPro);
console.log("---------------------Afrte delete prop from admin----------------------");

