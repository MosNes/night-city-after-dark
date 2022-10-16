const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
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
    parent: {
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
            'Nomad',
            'Contract Killers',
            'Guns for Hire',
            'Technocult',
            'Dealers',
            'Ghosts',
            'Smugglers'
        ]
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;