const mongoose = require('mongoose');


const complaints = new mongoose.Schema({
    complaints: {
        type: String,
       
    }, email: {
        type: String,
        required: [true, "Must Provide email"],
     
    },
    company_id: {
        type: String,
        
    },
    company_Name: {
        type: String,
       
    }
})

module.exports = mongoose.model('complaints', complaints);