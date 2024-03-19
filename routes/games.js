var express = require('express');
var router = express.Router();
const gamesCtrl = require('../controllers/games')

module.exports = router;

//GET /games/new
router.get('/new', gamesCtrl.new)

//POST /games
router.post('/', gamesCtrl.create)

//GET route to /games (index)
router.get('/', gamesCtrl.index)

//GET /games/:id
router.get('/:id', gamesCtrl.show)