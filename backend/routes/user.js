const express = require('express');
const router = express.Router();
const controllers = require('../controllers/userController');


router.post('/login',controllers.loginUser);

router.post('/signup',controllers.signUpUser);

module.exports = router;