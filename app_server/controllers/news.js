/* GET news view */
const news = (req, res) => {
    res.render('news', {title: 'News - Travlr Gateways'} );
}
module.exports = {
    news
}