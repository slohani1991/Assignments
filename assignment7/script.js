var count = (function () {
  let counter = 0;

  setCounter = function () {
    counter = counter + 1;
  };
  setReset = function () {
    counter = 0;
  };
  getCounter = function () {
    return counter;
  };
  return {
    fetchCounter: getCounter,
    add: setCounter,
    reset: setReset,
  };
})();

// // Q.N . 7 => In add() context counter is an free variable as it is nither declared locally nither passed as parameter.

const make_adder = (inc) => {
  for (let i = 1; i <= inc; i++) {
    count.add();
  }
  return count.fetchCounter();
};

console.log(make_adder(5));
console.log(make_adder(5));
console.log(make_adder(5));

console.log(make_adder(7));

const employee = (() => {
  let name = null;
  let age = null;
  let salary = null;

  setName = (newName) => {
    name = newName;
  };
  setAge = (newAge) => {
    age = newAge;
  };
  setSalary = (newSalary) => {
    salary = newSalary;
  };
  getName = () => {
    return name;
  };
  getAge = () => {
    return age;
  };
  getSalary = () => {
    return salary;
  };
  incrementSalary = (per) => {
    return (salary = salary + salary * (per / 100));
  };
  incrementAge = (counter) => {
    return (age = getAge() + counter);
  };
  return {
    setName: setName,
    setAge: setAge,
    setSalary: setSalary,
    salaryIncrement: incrementSalary,
    ageIncrement: incrementAge,
  };
})();

employee.setName("Sandesh Lohani");
employee.setAge(30);
employee.setSalary(5000);
console.log(employee.salaryIncrement(20));
console.log(employee.ageIncrement(2));

employee.address = (function () {
  let address = null;

  getAddress = function () {
    return address;
  };

  setAddress = function (newAddress) {
    address = newAddress;
  };

  return {
    setAddress: setAddress,
    getAddress: getAddress,
  };
})();

employee.toString = () => {
  return (
    "Name : " +
    getName() +
    " Age : " +
    getAge() +
    " Salary : " +
    getSalary() +
    " Address :" +
    getAddress()
  );
};

employee.address.setAddress("Fairfield");
console.log(employee.address.getAddress());
console.log(employee.toString());
