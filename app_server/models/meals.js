const mongoose = require('mongoose');

// define the meals schema
const mealsSchema = new mongoose.Schema({
    name: {type: String, required: true, index: true},
    image: {type: String, required: true},
    description: {
        title: {type: String, required: true},
        info: {type: String, required: true}
    }
});
module.exports = mongoose.model('meals', mealsSchema);