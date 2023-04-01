var express = require('express');
var router = express.Router();

/* GET Contact page. */
router.get('/', function(req, res, next) {
  res.render('privacy', 
    { title: 'Privacy Policy',
      pageId: 'privacy'
  });
});

module.exports = router;
