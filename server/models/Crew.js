//model for each crew record
const mongoose = require('mongoose');

const { Schema } = mongoose;

const crewSchema = new Schema({
    crewType: {
        type: String,
        required: true,
        enum: [
            'Contract Killers',
            'Hired Guns',
            'Technocult',
            'Dealers',
            'Ghosts',
            'Smugglers'
        ]
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    reputation: {
        type: String,
        required: false,
        trim: true,
        default: ''
    },
    lair: {
        type: String,
        required: false,
        trim: true,
        default: ''
    },
    huntingGrounds: {
        type: String,
        required: false,
        trim: true,
        default: ''
    },
    method: {
        type: String,
        required: false,
        trim: true,
        default: ''
    },
    methods: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Method'
        }
    ],
    rep: {
        type: Number,
        default: 0,
        min: 0,
        max: 12
    },
    turfCount: {
        type: Number,
        default: 0,
        min: 0,
        max: 6
    },
    hold: {
        type: String,
        default: 'Strong',
        enum: [
            'Strong',
            'Weak'
        ]
    },
    tier: {
        type: Number,
        default: 0,
        min: 0,
        max: 6
    },
    turf: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Turf'
        }
    ],
    ownedTurf: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Turf'
        }
    ],
    heat: {
        type: Number,
        default: 0,
        min: 0,
        max: 9
    },
    wantedLevel: {
        type: Number,
        default: 0,
        min: 0,
        max: 4
    },
    eddies: {
        type: Number,
        default: 0,
        min: 0,
        max: 12
    },
    vaults: {
        type: Number,
        default: 0,
        min: 0,
        max: 2
    },
    crewXP: {
        type: Number,
        default: 0,
        min: 0,
        max: 8
    },
    crewAbilities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CrewAbility'
        }
    ],
    veteranAbilities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CrewAbility'
        }
    ],
    crewUpgrades: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CrewUpgrade'
        }
    ],
    car: {
        type: Number,
        default: 0,
        min: 0,
        max: 2
    },
    boat: {
        type: Number,
        default: 0,
        min: 0,
        max: 2
    },
    hidden: {
        type: Boolean,
        default: false
    },
    quarters: {
        type: Boolean,
        default: false
    },
    secure: {
        type: Number,
        default: 0,
        min: 0,
        max: 2
    },
    workshop: {
        type: Boolean,
        default: false
    },
    qualityDocuments: {
        type: Boolean,
        default: false
    },
    qualityGear: {
        type: Boolean,
        default: false
    },
    qualitySoftware: {
        type: Boolean,
        default: false
    },
    qualitySupplies: {
        type: Boolean,
        default: false
    },
    qualityTools: {
        type: Boolean,
        default: false
    },
    qualityWeapons: {
        type: Boolean,
        default: false
    },
    trainingInsight: {
        type: Boolean,
        default: false
    },
    trainingProwess: {
        type: Boolean,
        default: false
    },
    trainingResolve: {
        type: Boolean,
        default: false
    },
    trainingPersonal: {
        type: Boolean,
        default: false
    },
    mastery: {
        type: Number,
        default: 0,
        min: 0,
        max: 4
    },
    cohorts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Cohort'
        }
    ]
})

const Crew = mongoose.model('Crew', crewSchema);

module.exports = Crew;