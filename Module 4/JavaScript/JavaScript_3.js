// Data Attribute Assignemnt
function displayCapital(element) {
    // Get the capital from the data attribute
    var capital = element.getAttribute('data-capital');

    // Get the country name from the innerHTML of the clicked element
    var countryName = element.innerHTML;

    // Construct the output message
    var message = "The capital of " + countryName + " is " + capital + ".";

    // Display the output message in the paragraph with the id "output"
    document.getElementById('output').innerHTML = message;
}
