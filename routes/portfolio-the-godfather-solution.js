var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-the-godfather-solution', 
    { title: 'The Godfather Solution',
      pageId: 'the-godfather-solution',
      summary_p1: 'I designed and developed a modern, user-friendly website optimized for conversions, implemented a robust SEO strategy to increase local visibility, and created a content-rich blog to drive organic traffic and establish industry authority.',
      link: 'https://thegodfathersolution.com/'
  });
});

module.exports = router;
