const fs = require('fs');
const newsData = JSON.parse(fs.readFileSync('./data/news.json'));

/* GET news view */
const news = (req, res) => {
    res.render('news', {title: 'News - Travlr Gateways', newsData} );
}
module.exports = {
    news
}