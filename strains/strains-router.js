const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../database/helper.js');
const restricted = require('../auth/restricted');

const router = express.Router();

router.get("/", (req, res) => {
    db.getStrains()
      .then(db => {
        res.status(200).json(db);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: "The strains information could not be found" });
      });
  });

router.get('/', restricted, (req, res) => {
    db.getStrains()
        .then(strains => {
            const refractored = strains.map(strain => {
                return {
                    ...strain,
                   
                }
            });
            res.send(refractored);
        });
});

router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;

    db.findStrain(id)
        .then(strain => res.send(strain))
        .catch(() => res.status(404).json({message: 'Strain not found'}))
});

module.exports = router;