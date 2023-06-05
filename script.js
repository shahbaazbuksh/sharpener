document.addEventListener("DOMContentLoaded", function () {
  const expenseForm = document.getElementById("expenseForm");
  const expenseTable = document.getElementById("expenseTable");
  const expenseTableBody = expenseTable.querySelector("tbody");

  // Load expenses from local storage
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Function to render expenses in the table
  function renderExpenses() {
    expenseTableBody.innerHTML = "";
    expenses.forEach(function (expense, index) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${expense.name}</td>
        <td>${expense.amount}</td>
        <td>${expense.category}</td>
        <td>
          <button class="btn btn-sm btn-primary editExpense" data-index="${index}">Edit</button>
          <button class="btn btn-sm btn-danger deleteExpense" data-index="${index}">Delete</button>
        </td>
      `;
      expenseTableBody.appendChild(row);
    });
  }

  // Function to save expenses to local storage
  function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    const expenseNameInput = document.getElementById("expenseName");
    const expenseAmountInput = document.getElementById("expenseAmount");
    const expenseCategoryInput = document.getElementById("expenseCategory");
    const expense = {
      name: expenseNameInput.value,
      amount: parseFloat(expenseAmountInput.value),
      category: expenseCategoryInput.value,
    };
    expenses.push(expense);
    renderExpenses();
    saveExpenses();
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
    expenseCategoryInput.value = "";
  }

  // Function to handle edit expense
  function handleEditExpense(event) {
    if (event.target.classList.contains("editExpense")) {
      const index = event.target.getAttribute("data-index");
      const expense = expenses[index];
      const expenseNameInput = document.getElementById("expenseName");
      const expenseAmountInput = document.getElementById("expenseAmount");
      const expenseCategoryInput = document.getElementById("expenseCategory");
      expenseNameInput.value = expense.name;
      expenseAmountInput.value = expense.amount;
      expenseCategoryInput.value = expense.category;
      expenses.splice(index, 1);
      renderExpenses();
      saveExpenses();
    }
  }

  // Function to handle delete expense
  function handleDeleteExpense(event) {
    if (event.target.classList.contains("deleteExpense")) {
      const index = event.target.getAttribute("data-index");
      expenses.splice(index, 1);
      renderExpenses();
      saveExpenses();
    }
  }

  // Add event listeners
  expenseForm.addEventListener("submit", handleFormSubmit);
  expenseTable.addEventListener("click", handleEditExpense);
  expenseTable.addEventListener("click", handleDeleteExpense);

  // Initial render
  renderExpenses();
});
