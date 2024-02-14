// Get the buttons
var yes = document.getElementById("yes");
var no = document.getElementById("no");

// Add a click event listener to the yes button
yes.addEventListener("click", function() {
  // Redirect to the target website
  window.location.href = "tak.html";  // Zmień ten adres URL na docelowy
});

// Add a mouseover event listener to the no button
no.addEventListener("mouseover", function() {
  // Move the no button to a random position within the viewport
  var x = Math.random() * (window.innerWidth - no.offsetWidth);
  var y = Math.random() * (window.innerHeight - no.offsetHeight);
  no.style.left = x + "px";
  no.style.top = y + "px";
});
