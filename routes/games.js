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

//DELETE /games/:id
router.delete('/:id', gamesCtrl.delete)

//PUT /games/:id
router.put('/:id', gamesCtrl.update)

//GET /games/update
router.get('/update/:id', gamesCtrl.edit)