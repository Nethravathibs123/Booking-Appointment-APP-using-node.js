const express = require('express');
const router = express.Router(); // Create a new router
const userController = require('../controllers/userController'); // Import your controller

// Define your routes
router.get('/user', userController.getUsers); // Adjust the controller function as needed
router.post('/users', userController.createUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

// Export the router
module.exports = router;
