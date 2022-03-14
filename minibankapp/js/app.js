/**
 *
 *
 * mini bank app.js
 *
 * @author Sandesh Lohani
 * @since 2022-03-10
 */

"use strict";

// $(document).ready(function () {
//   console.log("Mini bank app loded via jQuery");
//   $("#formNewAccount").submit(function (event) {
//     event.preventDefault();
//     const accountNo = $("#txtAccountNo").val();
//     const customerName = $("#txtCustomerName").val();
//     const accountType = $("#ddlAccountType").val();
//     const accountData = `Account Number : ${accountNo}\nCustomer Name : ${customerName}\nAccount Type : ${accountType}`;
//     alert(accountData);
//   });
// });

$(function (event) {
  $("body, div, p, em").click(hello);
  $("div > p").click(anotherHandler);
});

$(function hello(evt) {
  alert("You Clicked " + this.nodeName);
});

$(function anotherHandler() {
  alert("You clicked inner P");
});
