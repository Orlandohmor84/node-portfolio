var express = require('express');
var router = express.Router();

/* GET Contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', 
    { title: 'iBuildWebs v2',
      pageId: 'contact'
  });
});

module.exports = router;
