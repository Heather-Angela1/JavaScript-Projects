// Countdown Assignment
function countdown() {
    // Input from user
    var secondsInput = document.getElementById("seconds");
    var seconds = parseInt(secondsInput.value, 10);

    // Check if the input value is a valid number
    if (isNaN(seconds) || seconds <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    var timer = document.getElementById("timer");

    // Function to perform countdown
    function tick() {
        timer.innerHTML = --seconds;

        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            alert("Time's up!");
        }
    }
    tick();
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
