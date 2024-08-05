var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-nani-sweets', 
    { title: 'Nani Sweets',
      link_external: 'https:\/\/www.nanisweets.com/',
      pageId: 'portfolio-nani-sweets',
      summary_p1: 'Ecommerce website built on Shopify with loyalty rewards programs, reviews, Klaviyo email and text marketing integrations.',
      summary_p2: 'Also created conversion-oriented landing pages for ads and new customer acquisition.'
  });
});

module.exports = router;
