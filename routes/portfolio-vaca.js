var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-vaca', 
    { title: 'Vaca Exclusive',
      pageId: 'portfolio'
  });
});

module.exports = router;
