var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-solid-athletics', 
    { title: 'Solid Athletics',
      pageId: 'portfolio-solid-athletics',
      summary_p1: 'I designed and developed a custom Shopify eCommerce site for Solid Athletics, featuring mobile-first UX, SEO-optimized architecture, and a fully integrated digital marketing setup. From responsive design to conversion-focused features, this project showcases a scalable solution for modern fitness retail.',
      link: 'https://solid-athletics.com/'
  });
});

module.exports = router;
