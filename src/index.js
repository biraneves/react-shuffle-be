const express = require('express');
const routes = require('./routes');

require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();
routes(app);

app.listen(port, () => console.log(`Server listening on port ${port}.`));

module.exports = app;
