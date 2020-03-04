// import knex
const knex = require('knex');
// import the config object as db
const config = require('../knexfile.js');



// export based on the environment variable
module.exports = knex(config.development)