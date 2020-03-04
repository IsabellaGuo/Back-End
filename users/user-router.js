const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../database/helper.js');
const restricted = require('../auth/restricted');
const { jwtSecret } = require('../config/secrets.js');

//create the router
const router = express.Router();
//endpoints
router.post('/register', (req, res) => {
    //implement registration
    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    if (user && user.username && user.email && user.password){
        db.insertUser(user)
        .then((saved) => {
            res.status(201).json({saved})
        })
        .catch(({error}) => {
            res.status(500).json({error})
        })
    } else {
        res.status(400).json({message:"Please provide a username, email address and a password."})
    }
    
});

router.post('/login', (req, res) => {
    const {email, password} = req.body;

    db.findUserByEmail(email)
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({
                    message: `Welcome ${user.username}`,
                    token,
                    user: {
                        user_id: user.user_id,
                        username: user.username,
                        email: user.email
                    }
                })
            } else {
                res.status(401).json({message: 'Incorrect email or password'})
            }
        })
        .catch(({name, message, stack}) => {
            res.status(500).json({ name: name, message: message, stack:stack })
        })
});

router.put('/:id/email', restricted, (req, res) => {
    const id = req.params.id;

    if(req.body.email) {
        db.findUserByID(id)
            .then(user => {
                const updateUser = {
                    ...user,
                    email: req.body.email
                }
                db.updateUser(id, updateUser)
                    .then(() => res.sendStatus(204))
                    .catch(() => res.sendStatus(500));
            })
    } else {
        res.status(400).json({message: 'please provide an email to update with'});
    }
});

router.post('/:id/strains', restricted, (req, res) => {
    const id = req.params.id;

    if(req.body.strainID) {
        db.findStrain(req.body.strainID)
            .then(() => {
                db.saveStrain(id, req.body.strainID)
                    .then(() => res.sendStatus(201))
                    .catch(() => res.sendStatus(500));
            })
            .catch(() => res.sendStatus(404))
    } else {
        res.status(400).json({message: 'please provide strain id'})
    }
})

router.get('/:id/strains', restricted, (req, res) => {
    const id = req.params.id;

    db.getUsers(id)
        .then(() => {
            db.getSavedStrains(id)
                .then(strains => res.send(strains))
                .catch(() => res.sendStatus(500));
        })
        .catch(() => res.sendStatus(404));
})

router.delete('/:id/strains', restricted, (req, res) => {
    const id = req.params.id;

    db.getUsers(id)
        .then(() => {
            if(req.body.strainID) {
                db.removeSavedStrain(id, req.body.strainID)
                    .then(() => res.sendStatus(204))
                    .catch(() => res.sendStatus(500));
            } else {
                res.status(400).json({message: 'please provide strain id'})
            }
        })
        .catch(() => res.sendStatus(404));
})

function generateToken(user) {
    const payload = {
        subject: user.user_id,
        username:user.username
    }

    

    const options = {
        expiresIn: '8h',
    };

    return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;

