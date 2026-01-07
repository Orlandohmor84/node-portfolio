var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-ibws-bfcm', 
    { title: 'Website BFCM Sale',
      pageId: 'ibws-bfcm',
      summary_p1: 'This I Build Web Solutions BFCM sales landing page was built for urgency, clarity, and conversions. Designed to cut through Black Friday noise, the page uses bold value messaging, time-sensitive cues, and a streamlined offer flow to drive fast decision-making. Every element—from headline hierarchy to CTA placement—was optimized to reduce friction and maximize sign-ups, turning seasonal traffic into real revenue opportunities. 🔥🚀',
      link: 'https://ibuildweb.agency/bfcm'
  });
});

module.exports = router;
