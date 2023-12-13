const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let timerSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',                
        required: true,
    },
    timer: {
        type: Number, 
        required: true,
    },
});

module.exports = mongoose.model('Timer', timerSchema);
