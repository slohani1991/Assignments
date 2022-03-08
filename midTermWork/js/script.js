function onFormSubmitValidData() {
  var name = document.getElementById("name").value;
  var citizenId = document.getElementById("citizenID").value;
  var ssn = document.getElementById("ssn").value;
  var state = document.getElementById("state").value;
  var sc = document.getElementById("sc").value;

  alert(
    "Name:" +
      name +
      "\n" +
      "Citizen ID:" +
      citizenId +
      "\n" +
      "Social Security Number:" +
      ssn +
      "\n" +
      "State:" +
      state +
      "\n" +
      "Senior Citizen:" +
      sc
  );
}
