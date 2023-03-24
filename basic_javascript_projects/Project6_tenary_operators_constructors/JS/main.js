// Function to check if the user is old enough to vote
function Vote_Function() {
    var Age, Can_vote;
    // Get the user's age from the input field
    Age = document.getElementById("Age").value;
    // Determine if the user is eligible to vote using a ternary operator
    Can_vote = (Age < 18) ? "You are not old enough to " : "You can ";
    // Display the result on the page
    document.getElementById("Vote").innerHTML = Can_vote + " vote. ";
}

// Dog constructor function to create Dog objects
function Dog(Breed, Name, Age, Color) {
    this.Dog_Breed = Breed;
    this.Dog_Name = Name;
    this.Dog_Age = Age;
    this.Dog_Color = Color;
}

// Create instances of Dog objects
var Jamie = new Dog("Golden Retriever", "Jamie", 3, "Yellow");
var Boris = new Dog("Border Collie", "Angela", 2, "Black and White");
var Gabriela = new Dog("Dachshund", "Gabriela", 5, "Brown");

// Function to display information about Gabriela the dog
function newAndThis() {
    document.getElementById("New_and_This").innerHTML = "Gabriela is a " + Gabriela.Dog_Color + "-colored " + Gabriela.Dog_Breed + " and is " + Gabriela.Dog_Age + " years old.";
}

// Function to demonstrate a nested function that increments a value
function count_Function() {
    // Set the innerHTML of the Nested_Function element to the result of the Count function
    document.getElementById("Nested_Function").innerHTML = Count();

    // Define the Count function
    function Count() {
        var Starting_point = 9;

        // Define the nested Plus_one function that increments Starting_point
        function Plus_one() {
            Starting_point += 1;
        }

        // Call the Plus_one function
        Plus_one();

        // Return the updated value of Starting_point
        return Starting_point;
    }
}
