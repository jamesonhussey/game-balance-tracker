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
        required: true,
    },
    lastBalancedDate: {
        type: Date,
        required: true,
    },
    entityDescription: {
        type: String,
        default: '',
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
        required: true,
    },
    totalEntries: {
        type: Number,
        default: 0,
    },
    gameType: {
        type: String,
        enum: ['fps', 'souls-like',]
    },
    lastPatchDate: {
        type: Date,
        required: true,
    },
    entities: {
        type: [entitySchema],
    },
}, {
    timestamps: true
})


module.exports = mongoose.model('game', gameSchema)