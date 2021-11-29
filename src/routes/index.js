const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { titulo: 'First Website'});
});

router.get('/contact', (req, res) => {
    res.render('contact', { titulo: 'First Website'});
});

module.exports = router;