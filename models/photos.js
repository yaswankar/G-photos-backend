const mongoose = require('mongoose');


const photoSchema = new mongoose.Schema({
    location: {
        type: String,
        required: false,
        default: ""
    },
    description: {
        type: String,
        required: false
    },
    createdAt: {
        type: Number,
        required: true,
        default: Date.now()
    },
    favourite: {
        type: Boolean,
        required: true,
        default: false
    },
    trashed: {
        type: Boolean,
        required: true,
        default: false
    },
    size: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('images', photoSchema);