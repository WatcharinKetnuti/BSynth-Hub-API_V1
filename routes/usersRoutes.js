// userRoutes.js

const express = require('express');
const router = express.Router();
const { getUsers } = require('../Controller/userController');

// Route to get all users
router.get('/', getUsers);

module.exports = router;
