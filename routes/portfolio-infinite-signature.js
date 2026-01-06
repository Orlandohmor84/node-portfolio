var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-infinite-signature', 
    { title: 'Infinite Signature',
      pageId: 'infinite-signature',
      summary_p1: 'I Build Web Solutions partnered with Infinite Signature Home Theater Designs to deliver a complete digital transformation — from a full website redesign to an SEO and paid ads strategy built to attract high-end clientele across Central Florida.',
      link: 'https://infinitesignaturehtd.com/'
  });
});

module.exports = router;
