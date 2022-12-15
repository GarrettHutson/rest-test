const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    climb: {
        required: true,
        type: String
    },
    grade: {
        required: true,
        type: String
    }
})



module.exports = mongoose.model('Data', dataSchema)


