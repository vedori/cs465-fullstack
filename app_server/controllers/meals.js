const fs = require('fs');
const mealsData = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', {title: 'Meals - Travlr Getaways', mealsData});
}
module.exports = {
    meals
}