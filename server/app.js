const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./database');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Importing routes
app.use('/expenses', expenseRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
