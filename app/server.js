'use strict';
const path = require('path');
const express = require('express');

// PORT
const PORT = 8080;
// HOST
const HOST = '0.0.0.0';

const app = express();
app.use('/', express.static(path.join(__dirname, 'static')));

app.listen(PORT, HOST);
console.log(`Running on ${HOST}:${PORT}`);
