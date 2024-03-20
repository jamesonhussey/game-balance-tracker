const express = require('express')
const router = express.Router()
const entitiesCtrl = require('../controllers/entities')

//POST /flights/:id/destinations
router.post('/games/:id/entities', entitiesCtrl.create)

module.exports = router