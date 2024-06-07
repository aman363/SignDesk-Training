// function Person(fName,lName,dob){
//     fName=fName;
//     lName=lName;
//     dob=dob;
//     this.getInfo=function(){
//         return 'Person: '+fName+' '+lName+' '+dob;
//     };
// }

// var p1=new Person('ram','a','25jan');
// var info1=p1.getInfo()
// alert(info1)
// var p2=new Person('shyam','k','12mar');
// alert("Second "+p2.getInfo())
// info1=p1.getInfo()
// alert("First: "+info1)


// function Person(fName,lName,dob){
//     this.fName=fName;
//     this.lName=lName;
//     this.dob=dob;
// }
// Person.prototype.getInfo=function(){
//     return 'Person: '+this.fName+' '+this.lName+' '+this.dob;
// }

// var p1=new Person('ram','a','25jan');
// var info1=p1.getInfo()
// alert("First "+info1)
// var p2=new Person('shyam','k','12mar');
// alert("Second "+p2.getInfo())
// info1=p1.getInfo()
// alert("First again "+info1)

var Person = (function(){
function Person(fName,lName,dob){
    this.fName=fName;
    this.lName=lName;
    this.dob=dob;
}
Person.prototype.getInfo=function(){
    return 'Person: '+this.fName+' '+this.lName+' '+this.dob;
}
return Person;
})();

var Employee = (function(parent){
    Employee.prototype= new Person();
    Employee.prototype.constructor=Employee;
    function Employee(fName,lName,dob,employeeId){
        parent.call(this,fName,lName,dob);
        this.employeeId=employeeId;
    }
    console.log(Employee.prototype)
    Employee.prototype.getInfo=function(){
        return "Person type: Employee"+parent.prototype.getInfo.call(this)+' '+this.employeeId;
    };
    return Employee;
})(Person);

var emp=new Employee("Ram","A","24jan","1234");
alert(emp.fName)
alert(emp.getInfo())
console.log("emp is: "+emp.fName)




// var p1=new Person('ram','a','25jan');
// var info1=p1.getInfo()
// alert("First "+info1)
// var p2=new Person('shyam','k','12mar');
// alert("Second "+p2.getInfo())
// info1=p1.getInfo()
// alert("First again "+info1)