const mongoose = require('mongoose');

const { Schema } = mongoose;

const crewUpgradeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
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
    cost: {
        type: Number,
        required: true,
        min: 1,
        max: 4
    }
});

const CrewUpgrade = mongoose.model('CrewUpgrade', crewUpgradeSchema);

module.exports = CrewUpgrade;