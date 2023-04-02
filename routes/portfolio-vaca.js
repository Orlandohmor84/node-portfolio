var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-vaca', 
    { title: 'Vaca Exclusive',
      pageId: 'portfolio',
      summary_p1: 'Designed and developed progressive web app for a vacation sales company using agile, iteration based, just-in-time approach. Connected to Solve CRM via API.',
      summary_p2: 'Custom scripts were written to deliver user experience based on each unique user\'s browsing activity. Heavy automation for development processes using Gulp such as resizing and compressing images for optimal use in a multiple locations.'
  });
});

module.exports = router;
