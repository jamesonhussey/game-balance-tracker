const Game = require('../models/game')
// const Ticket = require('../models/ticket')

module.exports = {
    new: newGame,
    create,
    index,
    show,
    delete: deleteGame,
    update,
    edit,
}

function newGame(req, res) {
    res.render('games/new', {title: 'add game', errorMsg: ''})
}

async function index(req, res) {
    const games = await Game.find({})
    res.render('games/index', { title: "all games", games })
}

async function create(req, res) {
    try {
        await Game.create(req.body)
        res.redirect('games')
    } catch(err) {
        console.log(err)
        res.render('games/new', {title: err, errorMsg: err.message})
    }
}

async function show(req, res) {
    console.log(req.params.id)
    const game = await Game.findById(req.params.id)
    console.log(game)
    res.render('games/show', {
        title: 'game details',
        game,
    })
}

async function deleteGame(req,res) {
    await Game.findByIdAndDelete(req.params.id)
    res.redirect('/games')
}

async function update(req, res) {
    await Game.findByIdAndUpdate(req.params.id, req.body)
    
    res.redirect('/games')
}

async function edit(req, res) {
    const info = await Game.findById(req.params.id)
    try {
        res.render('games/update', {title: 'update', errorMsg: '', info})
    } catch {

    }
}