// While Loop Function
function While_Loop() {
  let output = "";
  let x = 1;

  while (x <= 10) {
    output += "<br>" + x;
    x++;
  }
  document.getElementById("whileLoop").innerHTML = output;
}

// For Loop Function
function For_Loop() {
  var practices = [
    "Meditation",
    "Yoga",
    "Mindfulness",
    "Qi Gong",
    "Tai Chi",
    "Reiki",
    "Earthing",
    "Breathwork"
  ];

  var output = "";

  for (var i = 0; i < practices.length; i++) {
    output += "<br>" + practices[i];
  }
  document.getElementById("forLoop").innerHTML = output;
}

// Array Function
function array_function() {
  var Dog_Action = [];
  Dog_Action[0] = "sleeping";
  Dog_Action[1] = "running";
  Dog_Action[2] = "playing";
  Dog_Action[3] = "barking";
  document.getElementById("Dog").innerHTML = "The dog is " + Dog_Action[2] + ".";
}

// Const function
const myObject = {
  name: "Kylo",
  age: 1,
  breed: "Blue Heeler"
};

function constant_function() {
  const displayText = `Name: ${myObject.name}, Age: ${myObject.age}, Breed: ${myObject.breed}`;
  document.getElementById("Constant").innerHTML = displayText;
}

// Object assignment
let exampleObject = {
  name: "Kylo",
  age: 30,
  breed: "Blue Heeler",

  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.breed}.`);
  }
};

function object_function() {
  document.getElementById("Greet").innerHTML = `Hello, my name is ${exampleObject.name} and I am a ${exampleObject.breed}.`;
}
