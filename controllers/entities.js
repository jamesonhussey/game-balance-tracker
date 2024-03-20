const Game = require('../models/game')

module.exports = {
    create,
    index,
}

async function create(req, res) {
    const game = await Game.findById(req.params.id)
    game.entities.push(req.body)
    try {
        await game.save()
    } catch(err) {
        console.log(err)
    }
    res.redirect(`/games/${game._id}`)
}

async function index(req, res) {
    const games = await Game.findById(req.params.id)
    res.render('entities/index', { title: 'This Game', games })
}