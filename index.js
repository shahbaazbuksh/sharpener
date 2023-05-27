var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input values
  var newItem = document.getElementById("item").value;
  var newDescription = document.getElementById("description").value;

  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";

  // Create a div for item name and description
  var itemDiv = document.createElement("div");

  // Add text node with input value for item name
  itemDiv.appendChild(document.createTextNode(newItem));
  // Add line break
  itemDiv.appendChild(document.createElement("br"));
  // Add text node with input value for item description
  itemDiv.appendChild(document.createTextNode(newDescription));

  // Append itemDiv to li
  li.appendChild(itemDiv);

  // Create del button element
  var deleteBtn = document.createElement("button");
  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // Append text node to delete button
  deleteBtn.appendChild(document.createTextNode("X"));
  // Append delete button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
