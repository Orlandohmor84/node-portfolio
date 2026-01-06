var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-magic-mayhem-live', 
    { title: 'Magic & Mayhem Live',
      summary_p1: 'Built to feel like the show before the show, this custom landing page for Magic & Mayhem Live blends personality, performance, and a little bit of wonder.',
      pageId: 'portfolio-magic-mayhem-live',
      link: 'https://book.dizzymagic.com/'
  });
});

module.exports = router;
