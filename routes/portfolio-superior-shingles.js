var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-superior-shingles', 
    { title: 'Superior Shingles',
      pageId: 'superior-shingles',
      summary_p1: 'I redesigned the website to give the company a modern, user-friendly website that performs across all devices. The new site features a clean layout, improved mobile responsiveness, and SEO enhancements to help Superior Shingle reach more customers online and provide a smoother experience from first click to final contact.',
      link: 'https://superiorshingle.com/'
  });
});

module.exports = router;
