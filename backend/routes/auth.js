// MarcoHotel/backend/routes/auth.js
const express = require('express');
const { register } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
// The login route will be added here next

module.exports = router;