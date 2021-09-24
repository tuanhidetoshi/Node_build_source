const express = require('express');
require('dotenv').config();

const routes = require('./routes');
const db = require('./database');

const app = express();
app.use(express.json());

db.connect();

app.get('/', (req, res) => {
    res.json({status: 'UP'})
})

app.use(routes)

const _PORT = process.env.PORT

app.listen(_PORT, () => {
    console.log("Listening on port " + _PORT)
})
