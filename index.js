// Get the form element
var form = document.getElementById("my-form");

// Listen for form submit event
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

  // Store user object in local storage
  localStorage.setItem("user", JSON.stringify(user));

  // Reset form inputs
  nameInput.value = "";
  emailInput.value = "";

  // Display success message
  var msgDiv = document.querySelector(".msg");
  msgDiv.textContent = "User details saved successfully.";
});
