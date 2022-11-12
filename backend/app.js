require('dotenv').config();
var createError = require('http-errors');
const express= require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
const passport = require('passport');

require('./model/db');
require('./config/passport')

const apiRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

//Cath unauthorzied error and create 401

app.use('/api', (req,res,next)=>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });

app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

// error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
//   });

app.listen(3000, ()=>console.log( String.fromCodePoint(0x2705) + 
"\x1b[36m\x1b[5m API listening on http://localhost:3000 \x1b[0m"))
  

process.on('SIGINT', function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  // some other closing procedures go here
  process.exit(0);
});

module.exports = app;
