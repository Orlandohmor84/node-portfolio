var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-five-stones-lawncare', 
    { title: '5 Stones Lawncare',
      pageId: 'five-stones-lawncare',
      summary_p1: '5 Stones Lawncare partnered with I Build Web Solutions to launch a professional, faith-based website that reflects their commitment to excellence in lawncare across Ocala and Gainesville, FL. From custom web design to ongoing SEO strategy, we’ve helped position 5 Stones as a trusted local service provider while enhancing their visibility and reach online.',
      link: 'https://5stoneslawncare.com/'
  });
});

module.exports = router;
