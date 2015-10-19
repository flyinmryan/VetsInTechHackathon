// =====================================
// DEPENDENCIES ========================
// =====================================

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var morgan = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var passport = require('passport');

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

// app.use(session({secret: 'supernova', saveUninitialized: true, resave: true}));
// app.use(passport.initialize());
// app.use(passport.session());

// Session-persisted message middleware
// app.use(function(req, res, next){
//  var err = req.session.error,
//      msg = req.session.notice,
//      success = req.session.success;

//  delete req.session.error;
//  delete req.session.success;
//  delete req.session.notice;

//  if (err) res.locals.error = err;
//  if (msg) res.locals.notice = msg;
//  if (success) res.locals.success = success;

//  next();
// });

// Configure express to use handlebars templates
// var hbs = exphbs.create({
//    defaultLayout: 'main', //we will be creating this layout shortly
// });

app.set('view engine', 'ejs'); 



app.listen(8888, function(){
	console.log('Listening on port 8888!');
});
