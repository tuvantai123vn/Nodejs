const express = require('express');

const router = express.Router();

const path = require('path');

const rootDir = require('../until/path');

router.get('/',(req, res, next) => {
    // console.log('In the middleware');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;