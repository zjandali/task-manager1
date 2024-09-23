const express = require('express');
const router = express.Router();
const { registerUser, authUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/users/register
router.post('/register', registerUser);

// @route   POST /api/users/login
router.post('/login', authUser);

// @route   GET /api/users/profile
router.get('/profile', protect, getUserProfile);

module.exports = router;
