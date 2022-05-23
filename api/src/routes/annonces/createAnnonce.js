const {Annonce} = require('../../db/sequelize')
const multer = require('multer');
const path = require('path');

module.exports = (app) => {
    app.post('/api/annonce', (req, res) => {
        Annonce.create(req.body)
            .then(annonces => res.json(annonces))
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }
    )
}