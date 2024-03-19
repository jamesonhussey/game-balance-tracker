const mongoose = require('mongoose')
const Schema = mongoose.Schema


const abilitySchema = new Schema({
    abilityName: {
        type: String,
    },
    abilityDescription: {
        type: String,
    },
    abilityType: {
        type: String,
        enum: ['active', 'passive'],
    },
    abilityElement: {
        type: String,
    },
    abilityDamage: {
        type: Number,
    },
    abilityHealing: {
        type: Number,
    },
    abilityNotes: {
        type: String,
    },
}, {
    timestamps: true
})


const entitySchema = new Schema({
    name: {
        type: String,
    },
    lastBalancedDate: {
        type: Date,
    },
    entityDescription: {
        type: String,
    },
    abilities: {
        type: [abilitySchema]
    }
}, {
    timestamps: true
})


const gameSchema = new Schema({
    title: {
        type: String,
    },
    totalEntries: {
        type: Number,
    },
    gameType: {
        type: String,
        enum: ['fps', 'souls-like',]
    },
    lastPatchDate: {
        type: Date,
    },
    entities: {
        type: [entitySchema],
    },
}, {
    timestamps:true
})


module.exports = mongoose.model('game', gameSchema)