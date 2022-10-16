const mongoose = require('mongoose');

const { Schema } = mongoose;

const methodSchema = new Schema({
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
});

const Method = mongoose.model('Method', methodSchema);

module.exports = Method;