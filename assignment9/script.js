"use strict";

const person = {
  name: "",
  dateOfBirth: null,

  getName: function () {
    return this.name;
  },
  setName: function (newName) {
    this.name = newName;
  },
  getDateOfBirth: function () {
    return (
      this.dateOfBirth.getFullYear() +
      "-" +
      this.dateOfBirth.getMonth() +
      "-" +
      this.dateOfBirth.getDate()
    );
  },
};

const john = Object.create(person, {
  name: {
    value: "John Brigansha",
  },
  dateOfBirth: {
    value: new Date(1991, 5, 17),
  },
});

console.log(`${john.getName()} was born on ${john.getDateOfBirth()}`);

const employee = Object.create(person);
employee.salary = 0;
employee.hireDate = Date.now();
employee.doJob = function (jobTitle) {
  this.jobTitle = jobTitle;
};
employee.toString = function () {
  return `${this.name} is a ${this.jobTitle} who earns $${this.salary}`;
};

const anna = Object.create(employee, {
  name: {
    value: "Anna",
  },
  salary: {
    value: "249,995.50",
  },
});

anna.doJob("Programmer");

console.log(anna.toString());
