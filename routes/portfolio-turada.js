var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-turada', 
    { title: 'Turada Hardwood Shingles',
      pageId: 'turada',
      summary_p1: 'Search engine optimized website for a hardwood roofing shingles product with blog, galleries, forms, and more. Also setup CRM with automations and integrated into website.'
  });
});

module.exports = router;
