document.addEventListener("DOMContentLoaded", function() {
  // Switch function

  // Function to handle favorite season input and display result
  const form = document.getElementById("season-form");
  const input = document.getElementById("season-input");
  const result = document.getElementById("result");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const season = input.value.trim().toLowerCase();

    switch (season) {
      case "spring":
        result.textContent = "You love the fresh bloom of flowers in Spring!";
        break;
      case "summer":
        result.textContent = "You enjoy the warm sunshine in Summer!";
        break;
      case "fall":
        result.textContent = "You appreciate the colorful leaves in Fall!";
        break;
      case "winter":
        result.textContent = "You adore the snowy landscapes in Winter!";
        break;
      default:
        result.textContent = "Please enter a valid season from the list.";
    }
  });

  // document.getElementByClassName() Method Assignment

  // Function to change the color of list items with the "season" class
  const changeSeasonColor = function() {
    const seasonElements = document.getElementsByClassName("season");

    for (let i = 0; i < seasonElements.length; i++) {
      seasonElements[i].style.color = "blue";
    }
  };

  // Button click event to trigger the changeSeasonColor function
  const colorButton = document.getElementById("color-button");
  colorButton.addEventListener("click", changeSeasonColor);

  // Canvas challenge
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // Create a linear gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

  // Add color stops
  gradient.addColorStop(0, "red");
  gradient.addColorStop(0.5, "blue");
  gradient.addColorStop(1, "green");

  // Set the gradient as the fill style
  ctx.fillStyle = gradient;

  // Draw a rectangle with the gradient background
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

