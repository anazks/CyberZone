const mongoose = require('mongoose');


const company = new mongoose.Schema({
    profile: {
        type: String,
        required: [true, "Must Provide name"],
      
    },
     work_pattern: {
        type: String,
        required: [true, "Must Provide email"],
        trim: true,
    },
    Projects: {
        type: String,
        required: [true, "Must Provide phone-no"],
       
    }
})

module.exports = mongoose.model('company', company);