const mongoose = require('mongoose');

const { Schema } = mongoose;

const cohortSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    class: {
        type: String,
        required: true,
        enum: [
            'Gang',
            'Expert'
        ]
    },
    type1: {
        type: String,
        required: true,
        default: 'None'
    },
    type2: {
        type: String,
        required: true,
        default: 'None'
    },
    edge1: {
        type: String,
        required: true,
        default: 'None'
    },
    edge2: {
        type: String,
        required: true,
        default: 'None'
    },
    flaw1: {
        type: String,
        required: true,
        default: 'None'
    },
    flaw2: {
        type: String,
        required: true,
        default: 'None'
    },
});

const Cohort = mongoose.model('Cohort', cohortSchema);

module.exports = Cohort;