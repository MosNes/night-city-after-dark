const mongoose = require('mongoose');

const { Schema } = mongoose;

const characterSchema = new Schema({
    crew: {
        type: Schema.Types.ObjectId,
        ref: 'Crew'
    },
    playbook: {
        type: String,
        required: true,
        enum: [
            'Solo',
            'Rockerboy',
            'Netrunner',
            'Tech',
            'Media',
            'Fixer',
            'Lawman',
            'Nomad'
        ]
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    alias: {
        type: String,
        required: true,
        trim: true
    },
    look: {
        type: String,
        required: true,
        trim: true
    },
    heritage: {
        type: String,
        required: true,
        trim: true
    },
    backgroundName: {
        type: String,
        required: true,
        trim: true
    },
    backgroundType: {
        type: String,
        required: true,
        enum: [
            'Academic',
            'Labor',
            'Law',
            'Trade',
            'Military',
            'Elite',
            'Underworld'
        ]
    },
    vice: {
        type: String,
        required: true,
        enum: [
            'Faith',
            'Gambling',
            'Luxury',
            'Obligation',
            'Pleasure',
            'Stupor',
            'Weird'
        ]
    },
    vicePurveyor: {
        type: String,
        required: true,
        trim: true
    },
    stress: {
        type: Number,
        default: 0,
        max: 9,
        min: 0
    },
    trauma1: {
        type: String,
        required: false,
        default: 'None',
        enum: [
            'None',
            'Cold',
            'Haunted',
            'Obsessed',
            'Paranoid',
            'Reckless',
            'Soft',
            'Unstable',
            'Vicious',
            'Blocked'
        ]
    },
    trauma2: {
        type: String,
        required: false,
        default: 'None',
        enum: [
            'None',
            'Cold',
            'Haunted',
            'Obsessed',
            'Paranoid',
            'Reckless',
            'Soft',
            'Unstable',
            'Vicious',
            'Blocked'
        ]
    },
    trauma3: {
        type: String,
        required: false,
        default: 'None',
        enum: [
            'None',
            'Cold',
            'Haunted',
            'Obsessed',
            'Paranoid',
            'Reckless',
            'Soft',
            'Unstable',
            'Vicious',
            'Blocked'
        ]
    },
    trauma4: {
        type: String,
        required: false,
        default: 'None',
        enum: [
            'None',
            'Cold',
            'Haunted',
            'Obsessed',
            'Paranoid',
            'Reckless',
            'Soft',
            'Unstable',
            'Vicious',
            'Blocked'
        ]
    },
    harmThree: {
        type: String,
        required: false,
        default: null
    },
    harmTwo1: {
        type: String,
        required: false,
        default: null
    },
    harmTwo2: {
        type: String,
        required: false,
        default: null
    },
    harmOne1: {
        type: String,
        required: false,
        default: null
    },
    harmOne2: {
        type: String,
        required: false,
        default: null
    },
    healingClock: {
        type: Number,
        required: false,
        default: 0,
        max: 4,
        min: 0
    },
    lightArmor: {
        type: Boolean,
        default: false,
        required: false
    },
    heavyArmor: {
        type: Boolean,
        default: false,
        required: false
    },
    specialArmor: {
        type: Boolean,
        default: false,
        required: false
    },
    abilities: [
        {
            type: Schema.Types.ObjectId,
            
        }
    ]
});


const Character = mongoose.model('Character', characterSchema);

module.exports = Character;