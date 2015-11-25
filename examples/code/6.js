var submitToServer = require('submitToServer');

var receiveEvent = function (name, value) {
    console.log('Received event!', name, value);
    submitToServer(name, value);
};

module.exports = receiveEvent;
