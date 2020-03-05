const db = require('../database/helper.js');
const bcrypt = require('bcryptjs');

module.exports = (req, res, next) => {
    const {authorization} = req.headers;

    if(authorization) {
        db.findUserByEmail(email)
            .then(user => {
                if(user && bcrypt.compareSync(password, user.password)) {
                    next();
                } else {
                    res.status(401).json({message: 'Invalid credentials'})
                }
            })
    } else {
        res.status(400).json({message: 'Please provide valid credentials'})
    }
}