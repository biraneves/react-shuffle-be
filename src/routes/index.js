const bodyParser = require('body-parser');
const rituais = require('./rituaisRoutes');
const pessoas = require('./pessoasRoutes');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(rituais, pessoas);
};
