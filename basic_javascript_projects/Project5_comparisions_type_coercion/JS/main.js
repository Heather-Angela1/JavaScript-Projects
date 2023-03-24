// main.js

// Typeof Operator 'string'
var a = "Hello, World!";
document.write(typeof a);
document.write("<br><br>");


// Expression combining a string and a number.
document.write("44" + 77);
document.write("<br><br>");

// == Operator
document.write(4 == 4);
document.write("<br><br>");

// === Operator
x = 7
y = 7
document.write(x === y);
document.write("<br><br>");

// > and && Operators
document.write(9 > 4 || 15 > 7);
document.write("<br><br>");

// < and || Operators
document.write(9 < 4 || 15 < 7);
document.write("<br><br>");

// ! Operator
function not_Function() {
  document.getElementById("Not").innerHTML = !(1>2);
}