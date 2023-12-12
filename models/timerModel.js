const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let timerSchema = new Schema({
    user : {
        type: String,
        required: true,
        unique: true,
    },
    timer : {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Timer', timerSchema);