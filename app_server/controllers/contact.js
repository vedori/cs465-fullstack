const fs = require('fs');
const contactData = JSON.parse(fs.readFileSync('./data/contacts.json', 'utf8'));

/* GET contact view */
const contact = (req, res) => {
    res.render('contact', {title: 'Contact - Travlr Getaways', contactData})
}
module.exports = {
    contact
}