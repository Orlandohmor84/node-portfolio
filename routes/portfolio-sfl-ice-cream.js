var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-sfl-ice-cream', 
    { title: 'Smart for Life Ice Cream Protein Bars',
      link_external: 'https:\/\/icecreamproteinbars.net/',
      summary_p1: 'Customed designed landing page for new product release. Built for mobile and speed.',
      pageId: 'portfolio-sfl-ice-cream'
  });
});

module.exports = router;
