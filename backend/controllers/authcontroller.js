// MarcoHotel/backend/controllers/authController.js

// NOTE: Using a Mock User Model for temporary API testing until a database is set up.
const User = {
    // Mock for finding a user by email (for login/duplicate check)
    findOne: async (query) => {
        // Simulate finding a user (e.g., check for duplicate email)
        if (query.email === 'test@example.com') {
            return { _id: 'mock-user-456', email: query.email, name: 'Test User', role: 'user', password: 'hashedpassword' };
        }
        return null; // User not found
    },
    
    // Mock for creating a new user
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


// @desc    Register a user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res, next) => {
    const { name, email, password, role } = req.body;

    try {
        // In a real app, check if user already exists
        // const existingUser = await User.findOne({ email });
        // if (existingUser) {
        //     return res.status(400).json({ success: false, message: 'User already exists' });
        // }
        
        // --- MOCK IMPLEMENTATION ---
        const user = await User.create({
            name,
            email,
            password, // Password would be hashed here in a real scenario
            role
        });
        // --- END MOCK IMPLEMENTATION ---

        // Success response
        res.status(201).json({
            success: true,
            message: 'User registered successfully (Mocked).',
            data: user, // Temporary response data
            token: 'mock-jwt-token-for-new-user' // Ready for JWT implementation
        });

    } catch (err) {
        // Generic error handler
        res.status(500).json({ 
            success: false, 
            error: err.message || 'Registration failed due to server error.' 
        });
    }
};

// @desc    Log in user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res, next) => {
    const { email, password } = req.body;

    // NOTE: This is a robust mock that is ready for JWT implementation
    try {
        // In a real app:
        // 1. Find the user: const user = await User.findOne({ email }).select('+password');
        // 2. Check password: const isMatch = await user.matchPassword(password);
        // 3. Handle errors if not found/no match

        // MOCK LOGIC: Always succeeds with a token
        if (!email || !password) {
             return res.status(400).json({ success: false, message: 'Please provide email and password' });
        }
        
        res.status(200).json({ 
            success: true, 
            message: 'Login successful (Mocked).',
            token: 'mock-jwt-token-for-user', 
            data: { 
                email: email, 
                role: 'user',
                name: 'Mock User'
            }
        });

    } catch (err) {
        res.status(500).json({ 
            success: false, 
            error: err.message || 'Login failed due to server error.' 
        });
    }
};