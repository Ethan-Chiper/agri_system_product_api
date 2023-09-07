const Express = require('express');
const app = Express();
let helmet = require('helmet');
app.use(helmet.hidePoweredBy());
const bodyParser = require('body-parser');

const winston = require('winston');
const logger = winston.createLogger({
    transports: [new winston.transports.Console(),]
});

require('./Database/MultiConnection').createConnection();
app.use(bodyParser.json());

// app.use('/api/farmer', require('./Controllers/Farmer/FarmerRouter'));

let server = app.listen(5072, () => {
    logger.info('Server is running port on: ' + server.address().port);
});

module.exports = app;

