const bodyParser = require('body-parser');
const rituais = require('./rituaisRoutes');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(rituais);
};
