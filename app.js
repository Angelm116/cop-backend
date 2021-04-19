const bodyParser = require('body-parser');
var express = require('express');
var routes = require('./routes/routes.js');
var app = express();
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(routes);


var port = 3000;

app.listen(port, () => console.log(`Running on ${port}`));