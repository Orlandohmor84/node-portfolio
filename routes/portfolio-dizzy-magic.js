var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-dizzy-magic', 
    { title: 'Dizzy Magic',
      pageId: 'parking-mate',
      summary_p1: 'The redesign and SEO overhaul for Dizzy Magic proved highly successful, transforming the website into a visually engaging, user-friendly, and performance-optimized website.',
      link: 'https://dizzymagic.com/'
  });
});

module.exports = router;
