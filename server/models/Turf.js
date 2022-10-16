const mongoose = require('mongoose');

const { Schema } = mongoose;

const turfSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    effect: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: Number,
        required: true,
        min: 1,
        max: 14
    },
    topLink: {
        type: Boolean,
        default: false
    },
    bottomLink: {
        type: Boolean,
        default: false
    },
    leftLink: {
        type: Boolean,
        default: false
    },
    rightLink: {
        type: Boolean,
        default: false
    },

});

const Turf = mongoose.model('Turf', turfSchema);

module.exports = Turf;