const Game = require('../models/game')
// const Ticket = require('../models/ticket')

module.exports = {
    new: newGame,
    create,
    index,
    show
}

function newGame(req, res) {
    res.render('games/new', {title: 'Add Game', errorMsg: ''})
}

async function index(rew, res) {
    const games = await Game.find({})
    res.render('games/index', { title: "All Games", games })
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
    const game = await Game.findById(req.params.id)
    // const ticket = await Ticket.find({'flight':req.params.id})
    // console.log(ticket)
    res.render('games/show', {
        title: 'Game Details',
        game,
        // ticket,
    })
}