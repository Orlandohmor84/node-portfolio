var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-sfl-docs', 
    { title: 'iBuildWebs v2',
      pageId: 'portfolio'
  });
});

module.exports = router;
