var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-eggshub', 
    { title: 'EggsHub',
      pageId: 'eggshub',
      summary_p1: 'WordPress blog all about eggs.'
  });
});

module.exports = router;
