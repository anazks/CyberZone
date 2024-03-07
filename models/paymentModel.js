const mongoose = require('mongoose');


const payment = new mongoose.Schema({
    company_name: {
        type: String,
        required: [true, "Must Provide company_name"],
      
    },
    company_id: {
        type: String,
        required: [true, "Must Provide company_name"],
      
    },
     amount: {
        type: String,
        required: [true, "Must Provide email"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Must Provide description"],
       
    },
    date: {
        type: String,
        required: [true, "Must Provide description"],
       
    }
})

module.exports = mongoose.model('payment', payment);