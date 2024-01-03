const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    const appointments = await User.findAll();
    res.render('index', { appointments });
});

router.get('/new', (req, res) => {
    res.render('new');
});

router.post('/new', async (req, res) => {
    const { name, phone, email } = req.body;
    await User.create({ name, phone, email });
    res.redirect('/');
});

router.get('/update/:id', async (req, res) => {
    const appointmentId = req.params.id;
    const appointment = await User.findByPk(appointmentId);
    res.render('update', { appointment });
});

router.post('/update/:id', async (req, res) => {
    const appointmentId = req.params.id;
    const { name, phone, email } = req.body;
    await User.update({ name, phone, email }, {
        where: { id: appointmentId }
    });
    res.redirect('/');
});

router.post('/delete/:id', async (req, res) => {
    const appointmentId = req.params.id;
    await User.destroy({
        where: { id: appointmentId }
    });
    res.redirect('/');
});

module.exports = router;