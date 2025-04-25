
const express = require('express');
const { createServer } = require('@vercel/node'); // Vercel serverless function handler
const app = require('../app'); // Import your existing Express app

module.exports = createServer(app);