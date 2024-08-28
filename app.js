const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var skillsRouter = require('./routes/skills');
var portfolioRouter = require('./routes/portfolio');
var sflusRouter = require('./routes/portfolio-sfl-us');
var sflcaRouter = require('./routes/portfolio-sfl-ca');
var sfldocsRouter = require('./routes/portfolio-sfl-docs');
var sflicRouter = require('./routes/portfolio-sfl-ice-cream');
var websolutionsRouter = require('./routes/portfolio-web-solutions');
var tiofRouter = require('./routes/portfolio-tiof');
var tioflpRouter = require('./routes/portfolio-tiof-lp');
var ibuildwebsv1Router = require('./routes/portfolio-ibuildwebs-v1');
var eggshubRouter = require('./routes/portfolio-eggshub');
var vacaRouter = require('./routes/portfolio-vaca');
var jktRouter = require('./routes/portfolio-jkt');
var naniSweetsRouter = require('./routes/portfolio-nani-sweets');
var sdvRouter = require('./routes/portfolio-smithies-dream-vacations');
var turadaRouter = require('./routes/portfolio-turada');
var mdlRouter = require('./routes/portfolio-mdl');
var abbsiRouter = require('./routes/portfolio-abbsi');
var contactRouter = require('./routes/contact');
const privacyRouter = require('./routes/privacy');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/skills', skillsRouter);
app.use('/users', usersRouter);
app.use('/portfolio', portfolioRouter);
app.use('/portfolio-sfl-us', sflusRouter);
app.use('/portfolio-sfl-ca', sflcaRouter);
app.use('/portfolio-sfl-docs', sfldocsRouter);
app.use('/portfolio-sfl-ice-cream', sflicRouter);
app.use('/portfolio-web-solutions', websolutionsRouter);
app.use('/portfolio-tiof', tiofRouter);
app.use('/portfolio-tiof-lp', tioflpRouter);
app.use('/portfolio-ibuildwebs-v1', ibuildwebsv1Router);
app.use('/portfolio-eggshub', eggshubRouter);
app.use('/portfolio-vaca', vacaRouter);
app.use('/portfolio-jkt', jktRouter);
app.use('/portfolio-nani-sweets', naniSweetsRouter);
app.use('/portfolio-smithies-dream-vacations', sdvRouter);
app.use('/portfolio-turada', turadaRouter);
app.use('/portfolio-mdl', mdlRouter);
app.use('/portfolio-abbsi', abbsiRouter);
app.use('/contact', contactRouter);
app.use('/privacy', privacyRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

  if (req.headers.host.startsWith('www.')) {
    const nonWwwHost = req.headers.host.slice(4);
    return res.redirect(301, req.protocol + '://' + nonWwwHost + req.originalUrl);
  }
  next();
});

module.exports = app;
