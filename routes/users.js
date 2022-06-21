const express = require('express');
const router = express.Router();
const { signupUser, getUserProfile } = require('../controllers/userController');
const { validate } = require('../middlewares/validation');
const { userAuth } = require('../middlewares/authentication');
const { signup } = require('../validators/userValidator');

router.post('/signup', validate(signup), signupUser);
router.get('/profile', userAuth, getUserProfile);

module.exports = router;
