// index.js

// Get form element
var form = document.getElementById("my-form");

// Add submit event listener to the form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get user input values
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var name = nameInput.value;
  var email = emailInput.value;

  // Create user object
  var user = {
    name: name,
    email: email,
  };

  // Store user object in localStorage
  localStorage.setItem("user", JSON.stringify(user));

  // Clear input fields
  nameInput.value = "";
  emailInput.value = "";

  // Display success message
  var messageDiv = document.querySelector(".msg");
  messageDiv.textContent = "User details stored in localStorage.";
});
