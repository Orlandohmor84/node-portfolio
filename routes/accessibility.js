var express = require('express');
var router = express.Router();

/* GET Contact page. */
router.get('/', function(req, res, next) {
  res.render('accessibility', 
    { title: 'Web Accessibility Policy',
      pageId: 'accessibility'
  });
});

module.exports = router;
