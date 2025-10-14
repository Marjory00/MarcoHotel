// MarcoHotel/backend/controllers/authController.js

// import User from '../models/User.js'; // TEMPORARILY COMMENTED OUT - DB MOCK

// Mock User Model for temporary API testing
const User = {
    create: async ({ name, email, password, role }) => {
        // Simulate a database save and return a user object (without the password)
        console.log(`[MOCK DB] Registering user: ${email}`);
        return { 
            _id: 'mock-user-123', 
            name, 
            email, 
            role: role || 'user', 
            createdAt: new Date() 
        };
    }
};


// @desc    Register a user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res, next) => {
    const { name, email, password, role } = req.body;

    try {
        // --- MOCK IMPLEMENTATION ---
        // NOTE: In a real implementation, User.create would handle hashing the password.
        const user = await User.create({
            name,
            email,
            password,
            role
        });
        // --- END MOCK IMPLEMENTATION ---

        // NOTE: In the next step, we will implement JSON Web Token (JWT)
        // generation and send it back here instead of just the user object.
        res.status(201).json({
            success: true,
            message: 'User registered successfully (Mocked).',
            data: user // Temporary response for testing
        });

    } catch (err) {
        // Handle MongoDB validation or duplicate key errors
        res.status(400).json({ success: false, error: err.message || 'Registration failed.' });
    }
};

// @desc    Log in user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res, next) => {
    // This will be implemented fully once the JWT function is created.
    res.status(200).json({ 
        success: true, 
        message: 'Login successful (Mocked).',
        token: 'mock-jwt-token-for-user', 
        data: { email: req.body.email, role: 'user' }
    });
};