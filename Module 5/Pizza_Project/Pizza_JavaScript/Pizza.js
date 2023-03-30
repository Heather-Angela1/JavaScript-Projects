// Pizza.js
// Add an event listener for the "click" event on the element with ID "btnOrder", 
// and call the function "getReceipt" when the event occurs.
document.getElementById("btnOrder").addEventListener("click", getReceipt);

// The getReceipt function calculates the price based on the pizza size and stores the order details.
function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>"; // Initialize the order text string
    var runningTotal = 0; // Initialize the running total for the order
    var sizeTotal = 0; // Initialize the total cost for the pizza size
    var sizeArray = document.getElementsByClassName("size"); // Get an array of elements with the class "size"
    
    // Iterate through the sizeArray to find the checked size option
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    
    // Determine the price based on the selected size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 18;
    } else if (selectedSize === "Party Pizza") {
        sizeTotal = 22;
    }
    
    runningTotal = sizeTotal; // Update the running total with the size cost
    // Log relevant information to the console for debugging purposes
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal, text1); // Call the getTopping function with the running total and order text
};

// The getTopping function calculates the topping cost and displays the order summary and total price.
function getTopping(runningTotal, text1) {
    var toppingTotal = 0; // Initialize the total cost for the toppings
    var selectedTopping = []; // Initialize an array to store the selected toppings
    var toppingArray = document.getElementsByClassName("toppings"); // Get an array of elements with the class "toppings"
    
    // Iterate through the toppingArray to find the checked topping options
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    
    var toppingCount = selectedTopping.length; // Calculate the number of selected toppings
    
    // Determine the topping cost based on the number of selected toppings
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    
    runningTotal = (runningTotal + toppingTotal); // Update the running total with the topping cost
    // Log relevant information to the console for debugging purposes
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};
