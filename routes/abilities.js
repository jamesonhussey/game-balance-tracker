const express = require('express')
const router = express.Router()
const abilitiesCtrl = require('../controllers/abilities')

//POST /flights/:id/destinations
router.post('/entities/:id/abilities', abilitiesCtrl.create)

module.exports = router