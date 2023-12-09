// Function to mix two colors and display the result
function mixColors() {
    // Get the values of the selected colors
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
  
    // Mix the colors using helper function mixHexColors
    var mixedColor = mixHexColors(color1, color2);
  
    // Display the mixed color
    displayResult(mixedColor);
  
    // Update mix animation gradient with the mixed color
    updateMixAnimation(mixedColor);
  }
  
  // Function to calculate the mixed color from two hex colors
  function mixHexColors(color1, color2) {
    // Extract the RGB values from each color
    var r1 = parseInt(color1.slice(1, 3), 16);
    var g1 = parseInt(color1.slice(3, 5), 16);
    var b1 = parseInt(color1.slice(5, 7), 16);
  
    var r2 = parseInt(color2.slice(1, 3), 16);
    var g2 = parseInt(color2.slice(3, 5), 16);
    var b2 = parseInt(color2.slice(5, 7), 16);
  
    // Calculate the average of the RGB values
    var mixedR = Math.round((r1 + r2) / 2);
    var mixedG = Math.round((g1 + g2) / 2);
    var mixedB = Math.round((b1 + b2) / 2);
  
    // Construct the mixed color in hex format
    var mixedColor = "#" + componentToHex(mixedR) + componentToHex(mixedG) + componentToHex(mixedB);
    return mixedColor;
  }
  
  // Function to convert a single RGB value to its corresponding hex value
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  // Function to display the mixed color in the result div
  function displayResult(color) {
    var resultDiv = document.getElementById('result');
    // Set the background color of the result div to the mixed color
    resultDiv.style.backgroundColor = color;
    // Display the text indicating the mixed color
    resultDiv.textContent = "Mixed Color: " + color;
  }
  
  // Function to update mix animation with the mixed color
  function updateMixAnimation(color) {
    var mixAnimation = document.getElementById('mixAnimation');
    mixAnimation.style.background = `linear-gradient(to right, ${color}, transparent)`;
    mixAnimation.classList.remove('play-animation');
    void mixAnimation.offsetWidth; // Trigger reflow to restart animation
    mixAnimation.classList.add('play-animation');
  }
  
  // Play background songs on page load
window.onload = function() {
    var audio1 = document.getElementById('audio1');
    var audio2 = document.getElementById('audio2');
    var audio3 = document.getElementById('audio3');
  
    audio1.play();
    audio2.play();
    audio3.play();
  }