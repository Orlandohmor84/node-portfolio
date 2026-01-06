var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-zota-properties', 
    { title: 'Zota Properties',
      pageId: 'zota-properties',
      summary_p1: 'The new website for zotaprop.com was designed to reflect the personalized, boutique experience today’s buyers and sellers expect.',
      link: 'https://zotaprop.com/'
  });
});

module.exports = router;
