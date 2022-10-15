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
    //5th trauma box that can be unlocked w/ Hardened crew upgrade
    trauma5: {
        type: String,
        required: false,
        default: 'Locked',
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
            'Blocked',
            'Locked'
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
            ref: 'Ability'
        },
    ],
    veteranAbilities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ability'
        }
    ],
    playbookItems: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        }
    ],
    genericItems: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        }
    ],
    eddies: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 4
    },
    stash: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 40
    },
    playbookXP: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 8
    },
    insightXP: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 6
    },
    prowessXP: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 6
    },
    resolveXP: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 6
    },
    huntSkill: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 4
    },
    studySkill: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 4
    },
    surveySkill: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 4
    },
    tinkerSkill: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 4
    },
    finesseSkill: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 4
    },
    prowlSkill: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 4
    },
    skirmishSkill: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 4
    },
    wreckSkill: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 4
    },
    interfaceSkill: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 4
    },
   commandSkill: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 4
    },
    consortSkill: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 4
    },
    swaySkill: {
        type: Number,
        default: 0,
        required: false,
        min: 0,
        max: 4
    },
    contacts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Contact'
        }
    ],
    friendlyContacts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Contact'
        }
    ],
    rivalContacts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Contact'
        }
    ],
    equippedItems: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        }
    ],
    load: {
        type: String,
        default: 'None',
        required: false,
        enum: [
            'None',
            'Light',
            'Normal',
            'Heavy'
        ]
    },
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;