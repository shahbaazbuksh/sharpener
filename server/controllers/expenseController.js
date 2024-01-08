const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Fetch all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add new expense
router.post('/', async (req, res) => {
  const { name, amount, category } = req.body;
  try {
    const expense = await Expense.create({ name, amount, category });
    res.json(expense);
  } catch (error) {
    console.error('Error adding expense:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete expense by ID
router.delete('/:expenseId', async (req, res) => {
  const expenseId = req.params.expenseId;
  try {
    await Expense.destroy({ where: { id: expenseId } });
    res.send('Deleted successfully');
  } catch (error) {
    console.error('Error deleting expense:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
