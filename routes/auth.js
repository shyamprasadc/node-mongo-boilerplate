const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/authController');
const { validate } = require('../middlewares/validation');
const { login } = require('../validators/commonValidator');

router.post('/login', validate(login), loginUser);

module.exports = router;
