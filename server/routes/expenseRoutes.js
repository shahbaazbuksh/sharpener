const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.use('/', expenseController);

module.exports = router;
