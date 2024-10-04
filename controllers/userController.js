const User = require('../models/user'); // Adjust the import based on your file structure

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll(); // Make sure User model is correctly defined
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a user
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.update(req.body, { where: { id } });
        res.sendStatus(204); // No Content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({ where: { id } });
        res.sendStatus(204); // No Content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
