import Person from "./Person.js";
import Employee from "./employee.js";

const per = [];

per[0] = new Person("Ana Smith", "1998-12-15");
per[1] = new Person("Bob Jone", "1945-11-16");
per[2] = new Person("Carlos Slim Helu", "1976-09-24");

per.forEach((data) => console.log(data.toString()));

const employee = [];

employee[0] = new Employee("Anna", "1998-12-15", 249995, Date.now());
employee[1] = new Employee("Jim Hanson", "1991-01-22", 245990, Date.now());

employee.forEach((data) => console.log(data.doJob("programmer")));
