const express = require('express');
const router = express.Router();

const users = require('./users');
const auth = require('./auth');

router.use('/auth', auth);
router.use('/users', users);

module.exports = router;
