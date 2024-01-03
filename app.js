const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const sequelize = require('./database');

const appointmentController = require('./controllers/appointmentController');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', appointmentController);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});