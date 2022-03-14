export default class Person {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }

  getName() {
    return this.name;
  }
  getDateOfBirth() {
    return this.dateOfBirth;
  }
  setName(newName) {
    this.name = newName;
  }
  setDateOfBirth(dob) {
    this.dateOfBirth = dob;
  }
  toString() {
    return `Name:${this.getName()}, Date of Birth : ${this.getDateOfBirth()}`;
  }
}
