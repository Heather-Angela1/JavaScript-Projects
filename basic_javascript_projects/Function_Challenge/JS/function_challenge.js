function changeHeadingColor() {
  // Use document.getElementById to select the element with the id 'myHeading'
  var heading = document.getElementById("myHeading");

  // Change the color of the selected element
  heading.style.color = "red";
}

function addNumbers(a, b) {
  // Add the two input numbers
  var sum = a + b;

  // Return the result
  return sum;
}

function displaySum() {
  // Get the input values
  var number1 = parseFloat(document.getElementById("number1").value);
  var number2 = parseFloat(document.getElementById("number2").value);

  // Calculate the sum using the addNumbers function
  var sum = addNumbers(number1, number2);

  // Display the result
  document.getElementById("result").textContent = "Result: " + sum;
}
