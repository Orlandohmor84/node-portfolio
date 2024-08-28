var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-jkt', 
    { title: 'JK Television',
      summary_p1: 'Custom designed website integrated with Square ecommerce via Ecwid and email marketing integration with MailChimp.',
      pageId: 'portfolio'
  });
});

module.exports = router;
