// Global Variable
var X = 10;

function Add_numbers_1() {
  document.getElementById("globalVarResult").innerHTML = (20 + X + "<br>");
}

function Add_numbers_2() {
  document.getElementById("globalVarResult").innerHTML += (X + 100);
}

// Local Variable
function Add_local_numbers() {
  var Y = 5;
  document.getElementById("localVarResult").innerHTML = (X + Y);
}

// Broken function with an intentional error ('Z is not defined')
function broken_function() {
  try {
    document.getElementById("localVarResult").innerHTML = (X + Z);
  } catch (error) {
    console.log('An error occurred:', error.message);
  }
}

// Method Assignment
function get_Hours() {
  if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
  }
}

// If statement- Even or Odd Function (You can change the value of `number` to test with different) 
function even_or_odd() {
  const number = 8;
  const resultElement = document.getElementById("result");

  if (number % 2 === 0) {
    resultElement.textContent = `The number ${number} is even.`;
  } else {
    resultElement.textContent = `The number ${number} is odd.`;
  }
}

// Else Statement -Height Test
function Height_Function() {
  var Height = document.getElementById("Height").value;
  var Ride;
  
  if (Height >= 54) {
    Ride = "You are tall enough to ride!";
  } else {
    Ride = "You are not tall enough to ride!";
  }
  document.getElementById("How_tall_are_you").innerHTML = Ride;
}

// Else If Statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    
    if (Time < 12) {
      Reply = "It is morning time!";
    } else if (Time >= 12 && Time < 18) {
      Reply = "It is afternoon time!";
    } else {
      Reply = "It is evening time!";
    }
    document.getElementById("current_time").innerHTML = Reply;
  }
  