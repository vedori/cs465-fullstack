const mongoose = require('mongoose');

// define the news schema
const newsSchema = new mongoose.Schema({
    latest: {
        title: {type: String, required: true},
        subtitles: {type: [String], required: true}
    },
    tips: {
        title: {type: String, required: true},
        subtitles: {type: [String], required: true}
    },
    article: {
        title: {type: String, required: true},
        date: {type: String, required: true},
        author: {type: String, required: true},
        image: {type: String, required: true},
        content: {type: String, required: true}
    }
});
module.exports = mongoose.model('news', newsSchema);