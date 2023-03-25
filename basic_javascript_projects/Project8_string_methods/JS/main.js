// concat() Method
function full_Sentence() {
    var part_1 = "Dinosaurs laid ";
    var part_2 = "eggs way before ";
    var part_3 = "the evolution ";
    var part_4 = "of chickens.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// slice() Method
function slice_Method() {
    var Sentence = "All work and no play make Kylo an anxious boy";
    var Section = Sentence.slice(26, 30);
    document.getElementById("Slice").innerHTML = Section;
}

// toString() Method
function string_Method() {
    var firstNumber = 321;
    document.getElementById("ToString").innerHTML = firstNumber.toString();
}

// toPrecision() Method
function precision_Method() {
    var secondNumber = 123.45678910111213;
    document.getElementById("SpecificLength").innerHTML = secondNumber.toPrecision(5);
}
