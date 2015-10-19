// =====================================
// DEPENDENCIES ========================
// =====================================

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var morgan = require('morgan');

require('./config/mongoose.js');
require('./config/routes.js')(app);


// =====================================
// CONFIGURATION =======================
// =====================================
app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.json());

app.use(morgan('tiny')); 
app.use(cookieParser()); // read cookies (needed for auth)
// app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); 



app.listen(8888, function(){
	console.log('Listening on port 8888!');
});
