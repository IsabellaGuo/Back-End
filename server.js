const express = require('express');
const cors = require('cors');

const userRoutes = require('./users/user-router.js');
const strainRoutes = require('./strains/strains-router.js');

const server = express();
server.use(express.json());
server.use(cors());

server.use('/api/users', userRoutes);
server.use('/api/strains', strainRoutes);

module.exports = server;