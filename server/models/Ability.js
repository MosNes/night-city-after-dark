const mongoose = require('mongoose');

const { Schema } = mongoose;

const abilitySchema = new Schema({
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
        required: false,
        trim: true
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
    }

});

const Ability = mongoose.model('Ability', abilitySchema);

module.exports = Ability;