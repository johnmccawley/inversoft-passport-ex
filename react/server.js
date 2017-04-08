'use strict';

const configFile = require ('./config/config.json');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./build'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

// listen (start app with node server.js) ======================================
app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;




