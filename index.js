// Get form and user list elements
var form = document.getElementById("my-form");
var userList = document.getElementById("user-list");

// Submit form event
form.addEventListener("submit", submitForm);

// Submit form function
function submitForm(e) {
  e.preventDefault();

  // Get input values
  var nameInput = document.getElementById("name").value;
  var emailInput = document.getElementById("email").value;

  // Create user object
  var user = {
    name: nameInput,
    email: emailInput,
  };

  // Display user details on the screen
  var userItem = document.createElement("div");
  userItem.innerHTML =
    "<strong>Name:</strong> " +
    user.name +
    ", <strong>Email:</strong> " +
    user.email;
  userList.appendChild(userItem);

  // Clear form inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  // Store user object in local storage
  localStorage.setItem("user", JSON.stringify(user));
}
