var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-abbsi', 
    { title: 'ABBSI',
      pageId: 'abbsi',
      summary_p1: 'This custom-built website for a supplement manufacturer showcases a robust online presence tailored to the B2B market. A sleek, professional design complements the brand\'s identity, while easy navigation streamlines the lead intake process for distributors and retailers. This project highlights the ability to create industry-specific websites that effectively communicate brand values and support complex business operations.',
      link: 'https://abbsii.com/'
  });
});

module.exports = router;
