var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', 
    { title: 'iBuildWebs v2',
      pageId: 'about'
  });
});

module.exports = router;
