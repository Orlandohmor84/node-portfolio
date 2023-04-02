var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-ibuildwebs-v1', 
    { title: 'iBuildWebs v1',
      pageId: 'portfolio',
      summary_p1: 'Portfolio website showcasing skills, projects, and development efforts created multiple times using various programming languages and libraries.',
      summary_p2: 'Exact website was replicated four times using four disticnt ways to build including Angular, jQuery, PHP, and W3.JS.'
  });
});

module.exports = router;
