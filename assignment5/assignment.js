const calculateMax = (x, y) => {
  if (x > y) {
    return x;
  }
  return y;
};
const calculateMaxOfThree = (x, y, z) => {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
};
const isVowel = (x) =>
  ["a", "e", "i", "o", "u"].filter((data) => data.startsWith(x).length);

const sum = () => [1, 2, 3, 4].reduce((a, b) => a + b, 0);
const multiply = () => [1, 2, 3, 4].reduce((a, b) => a * b, 1);

const reverseData = (str) => {
  let string = "";
  for (i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
};
const longestWord = (arr) => {
  max = arr[0];
  arr.forEach((data) => {
    if (data.length > max.length) {
      max = data;
    }
  });
  return max;
};

const longestWordThanIndex = (arr, index) =>
  arr.filter((data) => data.length > index);

const computeSumOfSquares = (arryaData) =>
  arryaData.map((a) => a * a).reduce((a, b) => a + b, 0);

const printOddNumbersOnly = (arryaData) => arryaData.filter((a) => a % 2 != 0);

const computeSumOfSquaresOfEvensOnly = (arryaData) =>
  arryaData
    .filter((a) => a % 2 == 0)
    .map((data) => data * data)
    .reduce((a, b) => a + b, 0);

const sumUsingReduce = (arryaData) =>
  arryaData.reduce((prevData, currentData) => prevData + currentData, 0);

const mulUsingReduce = (arryaData) =>
  arryaData.reduce((prevData, currentData) => prevData * currentData, 1);

const findSecondBiggest = (arryaData) =>
  Math.max.apply(
    null,
    arryaData.splice(arryaData.indexOf(Math.max.apply(null, arryaData)), 1)
  );

const fibonacci = (n, a, b) => {
  let newArrayData = [];
  var temp;
  while (n > 0) {
    temp = a;
    a = a + b;
    b = temp;
    newArrayData.push(b);
    n--;
  }

  return newArrayData;
};

const validLogin = () => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var website = document.getElementById("website").value;
  var checkout = document.getElementById("checkout").value;

  if (email == "" || password == "" || website == "") {
    alert("Please enter proper data");
  } else {
    alert(
      "Email:" +
        email +
        "\nPassword:" +
        password +
        "\nWebsite:" +
        website +
        "\nCheckout:" +
        checkout
    );
  }
};

const validTHISForm = () => {
  var product_num = document.getElementById("product_number").value;
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var stock = document.getElementById("stock").value;
  var supplier = document.getElementById("supplier").value;
  var date = document.getElementById("date").value;

  let valid = true;

  if (
    product_num == "" ||
    name == "" ||
    price == "" ||
    stock == "" ||
    supplier == "" ||
    date == ""
  ) {
    valid = false;
    alert("Enter Proper Data !!! All fields are mandatory");
  }

  if (valid) {
    var myWindow = window.open("", "", "width=500,height=300");
    myWindow.document.write(
      "<p>Product Number : " +
        product_num +
        "</p><p>Name : " +
        name +
        "</p><p>Price : " +
        price +
        "</p><p>Stock(Quantity) : " +
        stock +
        "</p><p>Supplier : " +
        supplier +
        "</p><p>Ordered Date : " +
        date +
        "</p>"
    );
  }
};

const ObjectSum = () => Object.values(arguments).reduce((a, b) => a + b);
