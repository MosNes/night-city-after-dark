const mongoose = require('mongoose');

const { Schema } = mongoose;

const crewAbilitySchema = new Schema({
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
    caption: {
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
});

const CrewAbility = mongoose.model('CrewAbility', crewAbilitySchema);

module.exports = CrewAbility;