const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock user storage
let users = [];

// User registration endpoint
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    
    // Save new user
    users.push({ username, password });
    res.status(201).json({ message: 'User registered successfully' });
});

// User login endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Create JWT
    const token = jwt.sign({ username }, 'secretkey', { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;