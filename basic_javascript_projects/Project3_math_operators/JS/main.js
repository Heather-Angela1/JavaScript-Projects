function addNumbers() {
  var num1 = 7;
  var num2 = 4;
  var sum = num1 + num2;

  var mathParagraph = document.getElementById("addition");
  mathParagraph.textContent = `The sum of ${num1} and ${num2} is ${sum}.`;
}

function subtractNumbers() {
  var num1 = 7;
  var num2 = 4;
  var difference = num1 - num2;

  const mathParagraph = document.getElementById("subtraction");
  mathParagraph.textContent = `The difference between ${num1} and ${num2} is ${difference}.`;
}

function magicNumbers() {
  var num1 = 7;
  var num2 = 4;

  // Multiplication operation
  var product = num1 * num2;

  // Division operation
  var quotient = num1 / num2;

  var mathParagraph = document.getElementById("magic");
  mathParagraph.textContent = `The product of ${num1} and ${num2} is ${product}, and ${num1} divided by ${num2} is ${quotient}.`;
}

// Modulus Operator
function modulusOperator() {
  var remainder = 25 % 6;
  var mathParagraph = document.getElementById("remainder");
  mathParagraph.textContent = "When you divide 25 by 6 you have a remainder of: " + remainder;
}

// M+Negation Operator
function negation_Operator() {
  var negative = 4;
  var mathParagraph = document.getElementById("negative");
  mathParagraph.textContent = "The opposite of 4 is: " + -negative;
}

// Increment Operator
function increment_Operator() {
  var num = 7;
  num++;
  var mathParagraph = document.getElementById("increment");
  mathParagraph.textContent = "The result of incrementing 7 is: " + num;
  }
  
  // Decrement Operator
  function decrement_Operator() {
  var num = 7;
  num--;
  var mathParagraph = document.getElementById("decrement");
  mathParagraph.textContent = "The result of decrementing 7 is: " + num;
  }

  // Random Number alert
  window.alert(Math.random() * 100);

  // Math Obect Method - Find the square root
  function findSquareRoot() {
    var num = 64;
    var squareRoot = Math.sqrt(num);
    
    var mathParagraph = document.getElementById("squareRoot");
    mathParagraph.textContent = "The square root of 64 is: " + squareRoot;
  }
  