const path = require('path');

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

// adding a new middleware function
// next is a funciton that has to be executed to allow the request to continue on to the next middleware
router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', { products, docTitle: 'Shop', path: '/' });
});

module.exports = router;