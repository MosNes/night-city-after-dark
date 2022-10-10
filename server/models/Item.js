const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    load: {
        type: Number,
        required: true,
        min: 0,
        max: 3
    },
    playbook: {
        type: String,
        required: true,
        enum: [
            'Generic',
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

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;