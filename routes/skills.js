var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('skills', 
    { title: 'iBuildWebs v2',
      pageId: 'skills'
  });
});

module.exports = router;
