const Game = require('../models/game')

module.exports = {
    create
}

async function create(req, res) {
    try {
        await Game.create(req.body)
        res.redirect('games')
    } catch (err) {
        console.log(err)
        res.render('games/new', { title: err, errorMsg: err.message })
    }
}