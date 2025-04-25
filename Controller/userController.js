// userController.js

const users = require('../model/userModel.js');

// Function to get all users
const getUsers = (req, res) => {
  res.json(users);
};

module.exports = { getUsers };
