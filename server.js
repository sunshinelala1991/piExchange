var express=require('express');
var app=express();
var port=process.env.PORT||8080;
var mongoose=require('mongoose');
var passport=require('passport');
var flash=require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');
app.use(express.static(__dirname+"/views"));
mongoose.connect(configDB.url);
require('./config/passport')(passport); 
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating


app.use(session({ secret: 'lajksfdjasljsfdlajfdlajf' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);