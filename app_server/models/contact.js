const mongoose = require('mongoose');

// define the contact schema
const contactSchema = new mongoose.Schema({
    address: {type: String, required: true, index: true},
    telephone: {type: String, required: true},
    fax: {type: String, required: true}
});
module.exports = mongoose.model('contacts', contactSchema);