// C:\ProgramData\MySQL\MySQL Server 8.0\Data\sakila

require('dotenv').config();

const express = require("express");
const bodyparser = require('body-parser');
const { databaseService } = require('./services/databaseService');

const app = express();

app.use(bodyparser.json());


require ('./routes')(app, databaseService());

app.listen(3000, function () {
    console.log('App listening in port 3000!')
});

