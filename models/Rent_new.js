const mongoose = require('mongoose');


const Rent_New = new mongoose.Schema({
    sq_feet: {
        type: String,
       
    }, price: {
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

module.exports = mongoose.model('Rent_New', Rent_New);