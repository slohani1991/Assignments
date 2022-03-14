import Person from "./Person.js";

export default class Employee extends Person {
  constructor(name, dob, salary, hireDate) {
    super(name, dob);
    this.salary = salary;
    this.hireDate = hireDate;
  }
  doJob(jobTitle) {
    return `${this.name} is a ${jobTitle} who earns ${new Intl.NumberFormat(
      "en-US",
      { style: "currency", currency: "USD" }
    ).format(this.salary)}`;
  }
}
