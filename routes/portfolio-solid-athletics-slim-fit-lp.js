var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-solid-athletics-slim-fit-lp', 
    { title: 'Solid Athletics SlimFit Crop Top Landing Page',
      pageId: 'portfolio-solid-athletics-slim-fit-lp',
      summary_p1: 'This Solid Athletics Slim Fit Crop Top landing page was built to convert style-driven athletes into buyers with clarity and confidence. The design highlights performance benefits at a glance—fit, stretch, and versatility—while using bold visuals, benefit-focused copy, and streamlined CTAs to keep momentum moving toward purchase. Every UX decision supports fast scanning, mobile-first shopping, and trust-building, turning product interest into action without distraction. 💪✨',
      link: 'https://slim-fit-crop-top.solid-athletics.com/'
  });
});

module.exports = router;
