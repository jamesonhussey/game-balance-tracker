const express = require('express')
const router = express.Router()
const entitiesCtrl = require('../controllers/entities')

router.post('/games/:id/entities', entitiesCtrl.create)


router.get('/entities/:id', entitiesCtrl.show)
module.exports = router