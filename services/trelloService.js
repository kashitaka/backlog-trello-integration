var
    request = require( 'request' );
    LIST_ID = process.env.TRELLO_LIST_ID,
    API_KEY = process.env.TRELLO_API_KEY,
    API_TOKEN = process.env.TRELLO_API_TOKEN;

if (!LIST_ID || !API_KEY || !API_TOKEN){
    console.log("Trello environemt variable is not set");
};


var createCard = function(title, description){

    var options = {
        method: 'POST',
        url: 'https://api.trello.com/1/cards',
        qs: {
            key: API_KEY,
            token: API_TOKEN,
            idList: LIST_ID,
            name: title,
            desc: description,
            keepFromSource: 'all',
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
    });
};

module.exports = {
    createCard: createCard,
};