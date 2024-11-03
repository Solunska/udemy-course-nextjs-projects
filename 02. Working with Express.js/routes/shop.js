const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// adding a new middleware function
// next is a funciton that has to be executed to allow the request to continue on to the next middleware
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;