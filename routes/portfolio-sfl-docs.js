var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-sfl-docs', 
    { title: 'Smart for Life Website Documentation',
      pageId: 'sfl-docs',
      summary_p1: 'Website documentation for Smart for Life eCommerce websites to supports users and developers.'
  });
});

module.exports = router;
