var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-web-solutions', 
    { title: 'I Build Web Solutions',
      pageId: 'ibws',
      summary_p1: 'A custom PHP website with client login and accounts component for clients to access project details, status, reports, etc.'
  });
});

module.exports = router;
