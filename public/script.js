document.addEventListener('DOMContentLoaded', function () {
  const expenseForm = document.getElementById('expenseForm');
  const expenseTableBody = document.querySelector('#expenseTable tbody');

  async function displayExpenses() {
    try {
      const response = await fetch('http://localhost:3000/expenses');
      const expenses = await response.json();
      renderExpenses(expenses);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  }

  function renderExpenses(expenses) {
    expenseTableBody.innerHTML = '';
    expenses.forEach(expense => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${expense.name}</td>
        <td>${expense.amount}</td>
        <td>${expense.category}</td>
        <td>
          <button class="btn btn-sm btn-danger deleteExpense" data-id="${expense.id}">Delete</button>
        </td>
      `;
      expenseTableBody.appendChild(row);
    });
  }

  async function addExpense(name, amount, category) {
    try {
      await fetch('http://localhost:3000/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, amount, category }),
      });
      displayExpenses();
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  }

  async function deleteExpense(expenseId) {
    try {
      await fetch(`http://localhost:3000/expenses/${expenseId}`, {
        method: 'DELETE',
      });
      displayExpenses();
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  }

  // Event listeners
  expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const expenseNameInput = document.getElementById('expenseName');
    const expenseAmountInput = document.getElementById('expenseAmount');
    const expenseCategoryInput = document.getElementById('expenseCategory');
    const name = expenseNameInput.value;
    const amount = parseFloat(expenseAmountInput.value);
    const category = expenseCategoryInput.value;
    addExpense(name, amount, category);
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
    expenseCategoryInput.value = '';
  });

  expenseTableBody.addEventListener('click', function (event) {
    if (event.target.classList.contains('deleteExpense')) {
      const expenseId = event.target.getAttribute('data-id');
      deleteExpense(expenseId);
    }
  });

  // Initial display of expenses
  displayExpenses();
});
