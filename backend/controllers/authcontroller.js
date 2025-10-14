
// MarcoHotel/backend/controllers/authController.js
const User = require('../models/User');

// @desc    Register a user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res, next) => {
    const { name, email, password, role } = req.body;

    try {
        // Create user
        const user = await User.create({
            name,
            email,
            password,
            role
        });

        // NOTE: In the next step, we will implement JSON Web Token (JWT)
        // generation and send it back here instead of just the user object.
        res.status(201).json({
            success: true,
            message: 'User registered successfully (Password is hashed in DB).',
            data: user // Temporary response for testing
        });

    } catch (err) {
        // Handle MongoDB validation or duplicate key errors
        res.status(400).json({ success: false, error: err.message });
    }
};