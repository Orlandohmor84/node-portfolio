const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const aboutRouter = require('./routes/about');
const skillsRouter = require('./routes/skills');
const contactRouter = require('./routes/contact');
const privacyRouter = require('./routes/privacy');
const accessibilityRouter = require('./routes/accessibility');
const testimonialsRouter = require('./routes/testimonials');
const portfolioRouter = require('./routes/portfolio');
const sflusRouter = require('./routes/portfolio-sfl-us');
const sflcaRouter = require('./routes/portfolio-sfl-ca');
const sfldocsRouter = require('./routes/portfolio-sfl-docs');
const sflicRouter = require('./routes/portfolio-sfl-ice-cream');
const websolutionsRouter = require('./routes/portfolio-web-solutions');
const tiofRouter = require('./routes/portfolio-tiof');
const tioflpRouter = require('./routes/portfolio-tiof-lp');
const ibuildwebsv1Router = require('./routes/portfolio-ibuildwebs-v1');
const eggshubRouter = require('./routes/portfolio-eggshub');
const vacaRouter = require('./routes/portfolio-vaca');
const jktRouter = require('./routes/portfolio-jkt');
const naniSweetsRouter = require('./routes/portfolio-nani-sweets');
const sdvRouter = require('./routes/portfolio-smithies-dream-vacations');
const turadaRouter = require('./routes/portfolio-turada');
const mdlRouter = require('./routes/portfolio-mdl');
const abbsiRouter = require('./routes/portfolio-abbsi');
const parkingMateRouter = require('./routes/portfolio-parking-mate');
const dizzyMagicRouter = require('./routes/portfolio-dizzy-magic');
const healthInsuranceNowRouter = require('./routes/portfolio-health-insurance-now');
const tropicalTimberwoodsRouter = require('./routes/portfolio-tropical-timberwoods');
const theGodfatherSolutionRouter = require('./routes/portfolio-the-godfather-solution');
const freshStartTherapyServicesRouter = require('./routes/portfolio-fresh-start-therapy-services');
const solidAthleticsRouter = require('./routes/portfolio-solid-athletics');
const superiorShinglesRouter = require('./routes/portfolio-superior-shingles');
const hannaSusannaArtRouter = require('./routes/portfolio-hanna-susanna-art');
const fiveStonesLawncareRouter = require('./routes/portfolio-five-stones-lawncare');
const mmLiveRouter = require('./routes/portfolio-magic-mayhem-live');
const infSigRouter = require('./routes/portfolio-infinite-signature');
const zotaPropRouter = require('./routes/portfolio-zota-properties');
const naniSweetsLpRouter = require('./routes/portfolio-nani-sweets-lp');
const solidAthleticsSlimFitLpRouter = require('./routes/portfolio-solid-athletics-slim-fit-lp');
const ibwsRepMgmtRouter = require('./routes/portfolio-ibws-rep-mgmt');
const osvanaRouter = require('./routes/portfolio-osvana');
const ibwsBfcmRouter = require('./routes/portfolio-ibws-bfcm');


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
app.use('/contact', contactRouter);
app.use('/privacy', privacyRouter);
app.use('/accessibility', accessibilityRouter);
app.use('/testimonials', testimonialsRouter);
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
app.use('/portfolio-parking-mate', parkingMateRouter);
app.use('/portfolio-dizzy-magic', dizzyMagicRouter);
app.use('/portfolio-health-insurance-now', healthInsuranceNowRouter);
app.use('/portfolio-tropical-timberwoods', tropicalTimberwoodsRouter);
app.use('/portfolio-the-godfather-solution', theGodfatherSolutionRouter);
app.use('/portfolio-fresh-start-therapy-services', freshStartTherapyServicesRouter);
app.use('/portfolio-solid-athletics', solidAthleticsRouter);
app.use('/portfolio-superior-shingles', superiorShinglesRouter);
app.use('/portfolio-hanna-susanna-art', hannaSusannaArtRouter);
app.use('/portfolio-five-stones-lawncare', fiveStonesLawncareRouter);
app.use('/portfolio-magic-mayhem-live', mmLiveRouter);
app.use('/portfolio-infinite-signature', infSigRouter);
app.use('/portfolio-zota-properties', zotaPropRouter);
app.use('/portfolio-nani-sweets-lp', naniSweetsLpRouter);
app.use('/portfolio-solid-athletics-slim-fit-lp', solidAthleticsSlimFitLpRouter);
app.use('/portfolio-ibws-rep-mgmt', ibwsRepMgmtRouter);
app.use('/portfolio-osvana', osvanaRouter);
app.use('/portfolio-ibws-bfcm', ibwsBfcmRouter);


app.set("trust proxy", true); // if behind NGINX/Heroku/Cloudflare/etc.

app.use(function (req, res, next) {
  const host = req.headers.host || "";
  const url  = req.originalUrl || "/";

  // Skip localhost / dev
  if (host.includes("localhost") || host.startsWith("127.0.0.1")) {
    return next();
  }

  const isHttps = req.secure === true;

  let newHost = host;
  let needRedirect = false;

  // Force www
  if (!host.startsWith("www.")) {
    newHost = "www." + host;
    needRedirect = true;
  }

  // Force HTTPS
  if (!isHttps) {
    needRedirect = true;
  }

  if (needRedirect) {
    return res.redirect(301, `https://${newHost}${url}`);
  }

  next();
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

});

module.exports = app;
