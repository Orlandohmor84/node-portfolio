var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-tiof', 
    { title: 'The Institute of F.I.L.M.S.',
      link_external: 'https:\/\/theinstituteoffilms.org/home/',
      pageId: 'portfolio-tiof',
      link: 'https://theinstituteoffilms.org/home/'
  });
});

module.exports = router;
