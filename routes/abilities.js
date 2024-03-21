const express = require('express')
const router = express.Router()
const abilitiesCtrl = require('../controllers/abilities')

router.post('/entities/:id/abilities', abilitiesCtrl.create)

module.exports = router