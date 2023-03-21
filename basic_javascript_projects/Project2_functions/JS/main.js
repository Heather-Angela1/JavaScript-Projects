function updateText() {
    // Assign two variables with the values you want to display
    var text1 = "Hola Mundo!";
    var text2 = "Welcome to my website!";

    // Utilize the document.getElementById method to get the elements by their IDs
    var element1 = document.getElementById("textElement1");
    var element2 = document.getElementById("textElement2");

    // Concatenate the strings using the += operator
    text1 += " How are you?";
    text2 += " Please take a look around.";

    // Update the text content of the elements with the concatenated values
    element1.textContent = text1;
    element2.textContent = text2;
}
