var employees = [];

var Employee = function(name, title, salary, status){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status || "Full Time";
}

Employee.prototype.printEmployeeForm = function(){
    console.log("Name: " + this.name + "\nTitle: " + this.title + "\nSalary: " + this.salary + "\nStatus" + this.status);
}

var john = new Employee("John", "Manager", "100k");
var pollyStaal = new Employee("Polly Staal", "Vice President of Finance", "1,500,000");
var mirandaPriestly = new Employee("Miranda Priestly", "Editor in Chief", "More than all of us, especially you Tim", "Weekend Warrior");

mirandaPriestly.status = "Contract";
mirandaPriestly.disposition = "Bitchy";

employees.push(john, pollyStaal, mirandaPriestly);
console.log(employees);

//console.log(mirandaPriestly);
//console.log(john);

