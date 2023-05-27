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
  userItem.innerHTML = `
    <strong>Name:</strong> ${user.name}, <strong>Email:</strong> ${user.email}
    <button class="delete-btn">Delete</button>
  `;
  userList.appendChild(userItem);

  // Clear form inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  // Store user object in local storage
  var users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

// Load user data on page load
window.addEventListener("DOMContentLoaded", loadUserData);

// Load user data function
function loadUserData() {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  userList.innerHTML = ""; // Clear the user list before loading

  users.forEach(function (user) {
    // Create user item
    var userItem = document.createElement("div");
    userItem.innerHTML = `
      <strong>Name:</strong> ${user.name}, <strong>Email:</strong> ${user.email}
      <button class="delete-btn">Delete</button>
    `;
    userList.appendChild(userItem);
  });
}

// Delete user event delegation
userList.addEventListener("click", deleteUser);

// Delete user function
function deleteUser(e) {
  if (e.target.classList.contains("delete-btn")) {
    var userItem = e.target.parentElement;
    var userName = userItem.querySelector("strong").textContent;
    var userEmail = userItem.querySelector("strong").nextSibling.textContent;

    var users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.filter(function (user) {
      return user.name !== userName.trim() || user.email !== userEmail.trim();
    });

    localStorage.setItem("users", JSON.stringify(users));
    userItem.remove();
  }
}
