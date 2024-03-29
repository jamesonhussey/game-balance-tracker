const Game = require('../models/game')

module.exports = {
    create,
    show,
}

async function create(req, res) {
    const game = await Game.findById(req.params.id)
    game.entities.push(req.body)
    try {
        await game.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/games/${game._id}`)
}

async function show(req, res) {
    const game = await Game.findOne({ 'entities._id': req.params.id })
    res.render('entities/show', {
        title: 'game details',
        game,
    })
}