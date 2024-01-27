/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travel - Travlr Getaways'});
};
module.exports = {
    travel
};