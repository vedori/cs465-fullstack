const fs = require('fs');
const roomsData = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {title: 'Rooms - Travlr Getaways', roomsData});
}
module.exports = {
    rooms
}