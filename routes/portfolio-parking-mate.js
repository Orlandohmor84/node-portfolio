var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-parking-mate', 
    { title: 'Parking Mate',
      pageId: 'parking-mate',
      summary_p1: 'The redesign and SEO overhaul of the website focused on creating a user-friendly, visually engaging website that enhanced the user experience to increase conversions.',
      link: 'https://parkingmate.us/'
  });
});

module.exports = router;
