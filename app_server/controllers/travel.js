const request = require('request');
const apiOptions = {
    server: "http://localhost:3000"
};

/* internal method to render the travel list */
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + '- Travel';
    pageTitle = 'Travel - Travlr Getaways';
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No trips exist in our database!';
        }
    }
    res.render('travel',
        {
            title: pageTitle,
            trips: responseBody,
            message
        }
    );
};

/* GET travel list view */
const travelList = (req, res) => {
    //res.render('travel', { title: 'Travel - Travlr Getaways', trips});
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    console.info('>> travelController.travelList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, response, body) => {
            if (err) {
                console.error(err);
            }
            // method handles rendering the view
            renderTravelList(req, res, body);
        }
    );
};
module.exports = {
    travelList
};