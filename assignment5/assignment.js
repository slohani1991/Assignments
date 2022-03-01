function calculateMax(x, y) {
  if (x > y) {
    return x;
  }
  return y;
}
function calculateMaxOfThree(x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
}
function isVowel(x) {
  const vowel = ["a", "e", "i", "o", "u"];
  let flag = false;
  vowel.forEach((data) => {
    if (data === x) {
      flag = true;
    }
  });
  return flag;
}

function sum() {
  const data = [1, 2, 3, 4];
  let sum = 0;
  data.forEach((value) => {
    sum += value;
  });
  return sum;
}
function multiply() {
  const data = [1, 2, 3, 4];
  let mul = 1;
  data.forEach((value) => {
    mul *= value;
  });
  return mul;
}

function reverseData(str) {
  let string = "";
  for (i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
}
function longestWord(arr) {
  max = arr[0];
  arr.forEach((data) => {
    if (data.length > max.length) {
      max = data;
    }
  });
  return max;
}

function longestWordThanIndex(arr, index) {
  let newArrayData = [];
  arr.forEach((data) => {
    if (data.length > index) {
      newArrayData.push(data);
    }
  });
  return newArrayData;
}

const computeSumOfSquares = (arryaData) => {
  let sum = 0;
  arryaData.forEach((data) => {
    sum += data * data;
  });
  return sum;
};

const printOddNumbersOnly = (arryaData) => {
  let newArrayData = [];
  arryaData.forEach((data) => {
    if (data % 2 != 0) {
      newArrayData.push(data);
    }
  });
  return newArrayData;
};

const computeSumOfSquaresOfEvensOnly = (arryaData) => {
  let sum = 0;
  arryaData.forEach((data) => {
    if (data % 2 == 0) {
      sum += data * data;
    }
  });
  return sum;
};

const sumUsingReduce = (arryaData) => {
  let ini = 0;
  let sum = arryaData.reduce(
    (prevData, currentData) => prevData + currentData,
    ini
  );
  return sum;
};

const mulUsingReduce = (arryaData) => {
  let ini = 1;
  let mul = arryaData.reduce(
    (prevData, currentData) => prevData * currentData,
    ini
  );
  return mul;
};

const findSecondBiggest = (arryaData) => {
  var max = Math.max.apply(null, arryaData);
  arryaData.splice(arryaData.indexOf(max), 1);
  return Math.max.apply(null, arryaData);
};

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

function validTHISForm() {
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
}
